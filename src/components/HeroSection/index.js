import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import HeroImg from '../../Images/me2.jpg'
import HeroBgAnimation from '../../HeroBgAnimation';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';


const HeroContainer = styled(motion.div)`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;



const Title = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

//edit the code below to edit the Resume button
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px;
    margin-bottom: 20px;
    color:${({ theme }) => theme.white};
    border-radius: 20px; //curved edges
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(197, 71%, 73%, 1);
    background: linear-gradient(225deg, hsla(197, 71%, 73%, 1) 0%, hsla(203, 89%, 75%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(197, 71%, 73%, 1) 0%, hsla(203, 89%, 75%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(197, 71%, 73%, 1) 0%, hsla(203, 89%, 75%, 1) 100%);
    box-shadow:  5px 5px 20px #1F2634,
    -5px -5px 20px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

// edit the code below to edit the Accomplishments button
const AccomplishmentsButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    //padding: 16px 0; 
    padding: 16px; // consistent padding
    margin-bottom: 20px;
    margin-left: 10px; //spacing from the resume button
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(145, 60%, 50%, 1);
    background: linear-gradient(225deg, hsla(145, 60%, 50%, 1) 0%, hsla(152, 70%, 45%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(145, 60%, 50%, 1) 0%, hsla(152, 70%, 45%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(145, 60%, 50%, 1) 0%, hsla(152, 70%, 45%, 1) 100%);
    box-shadow:  5px 5px 20px #1F2634,
    -5px -5px 20px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Img = styled.img`
  position: relative;
  width: 70%;
  height: 40%;
  max-width: 450px;
  max-height: 440px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: transform 0.5s ease-in-out; /* Add a smooth transition */

  &:hover {
    transform: scale(1.3); /* Increase the size on hover */
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 600px;
    height: 250px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 400px;
    height: 250px;
  }
`;



const Hero = () => {
  return (
    <div id="about"
        >
        <HeroContainer
        initial={{ opacity: 0, y: 1 }} // Initial animation state
        animate={{ opacity: 50, y: 0 }} // Animation state when component enters the viewport
        transition={{ duration: 3, ease: 'easeIn' }} //
    >
            <HeroBg>
                <HeroBgAnimation />
            </HeroBg>
            <HeroInnerContainer>
                <HeroLeftContainer id='left'>
                    <Title>Hi, I am <br /> {Bio.name}</Title>
                    <TextLoop>
                            I am
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                    </TextLoop>
                    <SubTitle>{Bio.description}</SubTitle>
                    <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    <NavLink to="/blogs" target="display" style={{ textDecoration: 'none' }}>
                  <AccomplishmentsButton>Personal Accomplishments</AccomplishmentsButton>
                  </NavLink>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <Img src={HeroImg} alt="hero-image" />
                </HeroRightContainer>
            </HeroInnerContainer>
        </HeroContainer>
    </div>
  )
}

export default Hero