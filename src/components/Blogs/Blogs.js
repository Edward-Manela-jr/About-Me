import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const BlogContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.bg};
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.bgLight};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }
`;

const BlogHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #87CEEB;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const BlogPost = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  gap: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  touch-action: manipulation;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
    margin: 0 auto;
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  text-align: center;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }
`;

const BlogDate = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: 0.85rem;
  }
`;

const BlogImage = styled.div`
  width: 400px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  height: 250px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const BlogText = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

  strong {
    color: ${({ theme }) => theme.text_primary};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    
    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const Blogs = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Handle hash navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        navigate('/');
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Initial check
    if (window.location.hash) {
      navigate('/');
    }

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [navigate]);

  const blogPosts = [
    {
      title: "🎉 I have been awarded the 2025 Linux Foundation Training (LiFT) Scholarship!",
      date: "June 2025",
      content: "I'm excited to share that I’ve been selected as a recipient of the 2025 Linux Foundation Training (LiFT) Scholarship! This scholarship recognizes individuals who are passionate about Linux and open-source technologies and supports them with training resources to advance their skills and careers. Being chosen for this opportunity is a huge honor and a motivating step forward in my journey as a Linux and system administration professional."
    },
    {
      title: "Attended Data Science Africa 2025 (DSA 2025)",
      date: "June 2025",
      content: "I attended Data Science Africa 2025, held in Ibadan, Nigeria from June 2nd to 6th. It was a transformative experience that brought together brilliant minds from across Africa and beyond. As a participant, I had the privilege of engaging with cutting-edge research, innovative solutions, and passionate individuals dedicated to advancing data science on the continent."
    },
    {
      title: "Zambia Cybertech Conference 2024 - 2nd Place Winner",
      date: "September 25-26, 2024",
      content: "I won 2nd place in the pitching contest at the Zambia Cybertech Conference, held in Zambia from September 25th to 26th September, 2024, with my pitch titled 'Exploring AI-Driven Innovations for Accelerating Radiology Reporting in Zambia'."
    },
    {
      title: "Presentations at Electronic Theses and Dissertations 2024 Conference (ETD 2024)" ,
      date: "2024",
      content: "Presented full paper titled 'A Pre-Processing Pipeline for Improved ETD Metadata Quality in Downstream Services' and poster titled 'Design and Implementation of an Interoperable Zambia National Electronic Thesis and Dissertation Portal' at the 27th International Symposium on Electronic Theses and Dissertations (ETD 2024) in Livingstone, Zambia."
    },
    {
      title: "Presentation at Pan African Conference on Science, Computing and Telecommunications (PACT 2023)",
      date: "2023",
      content: "Presented student abstract paper Large Scale Analysis of Medical Image Metadata at the Pan African Conference on Science, Computing and Telecommunications (PACT 2023) held in Lusaka, Zambia"
    }
  ];

  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogHeader>My Blog Posts</BlogHeader>
        <BlogContent>
          {blogPosts.map((post, index) => (
            <BlogPost key={index}>
              <div>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogDate>{post.date}</BlogDate>
                <BlogText>
                  {post.content}
                </BlogText>
              </div>
            </BlogPost>
          ))}
        </BlogContent>
      </BlogWrapper>
      <Footer />
    </BlogContainer>
  );
};

export default Blogs;
