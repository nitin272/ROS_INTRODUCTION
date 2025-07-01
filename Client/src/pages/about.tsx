import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/aboutPage.scss';

// Assets
import missionSvg from '../assets/about/mission.svg';
import image2 from '../assets/about/image2.svg';
import jpSvg from '../assets/about/Jp.svg';
import men_image from "../assets/about/men_image.svg";

// Typography scale constants
const TYPOGRAPHY = {
  h1: '2.5rem',    // 40px
  h2: '2rem',      // 32px
  h3: '1.75rem',   // 28px
  h4: '1.5rem',    // 24px
  body: '1.125rem', // 18px
  small: '1rem',   // 16px
  mobile: {
    h1: '2rem',    // 32px
    h2: '1.75rem', // 28px
    h3: '1.5rem',  // 24px
    h4: '1.25rem', // 20px
    body: '1rem',  // 16px
    small: '0.875rem' // 14px
  }
} as const;

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Base styled components
const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 0rem;
  max-width: 2000px;
  background: transparent;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled(motion.section)`
  margin: 3rem 0;
  position: relative;
  padding: 0rem;
  background: transparent;
  border-radius: 15px;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${TYPOGRAPHY.h2};
  color: #ffffff;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 800;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: ${TYPOGRAPHY.mobile.h2};
    margin-bottom: 1rem;
  }
`;

const MainSectionTitle = styled.h1`
  font-size: 8rem;
  color: #ffffff;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 200;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  position: relative;
  letter-spacing: -0.03em;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Montserrat', 'Inter', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
  }
`;

const TextContent = styled.div`
  padding: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0.75rem;
  }
  
  h3 {
    font-size: ${TYPOGRAPHY.h3};
    color: #ffffff;
    margin-bottom: 2rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.01em;
    line-height: 1.2;
    background: linear-gradient(120deg, #ffffff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
      font-size: ${TYPOGRAPHY.mobile.h3};
      margin-bottom: 1rem;
      line-height: 1.3;
    }
  }
  
  p {
    font-size: ${TYPOGRAPHY.body};
    line-height: 1.8;
    color: #e0e0e0;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 400;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 768px) {
      font-size: ${TYPOGRAPHY.mobile.body};
      line-height: 1.4;
      margin-bottom: 0.75rem;
    }

    &:first-child {
      font-size: 1.9rem;
      font-weight: 400;
      color: #ffffff;
      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 1.5rem 0;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    height: 200px;
    margin: 0.75rem 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    
    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2));
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
      
      @media (max-width: 768px) {
        transform: scale(1.02);
      }
    }
  }
`;



// Timeline Section Styles
const TimelineContainer = styled.div`
  width: 100%;
  margin: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ffffff 0%, #e0e0e0 100%);
  border-radius: 2px;
  box-shadow: 0 0 16px 2px rgba(255, 255, 255, 0.2);
  z-index: 1;
  width: 100%;
  transform-origin: left;
`;

const TimelinePointWrapper = styled.div<{ left: string; align: 'top' | 'bottom' }>`
  position: absolute;
  left: ${({ left }) => left};
  top: 0;
  width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  justify-content: ${({ align }) => (align === 'top' ? 'flex-start' : 'flex-end')};
`;





const TimelineLabel = styled.div<{ align: 'top' | 'bottom' }>`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: 'Montserrat', 'Inter', sans-serif;
  margin-bottom: ${({ align }) => (align === 'top' ? '16px' : '0')};
  margin-top: ${({ align }) => (align === 'bottom' ? '16px' : '0')};
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(20px);
`;

const TimelineVertical = styled.div<{ align: 'top' | 'bottom' }>`
  width: 2px;
  height: 56px;
  background: linear-gradient(
    ${({ align }) => (align === 'top' ? '180deg' : '0deg')},
    #ffffff 0%, #e0e0e0 100%, transparent 100%
  );
  border-radius: 2px;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: ${({ align }) => (align === 'top' ? 'bottom' : 'top')};
`;



const TimelinePoint = styled.div`
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #ffffff 70%, #e0e0e0 100%);
  border-radius: 50%;
  box-shadow: 0 0 18px 8px rgba(255, 255, 255, 0.2);
  z-index: 3;
  border: 2px solid #ffffff;
  opacity: 0;
  transform: scale(0);
`;

const TimelineFlex = styled.div`
  position: relative;
  width: 90%;
  height: 250px;
  margin-bottom: 2.5rem;
  @media (max-width: 700px) {
    height: 300px;
  }
`;

const TimelineTitle = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  text-align: center;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  font-family: 'Montserrat', 'Inter', sans-serif;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-top: 2rem;
  width: 100%;
  white-space: nowrap;
  overflow: visible;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
`;



// Farmers Section Styles
const FarmersSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%);
  max-width: 100%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const FarmersHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FarmersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 0 2rem;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1400px) {
    gap: 1.2rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    display: flex;
    overflow-x: auto;
    grid-template-columns: none;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const FarmersCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 280px;

  @media (max-width: 900px) {
    flex: 0 0 350px;
    scroll-snap-align: start;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 300px;
    padding: 1.5rem;
    min-height: 250px;
  }
`;

const FarmersTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const FarmersDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  white-space: pre-line;
  opacity: 0.9;
  transition: all 0.3s ease;

  ${FarmersCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

// Rename the Farmers section scroll indicator
const FarmersScrollIndicator = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards 1s;
  padding: 0 2rem;

  @media (max-width: 900px) {
    display: flex;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .scroll-arrow {
    width: 20px;
    height: 20px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(10px);
    }
    60% {
      transform: translateX(5px);
    }
  }
`;







// Leadership Section Styles
const LeadershipSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem 2rem;
  background: #000000;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 2rem;
    padding: 2.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const LeadershipLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    order: 2;
  }
`;

const LeadershipHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const LeadershipDesc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  opacity: 0.9;
  margin-left: 160px;
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 140px;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const LeadershipRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 1rem;
  }
`;

const LeaderPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1024px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const LeaderName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LeaderTitle = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  opacity: 0.8;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Investors Section Styles
const InvestorsSection = styled.section`
  background: transparent;
  color: #fff;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-top: 1rem;
  }
`;

const InvestorsTeam = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto 3rem;
  position: relative;
  z-index: 1;
  padding: 2rem 0;

  @media (max-width: 768px) {
    gap: 2rem;
    padding: 1rem 0;
  }
`;

const InvestorCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InvestorPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: none;
  transition: all 0.4s ease;
  filter: grayscale(100%) contrast(1.2) brightness(0.9);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

  ${InvestorCard}:hover & {
    filter: grayscale(0%) contrast(1) brightness(1);
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const InvestorName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #ffffff;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: 'Gotu', sans-serif;

  ${InvestorCard}:hover & {
    color: #ffffff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InvestorTitle = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-bottom: 0.2rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  font-family: 'Gotu', sans-serif;

  ${InvestorCard}:hover & {
    opacity: 1;
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CompanyName = styled(motion.p)`
  font-size: 0.8rem;
  font-weight: 400;
  color: #909090;
  opacity: 0.7;
  transition: all 0.3s ease;
  font-family: 'Gotu', sans-serif;
  margin: 0;

  ${InvestorCard}:hover & {
    opacity: 1;
    color: #b0b0b0;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const InvestorsTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  font-family: 'Gotu', sans-serif;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const InvestorsSubtitle = styled.p`
  font-size: 1.1rem;
  color: #b0b0b0;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  font-family: 'Gotu', sans-serif;
  opacity: 0.8;

  b {
    color: #ffffff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const InvestorsLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const InvestorLogo = styled(motion.div)`
  font-size: 1rem;
  font-weight: 400;
  color: #909090;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  opacity: 0.7;
  font-family: 'Gotu', sans-serif;

  &:hover {
    opacity: 1;
    color: #e0e0e0;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;



const InnovationSection = styled(Section)`
  background: transparent;
  position: relative;
  overflow: hidden;
  margin: 4rem 0;
  padding: 3rem 4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem 0;
  }
`;

const InnovationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-top: 1.5rem;
  position: relative;
  perspective: 1000px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const InnovationContent = styled(TextContent)`
  position: relative;
  z-index: 1;
  text-align: left;
  opacity: 0;
  transform: translateX(-100px) scale(0.9) rotateY(-15deg);
  transition: all 0.8s ease;
  transform-style: preserve-3d;

  &.visible {
    opacity: 1;
    transform: translateX(0) scale(1) rotateY(0deg);
  }

      h3 {
      font-size: 2.5rem;
      background: linear-gradient(120deg, #ffffff, #e0e0e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
      font-weight: 800;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
      position: relative;
      transform-style: preserve-3d;
      
      @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      
      &:hover {
        transform: scale(1.02) translateZ(20px);
      }
    }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #e0e0e0;
    text-align: left;
    margin: 1.5rem 0;
    font-weight: 400;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    opacity: 0.9;
    transform-style: preserve-3d;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5;
      margin: 1rem 0;
    }
    
    &:hover {
      transform: translateY(-2px) translateZ(10px);
      opacity: 1;
    }
  }
`;

const InnovationImage = styled(ImageContainer)`
  height: 400px;
  transition: all 0.8s ease;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;
  opacity: 0;
  transform: translateX(100px) rotate(15deg) scale(0.8) rotateY(15deg);
  transform-style: preserve-3d;
  transform-origin: right top;

  &.visible {
    opacity: 1;
    transform: translateX(0) rotate(0deg) scale(1) rotateY(0deg);
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.02) translateZ(30px);
    
    &::after {
      opacity: 1;
    }
  }
  
  img {
    transition: transform 0.5s ease;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-style: preserve-3d;
    
    &:hover {
      transform: scale(1.05) translateZ(20px);
    }
  }
`;





const RevolutionSection = styled(Section)`
  background: transparent;
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const RevolutionContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 5rem 0;
`;

const RevolutionTitle = styled.h2`
  font-size: 16rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0;
  line-height: 0.8;
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  text-transform: uppercase;
  opacity: 0.015;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 0;
  font-family: 'Montserrat', sans-serif;
`;

const RevolutionSubtitle = styled.h2`
  font-size: 2.625rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-family: 'Montserrat', sans-serif;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ffffff, transparent);
    border-radius: 2px;
  }
`;

const RevolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  position: relative;
  padding: 2rem 0;

  @media (max-width: 1200px) {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 2rem 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const RevolutionCard = styled.div`
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 3.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(30px);

  @media (max-width: 1200px) {
    min-width: 85vw;
    max-width: 85vw;
    width: 85vw;
    scroll-snap-align: center;
    flex: 0 0 auto;
    padding: 3rem;
    opacity: 0.4;
    transform: scale(0.9);
    transition: all 0.5s ease;

    &.active {
      opacity: 1;
      transform: scale(1);
    }

    &.prev, &.next {
      opacity: 0.4;
      transform: scale(0.9);
    }
  }

  @media (max-width: 768px) {
    min-width: 90vw;
    max-width: 90vw;
    width: 90vw;
    padding: 2.5rem;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    .card-number {
      opacity: 0.02;
    }

    .card-heading {
      &::after {
        width: 80px;
      }
    }

    .card-image {
      transform: scale(1.02);
    }
  }
`;

const CardNumber = styled.div`
  font-size: 14rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  position: absolute;
  top: -2rem;
  right: -2rem;
  line-height: 1;
  transition: all 0.4s ease;
  font-family: 'Montserrat', sans-serif;
  z-index: 0;
`;

const CardHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 0.75rem;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 45px;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, transparent);
    border-radius: 1px;
    transition: width 0.3s ease;
  }
`;

const CardText = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 1.125rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    opacity: 1;
  }
`;

const CardImage = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2rem;
  aspect-ratio: 16/9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;

  @media (max-width: 1200px) {
    margin-top: 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      transparent 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
`;

const RevolutionTimeline = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, 
    transparent 0%,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.1) 80%,
    transparent 100%
  );
  z-index: 0;

  @media (max-width: 1200px) {
    display: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

// Add a new styled component for scroll indicator
const ScrollIndicator = styled.div`
  display: none;
  
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    
    .scroll-text {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: fadeInOut 2s infinite;
    }

    .scroll-arrow {
      width: 24px;
      height: 24px;
      animation: bounce 2s infinite;
    }

    .dots {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 0.3s ease;
    }

    .dot.active {
      background: rgba(255, 255, 255, 0.8);
      transform: scale(1.2);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(10px);
    }
    60% {
      transform: translateX(5px);
    }
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;



const RevolutionContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1800px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media (max-width: 1200px) {
    padding: 2rem 0;
    overflow: hidden;
  }
`;



// Right Aligned Hero Section
const RightHeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 4rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    min-height: 50vh;
  }
`;

const RightHeroContainer = styled.div`
  max-width: 600px;
  text-align: right;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

// Left Aligned Hero Section  
const LeftHeroSection = styled.section`
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 4rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 2rem 1rem;
    min-height: 30vh;
  }
`;

const LeftHeroContainer = styled.div`
  max-width: 500px;
  text-align: left;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const LeftHeroStatement = styled.p`
  font-size: 2rem;
  line-height: 1.3;
  color: #ffffff;
  font-weight: 400;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  font-family: 'Gotu', sans-serif;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RightHeroStatement = styled.p`
  font-size: 2rem;
  line-height: 1.3;
  color: #ffffff;
  font-weight: 400;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  font-family: 'Gotu', sans-serif;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;


// ROS Stats Section Styles
const ROSStatsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
    text-align: center;
  }
`;

const ROSStatsLeft = styled.div`
  position: relative;
`;

const ROSStatsHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.1;
  font-family: 'Gotu', sans-serif;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ROSStatsDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #e0e0e0;
  font-family: 'Gotu', sans-serif;
  opacity: 0.9;
  max-width: 500px;
  margin-left: 120px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 100%;
    margin-left: 0;
  }
`;

const ROSStatsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: left;
  margin-left: 320px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ROSStatNumber = styled.div`
  font-size: 7rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.5rem;
  font-family: 'Gotu', sans-serif;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

const ROSStatLabel = styled.div`
  font-size: 1rem;
  color: #b0b0b0;
  font-weight: 400;
  font-family: 'Gotu', sans-serif;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Add these new styled components after the existing TimelineContainer styled components
const MobileTimelineContainer = styled.div`
  display: none;
  width: 100%;
  margin: 4rem 0 2rem 0;
  position: relative;
  padding: 0 1.5rem;
  min-height: 600px;

  @media (max-width: 768px) {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const MobileTimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, 
    transparent 0%,
    rgba(255, 255, 255, 0.3) 10%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.3) 90%,
    transparent 100%
  );
  border-radius: 3px;
  box-shadow: 0 0 20px 2px rgba(255, 255, 255, 0.1);
  z-index: 1;
`;

const MobileTimelineItem = styled.div<{ align: 'left' | 'right' }>`
  position: relative;
  margin: 4rem 0;
  width: 100%;
  display: flex;
  justify-content: ${({ align }) => align === 'left' ? 'flex-start' : 'flex-end'};
  padding-${({ align }) => align === 'left' ? 'right' : 'left'}: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: ${({ align }) => align === 'left' ? '0.2s' : '0.4s'};

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MobileTimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  width: 85%;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const MobileTimelinePoint = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #ffffff 70%, #e0e0e0 100%);
  border-radius: 50%;
  box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.2);
  z-index: 2;
  border: 2px solid #ffffff;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

const MobileTimelineLabel = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, transparent);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  ${MobileTimelineContent}:hover & {
    color: #ffffff;
    transform: translateY(-2px);

    &::after {
      width: 60px;
    }
  }
`;

const MobileTimelineDescription = styled.div`
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
  transition: all 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;

  ${MobileTimelineContent}:hover & {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const StatesSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const StatesHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem;
  }
`;

const StateCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StateName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.6rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const StateStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const StatesStatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
  }
`;

const StatesStatValue = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.3rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StatesStatLabel = styled.div`
  font-size: 0.7rem;
  color: #e0e0e0;
  opacity: 0.8;
`;

const StateDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.4;
  color: #e0e0e0;
  margin-top: 1rem;
  opacity: 0.9;
  transition: all 0.3s ease;

  ${StateCard}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.3;
    margin-top: 0.8rem;
  }
`;

// Add state data
const statesData = [
  {
    name: "Delhi NCR",
    description: "Our flagship market with the highest concentration of operations and customer base.",
    stats: [
      { value: "50K+", label: "Daily Orders" },
      { value: "100+", label: "Vendors" },
      { value: "95%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    name: "Mumbai",
    description: "Expanding rapidly with a focus on premium quality and efficient delivery networks.",
    stats: [
      { value: "30K+", label: "Daily Orders" },
      { value: "75+", label: "Vendors" },
      { value: "92%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support" }
    ]
  },
  {
    name: "Bangalore",
    description: "Tech-savvy market with innovative delivery solutions and strong community engagement.",
    stats: [
      { value: "25K+", label: "Daily Orders" },
      { value: "60+", label: "Vendors" },
      { value: "94%", label: "Customer Satisfaction" },
      { value: "24/7", label: "Support" }
    ]
  }
];



const AboutPage: React.FC = () => {
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const innovationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revolutionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null); // Add ref for timeline

  const [currentCard, setCurrentCard] = useState(0);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start auto-scrolling
    const interval = setInterval(() => {
      if (gridRef.current) {
        const nextCard = (currentCard + 1) % 3;
        setCurrentCard(nextCard);
        gridRef.current.scrollTo({
          left: nextCard * (gridRef.current.offsetWidth * 0.85),
          behavior: 'smooth'
        });
      }
    }, 5000);

    scrollIntervalRef.current = interval;

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [currentCard]);

  // Handle scroll events to update current card
  const handleScroll = () => {
    if (gridRef.current) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.offsetWidth * 0.85;
      const newCard = Math.round(scrollLeft / cardWidth);
      setCurrentCard(newCard);
    }
  };

  useEffect(() => {
    // Animate Who We Are section
    if (whoWeAreRef.current) {
      const section = whoWeAreRef.current;
      const textContent = section.querySelector('.text-content');
      const image = section.querySelector('.animated-image');

      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate text content
      tl.from(textContent, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
      });

      // Animate image
      tl.from(image, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5"); // Start slightly before the previous animation ends
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Add scroll animations for innovation sections
    innovationRefs.current.forEach((ref, index) => {
      if (ref) {
        const isImage = index % 2 === 1; // Odd indices are images

        // Create a timeline for each element
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref,
            start: "top 85%", // Start earlier
            end: "top 15%", // End earlier
            toggleActions: "play none none none",
            markers: false,
            scrub: false,
            pin: false,
            anticipatePin: 1,
            once: true
          }
        });

        // Add animations to the timeline with faster timing
        tl.fromTo(ref,
          {
            opacity: 0,
            x: isImage ? 50 : -50, // Reduced distance for faster movement
            y: isImage ? -20 : 0,
            rotation: isImage ? 10 : -5,
            scale: 0.98,
            transformOrigin: isImage ? "right top" : "left center"
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.6, // Faster duration
            ease: "power2.out" // Snappier easing
          }
        );

        // Faster hover effect
        ref.addEventListener('mouseenter', () => {
          gsap.to(ref, {
            scale: 1.02,
            duration: 0.2, // Faster hover
            ease: "power1.out"
          });
        });

        ref.addEventListener('mouseleave', () => {
          gsap.to(ref, {
            scale: 1,
            duration: 0.2, // Faster hover
            ease: "power1.out"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Add scroll animation for revolution cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    const cards = document.querySelectorAll('.revolution-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  // Timeline animation for desktop
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 768) return;
    if (!timelineRef.current) return;
    const container = timelineRef.current;
    const line = container.querySelector('.timeline-line');
    const points = container.querySelectorAll('.timeline-point');
    const verticals = container.querySelectorAll('.timeline-vertical');
    const labels = container.querySelectorAll('.timeline-label');

    // Reset all
    gsap.set(line, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(points, { opacity: 0, scale: 0 });
    gsap.set(verticals, { opacity: 0, scaleY: 0 });
    gsap.set(labels, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 70%',
        once: true,
      }
    });
    // Animate horizontal line
    tl.to(line, { scaleX: 1, duration: 1, ease: 'power2.out' })
      // Animate verticals and points in sequence
      .to(verticals, {
        opacity: 1,
        scaleY: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power2.out',
      }, '-=0.5')
      .to(points, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      }, '-=0.3')
      // Animate labels
      .to(labels, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.2');

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const farmersCards = [
    {
      title: "Simplify supply chains",
      description: "by making them smarter,\ncleaner,\nand faster.\nROS brings a direct link\nbetween farmers, vendors,\nand households."
    },
    {
      title: "Reliable",
      description: "A robust cold-chain and\nvendor network\nensures timely delivery,\nminimal waste,\nand consistent quality –\nevery single day."
    },
    {
      title: "Sustainable",
      description: "We reduce food loss\nand carbon footprint\nby shortening the\nsupply chain\nand optimizing\nlogistics at scale."
    },
    {
      title: "Cost Efficient",
      description: "Affordable, high-quality\nvegetables\ndelivered straight from\nfarmers to your doorstep,\ncutting out unnecessary\nmiddlemen."
    }
  ];

  const investorsData = [
    { name: 'Subham Sharma', title: 'CEO & Founder', company: 'ROS', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Heikki Linnakangas', title: 'Co-Founder', company: 'TechVentures', img: 'https://randomuser.me/api/portraits/men/33.jpg' },
    { name: 'Stas Kelvich', title: 'Co-Founder', company: 'InnovateX', img: 'https://randomuser.me/api/portraits/men/34.jpg' },
    { name: 'James Brodhead', title: 'VP Engineering', company: 'FutureTech', img: 'https://randomuser.me/api/portraits/men/35.jpg' },
    { name: 'Bryan Clark', title: 'VP Product', company: 'NextWave', img: 'https://randomuser.me/api/portraits/men/36.jpg' },
  ];

  return (
    <AboutContainer>
      <Section {...fadeInUp}>
        <MainSectionTitle>About Us</MainSectionTitle>
        <TextContent>
          <p>

            Welcome to ROS - Republic of Sabjiwala, where we're revolutionizing the way fresh produce reaches your table.
          </p>
          <p>
            Our mission is simple yet powerful: to deliver farm-fresh vegetables directly to your doorstep while ensuring
            fair prices for farmers and creating a more sustainable food ecosystem. With our cutting-edge logistics network
            and commitment to quality, we're making fresh, affordable produce accessible to everyone.
          </p>
        </TextContent>
      </Section>



      {/* Who We Are Section
      <WhoWeAreSection className="who-we-are-section">
        <SectionTitle>Who We Are</SectionTitle>
        <WhoWeAreGrid>
          <WhoWeAreContent className="who-we-are-content">
            <h3>Revolutionizing <HighlightText>Fresh Produce</HighlightText> Delivery</h3>
                <p>
              At ROS - Republic of Sabjiwala, we're transforming India's vegetable supply chain through innovation and technology. 
              Our mission is simple: connect farmers directly to consumers, ensuring fresh produce at fair prices.
                </p>
                <p>
              We combine cutting-edge logistics with sustainable practices to deliver farm-fresh vegetables to your doorstep. 
              Every vegetable we deliver carries our commitment to quality, sustainability, and community development.
                </p>
          </WhoWeAreContent>
          <WhoWeAreImage className="who-we-are-image">
            <img 
                src={image2} 
                alt="Our team and technology" 
                loading="lazy"
              />
          </WhoWeAreImage>
        </WhoWeAreGrid>
      </WhoWeAreSection> */}

      {/* Revolution Story Section */}
      <RevolutionSection ref={revolutionRef}>
        <RevolutionContainer>
          <RevolutionTitle>THE REVOLUTION</RevolutionTitle>
          <RevolutionSubtitle>From Sabjiwala to Republic of Sabjiwala</RevolutionSubtitle>
          <RevolutionContent>
            <RevolutionGrid ref={gridRef} onScroll={handleScroll}>
              <RevolutionTimeline />
              {[0, 1, 2].map((index) => (
                <RevolutionCard
                  key={index}
                  className={`revolution-card ${index === currentCard ? 'active' :
                    index === (currentCard + 2) % 3 ? 'prev' :
                      index === (currentCard + 1) % 3 ? 'next' : ''
                    }`}
                >
                  <CardNumber className="card-number">{`0${index + 1}`}</CardNumber>
                  <CardHeading className="card-heading">
                    {index === 0 ? 'The Beginning' :
                      index === 1 ? 'The Challenge' : 'The Evolution'}
                  </CardHeading>
                  <CardText>
                    {index === 0 ? 'In the heart of India\'s agricultural landscape, Sabjiwala was born from a simple yet powerful vision: to bridge the gap between farmers and consumers. What started as a small operation connecting local farmers to nearby markets quickly revealed the deep-rooted challenges in India\'s vegetable supply chain.' :
                      index === 1 ? 'We discovered that traditional supply chains were not just inefficient—they were fundamentally broken. Farmers were receiving less than 30% of the final price, while consumers paid premium prices for produce that had lost its freshness through multiple intermediaries.' :
                        'This realization sparked our transformation into ROS - Republic of Sabjiwala. We\'re not just a company; we\'re a movement that\'s redefining the entire vegetable supply chain ecosystem. Our technology-driven approach ensures that every stakeholder—from farmer to consumer—gets a fair deal.'}
                  </CardText>
                  <CardImage className="card-image">
                    <img
                      src={index === 0 ? jpSvg : index === 1 ? image2 : missionSvg}
                      alt={index === 0 ? 'The beginning of our journey' :
                        index === 1 ? 'The challenges we faced' :
                          'Our evolution into ROS'}
                      loading="lazy"
                    />
                  </CardImage>
                </RevolutionCard>
              ))}
            </RevolutionGrid>
            <ScrollIndicator>
              <div className="scroll-text">
                <span>Scroll to explore our journey</span>
                <svg className="scroll-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="dots">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`dot ${currentCard === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </ScrollIndicator>
          </RevolutionContent>
        </RevolutionContainer>
      </RevolutionSection>

      {/* Add the new mobile timeline */}
      <MobileTimelineContainer>
        <TimelineTitle>WORKFLOW</TimelineTitle>
        <MobileTimelineLine />
        {[
          {
            label: 'Farmers',
            description: 'Farmers bring their fresh produce to local mandis, ensuring quality and variety for our customers. Our team carefully selects the best produce to maintain high standards.'
          },
          {
            label: 'Mandi',
            description: 'Our team connects directly with mandis, establishing strong relationships for consistent supply. We work closely with farmers to ensure fair prices and sustainable practices.'
          },
          {
            label: 'Vendors',
            description: 'Local vendors receive fresh produce through our efficient distribution network. We maintain strict quality control and ensure timely delivery to all our partners.'
          },
          {
            label: 'Delivery',
            description: 'Our advanced logistics ensure timely delivery while maintaining product freshness. We use state-of-the-art technology to track and optimize every delivery.'
          },
          {
            label: 'Consumers',
            description: 'Fresh, high-quality vegetables reach your doorstep at competitive prices. We guarantee the best quality produce delivered right to your home.'
          }
        ].map((item, index) => (
          <MobileTimelineItem key={index} align={index % 2 === 0 ? 'left' : 'right'}>
            <MobileTimelinePoint />
            <MobileTimelineContent>
              <MobileTimelineLabel>{item.label}</MobileTimelineLabel>
              <MobileTimelineDescription>{item.description}</MobileTimelineDescription>
            </MobileTimelineContent>
          </MobileTimelineItem>
        ))}
      </MobileTimelineContainer>

      {/* Desktop Workflow Timeline Section */}
      <TimelineContainer ref={timelineRef}>
        <TimelineFlex>
          <TimelineLine className="timeline-line" />
          {/* Mandi (above) */}
          <TimelinePointWrapper left="10%" align="top">
            <TimelineLabel className="timeline-label" align="top">Farmers</TimelineLabel>
            <TimelinePoint className="timeline-point" />
            <TimelineVertical className="timeline-vertical" align="top" />
          </TimelinePointWrapper>
          {/* Ros (below) */}
          <TimelinePointWrapper left="25%" align="bottom">
            <TimelineVertical className="timeline-vertical" align="bottom" />
            <TimelinePoint className="timeline-point" />
            <TimelineLabel className="timeline-label" align="bottom">Mandi</TimelineLabel>
          </TimelinePointWrapper>
          {/* venders (above) */}
          <TimelinePointWrapper left="50%" align="top">
            <TimelineLabel className="timeline-label" align="top">venders</TimelineLabel>
            <TimelinePoint className="timeline-point" />
            <TimelineVertical className="timeline-vertical" align="top" />
          </TimelinePointWrapper>
          {/* Delivery (below) */}
          <TimelinePointWrapper left="70%" align="bottom">
            <TimelineVertical className="timeline-vertical" align="bottom" />
            <TimelinePoint className="timeline-point" />
            <TimelineLabel className="timeline-label" align="bottom">Delivery</TimelineLabel>
          </TimelinePointWrapper>
          {/* Consumers (above) */}
          <TimelinePointWrapper left="90%" align="top">
            <TimelineLabel className="timeline-label" align="top">Consumers</TimelineLabel>
            <TimelinePoint className="timeline-point" />
            <TimelineVertical className="timeline-vertical" align="top" />
          </TimelinePointWrapper>
        </TimelineFlex>
        <TimelineTitle>WORKFLOW</TimelineTitle>
      </TimelineContainer>

      {/* Right Aligned Hero Section */}
      <RightHeroSection className="hero-message-section">
        <RightHeroContainer className="hero-message-container">

          <RightHeroStatement className="hero-statement">
            Just Be Fresh
            <br />
            Empower the journey from mandi to home
            <br />
            with our farmer-first approach,
            <br />
            preserving the essence
            <br />
            of fresh, local produce.
          </RightHeroStatement>
        </RightHeroContainer>
      </RightHeroSection>

      {/* Left Aligned Hero Section */}
      <LeftHeroSection className="hero-message-section">
        <LeftHeroContainer className="hero-message-container">
          <LeftHeroStatement className="hero-statement">
            Farmers are at the center of everything we do.
          </LeftHeroStatement>
        </LeftHeroContainer>
      </LeftHeroSection>

      {/* Our Innovation Section */}
      {/* <InnovationSection>
        <SectionTitle>Our Innovation</SectionTitle>
        <InnovationGrid>
          <InnovationContent ref={(el) => (innovationRefs.current[0] = el)}>
            <h3>Pioneering the Future</h3>
            <p>
              Our expertise in ROS enables us to create sophisticated robotic systems
              that are reliable, efficient, and adaptable to various applications.
              From industrial automation to research and development, we leverage
              the power of ROS to deliver cutting-edge solutions.
            </p>
          </InnovationContent>
          <InnovationImage ref={(el) => (innovationRefs.current[1] = el)}>
            <img
              src={missionSvg}
              alt="Our Innovation showcase"
              loading="lazy"
              style={{ objectFit: 'contain', borderRadius: '30px' }}
            />
          </InnovationImage>
        </InnovationGrid>
      </InnovationSection> */}

      {/* Our Vision Section */}
      <InnovationSection>
        <SectionTitle>Our Vision</SectionTitle>
        <InnovationGrid>
          <InnovationImage ref={(el) => (innovationRefs.current[2] = el)}>
            <img
              src={men_image}
              alt="Our vision for the future"
              loading="lazy"
              style={{ objectFit: 'contain', borderRadius: '30px' }}
            />
          </InnovationImage>
          <InnovationContent ref={(el) => (innovationRefs.current[3] = el)}>
            <h3>Shaping Tomorrow</h3>
            <p>
              We envision a world where robotics and automation seamlessly integrate
              into everyday life, enhancing productivity and quality of life. Our
              commitment to innovation and excellence drives us to be at the forefront
              of this technological revolution.
            </p>
          </InnovationContent>
        </InnovationGrid>
      </InnovationSection>

      {/* ROS Technology Section */}
      <InnovationSection>
        <SectionTitle>ROS Technology</SectionTitle>
        <InnovationGrid>
          <InnovationContent ref={(el) => (innovationRefs.current[4] = el)}>
            <h3>Cutting-Edge Solutions</h3>
            <p>
              Our expertise in ROS enables us to create sophisticated robotic systems
              that are reliable, efficient, and adaptable to various applications.
              From industrial automation to research and development, we leverage
              the power of ROS to deliver cutting-edge solutions.
            </p>
          </InnovationContent>
          <InnovationImage ref={(el) => (innovationRefs.current[5] = el)}>
            <img
              src={missionSvg}
              alt="ROS Technology showcase"
              loading="lazy"
              style={{ objectFit: 'contain', borderRadius: '30px' }}
            />
          </InnovationImage>
        </InnovationGrid>
      </InnovationSection>

      {/* Farmers Section */}
      <FarmersSection>
        <FarmersHeading>Our Farmers</FarmersHeading>
        <FarmersGrid>
          {farmersCards.map((card, index) => (
            <FarmersCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FarmersTitle>{card.title}</FarmersTitle>
              <FarmersDesc>{card.description}</FarmersDesc>
            </FarmersCard>
          ))}
        </FarmersGrid>
        <FarmersScrollIndicator>
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </FarmersScrollIndicator>
      </FarmersSection>

      {/* <StatesSection>
        <StatesHeading>Our Presence Across India</StatesHeading>
        <StatesGrid>
          {statesData.map((state, index) => (
            <StateCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StateName>{state.name}</StateName>
              <StateStats>
                {state.stats.map((stat, statIndex) => (
                  <StatesStatItem key={statIndex}>
                    <StatesStatValue>{stat.value}</StatesStatValue>
                    <StatesStatLabel>{stat.label}</StatesStatLabel>
                  </StatesStatItem>
                ))}
              </StateStats>
              <StateDescription>{state.description}</StateDescription>
            </StateCard>
          ))}
        </StatesGrid>
      </StatesSection> */}

      {/* ROS Stats Section */}
      {/* <ROSStatsSection>
        <ROSStatsLeft>
          <ROSStatsHeading>
            ROS is<br />
            for everyone
          </ROSStatsHeading>
          <ROSStatsDescription>

            At ROS - Republic of Sabjiwala, we simplify the journey of vegetables
            from farm to home. By connecting directly with farmers, we deliver
            fresh, healthy, and affordable produce while cutting out the
            middlemen. Our goal is to support growers, reduce waste, and build a
            greener, fairer food system for everyone.
          </ROSStatsDescription>
        </ROSStatsLeft>

        <ROSStatsRight>
          <StatItem>
            <ROSStatNumber>13k</ROSStatNumber>
            <ROSStatLabel>Customers</ROSStatLabel>
          </StatItem>

          <StatItem>
            <ROSStatNumber>107</ROSStatNumber>
            <ROSStatLabel>vendor's outlet</ROSStatLabel>
          </StatItem>

          <StatItem>
            <ROSStatNumber>3000+</ROSStatNumber>
            <ROSStatLabel>orders delivery's per hour</ROSStatLabel>
          </StatItem>
        </ROSStatsRight>
      </ROSStatsSection> */}

      <LeadershipSection>
        <LeadershipLeft>
          <LeadershipHeading>Leadership</LeadershipHeading>
          <LeadershipDesc>
            Subham Sharma, the visionary CEO of ROS – Republic of Sabjiwala, is on a mission to revolutionize India's traditional vegetable supply chain. With a deep-rooted passion for sustainability and grassroots innovation, Subham has built ROS into a platform that not only delivers fresh produce at affordable prices but also uplifts local farmers and growers. His leadership combines technology with empathy, ensuring that every vegetable delivered carries the story of fair trade, clean sourcing, and efficient logistics. Under his guidance, ROS isn't just a business — it's a movement to empower communities and nourish the nation.
          </LeadershipDesc>
        </LeadershipLeft>
        <LeadershipRight>
          <LeaderPhoto src="https://randomuser.me/api/portraits/men/32.jpg" alt="Subham Sharma" />
          <LeaderName>Subham Sharma</LeaderName>
          <LeaderTitle>CEO & Founder</LeaderTitle>
        </LeadershipRight>
      </LeadershipSection>

      <InvestorsSection>
        <InvestorsTeam>
          {investorsData.map((investor, index) => (
            <InvestorCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <InvestorPhoto src={investor.img} alt={investor.name} />
              <InvestorName>{investor.name}</InvestorName>
              <InvestorTitle>{investor.title}</InvestorTitle>
              <CompanyName
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {investor.company}
              </CompanyName>
            </InvestorCard>
          ))}
        </InvestorsTeam>
        {/* <InvestorsTitle>Our Investors</InvestorsTitle>
        <InvestorsSubtitle>
          We've <b>raised $104 million in funding</b>, backed by some of the world's leading investors.
        </InvestorsSubtitle> */}
        {/* <InvestorsLogos>
          {[
            'Notable.',
            'GENERAL CATALYST',
            'CATALYST',
            'MENLO VENTURES',
            'snowflake',
            'khosla ventures',
            'FOUNDERS FUND',
            'databricks',
          ].map((logo, idx) => (
            <InvestorLogo
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              {logo}
            </InvestorLogo>
          ))}
        </InvestorsLogos> */}
      </InvestorsSection>
    </AboutContainer>
  );
};

export default AboutPage;