import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TYPOGRAPHY = {
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
export const AboutContainer = styled.div`
  margin: 0 auto;
  padding: 0rem;
  max-width: 2000px;
  background: transparent;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Section = styled(motion.section)`
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

export const SectionTitle = styled.h2`
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

export const MainSectionTitle = styled.h1`
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

export const TextContent = styled.div`
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

export const ImageContainer = styled.div`
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
export const TimelineContainer = styled.div`
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

export const TimelineLine = styled.div`
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

export const TimelinePointWrapper = styled.div<{ left: string; align: 'top' | 'bottom' }>`
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





export const TimelineLabel = styled.div<{ align: 'top' | 'bottom' }>`
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

export const TimelineVertical = styled.div<{ align: 'top' | 'bottom' }>`
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



export const TimelinePoint = styled.div`
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

export const TimelineFlex = styled.div`
  position: relative;
  width: 90%;
  height: 250px;
  margin-bottom: 2.5rem;
  @media (max-width: 700px) {
    height: 300px;
  }
`;

export const TimelineTitle = styled.h2`
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
export const FarmersSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const FarmersHeading = styled.h2`
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

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FarmersGrid = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0.5rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0.5rem;
  }
`;

export const FarmersCard = styled(motion.div)`
  flex: 0 0 400px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  scroll-snap-align: start;
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
    flex: 0 0 300px;
    padding: 1.5rem;
  }
`;

export const FarmersTitle = styled.h3`
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

export const FarmersDesc = styled.p`
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
export const FarmersScrollIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards 1s;

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
export const LeadershipSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 100%);
  position: relative;
  overflow: hidden;

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

export const LeadershipLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    order: 2;
  }
`;

export const LeadershipHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

export const LeadershipDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e0e0e0;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

export const LeadershipRight = styled.div`
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

export const LeaderPhoto = styled.img`
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

export const LeaderName = styled.h3`
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

export const LeaderTitle = styled.p`
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
export const InvestorsSection = styled.section`
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

export const InvestorsTeam = styled.div`
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

export const InvestorCard = styled(motion.div)`
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

export const InvestorPhoto = styled.img`
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

export const InvestorName = styled.h3`
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

export const InvestorTitle = styled.p`
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

export const CompanyName = styled(motion.p)`
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

export const InvestorsTitle = styled.h2`
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

export const InvestorsSubtitle = styled.p`
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

export const InvestorsLogos = styled.div`
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

export const InvestorLogo = styled(motion.div)`
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



export const InnovationSection = styled(Section)`
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

export const InnovationGrid = styled.div`
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

export const InnovationContent = styled(TextContent)`
  position: relative;
  z-index: 1;
  text-align: left;
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

export const InnovationImage = styled(ImageContainer)`
  height: 400px;
  transition: all 0.8s ease;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;
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





export const RevolutionSection = styled(Section)`
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

export const RevolutionContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 5rem 0;
`;

export const RevolutionTitle = styled.h2`
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

export const RevolutionSubtitle = styled.h2`
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

export const RevolutionGrid = styled.div`
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

export const RevolutionCard = styled.div`
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

export const CardNumber = styled.div`
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

export const CardHeading = styled.h3`
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

export const CardText = styled.p`
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

export const CardImage = styled.div`
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

export const RevolutionTimeline = styled.div`
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
export const ScrollIndicator = styled.div`
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



export const RevolutionContent = styled.div`
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
export const RightHeroSection = styled.section`
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

export const RightHeroContainer = styled.div`
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
export const LeftHeroSection = styled.section`
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

export const LeftHeroContainer = styled.div`
  max-width: 500px;
  text-align: left;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const LeftHeroStatement = styled.p`
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

export const RightHeroStatement = styled.p`
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
export const ROSStatsSection = styled.section`
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

export const ROSStatsLeft = styled.div`
  position: relative;
`;

export const ROSStatsHeading = styled.h2`
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

export const ROSStatsDescription = styled.p`
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

export const ROSStatsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const StatItem = styled.div`
  text-align: left;
  margin-left: 320px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ROSStatNumber = styled.div`
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

export const ROSStatLabel = styled.div`
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
export const MobileTimelineContainer = styled.div`
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

export const MobileTimelineLine = styled.div`
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

export const MobileTimelineItem = styled.div<{ align: 'left' | 'right' }>`
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

export const MobileTimelineContent = styled.div`
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

export const MobileTimelinePoint = styled.div`
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

export const MobileTimelineLabel = styled.div`
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

export const MobileTimelineDescription = styled.div`
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

export const StatesSection = styled(Section)`
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

export const StatesHeading = styled.h2`
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

export const StatesGrid = styled.div`
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

export const StateCard = styled(motion.div)`
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

export const StateName = styled.h3`
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

export const StateStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const StatesStatItem = styled.div`
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

export const StatesStatValue = styled.div`
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

export const StatesStatLabel = styled.div`
  font-size: 0.7rem;
  color: #e0e0e0;
  opacity: 0.8;
`;

export const StateDescription = styled.p`
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