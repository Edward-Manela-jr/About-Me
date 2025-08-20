import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { whiteTheme } from '../../utils/Themes';
import { publications } from '../../data/constants';

const Container = styled(motion.div)`
  width: 100%;
  padding: 4rem 2rem;
  background: ${whiteTheme.bg};
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  color: ${whiteTheme.text_primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PublicationsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PublicationCard = styled(motion.div)`
  background: ${whiteTheme.bg};
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(135, 206, 250, 0.15);
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(135, 206, 250, 0.3);
  }
`;

const PublicationTitle = styled.h3`
  color: ${whiteTheme.text_primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PublicationAuthors = styled.p`
  color: ${whiteTheme.text_secondary};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const PublicationDetails = styled.p`
  color: ${whiteTheme.text_secondary};
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

const Publications = () => {
  return (
    <Container>
      <Title>Publications</Title>
      <PublicationsGrid>
        {publications.map((pub, index) => (
          <PublicationCard
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PublicationTitle>{pub.title}</PublicationTitle>
            <PublicationAuthors>{pub.authors}</PublicationAuthors>
            <PublicationDetails>{pub.journal}</PublicationDetails>
            <PublicationDetails>{pub.year}</PublicationDetails>
            <PublicationDetails><a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.link}</a></PublicationDetails>
              
            {pub.doi && (
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                <PublicationDetails>DOI: {pub.doi}</PublicationDetails>
              </a>
            )}
          </PublicationCard>
        ))}
      </PublicationsGrid>
    </Container>
  );
};

export default Publications;
