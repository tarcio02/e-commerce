import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeBg = keyframes`
  from {
    opacity: 0;
    transform: scale(1.03);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const StylesHero = styled.div`
  position: relative;
  height: 97vh;
  overflow: hidden;
`

export const BackgroundImage = styled.div<{ $bgImage: string }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  border: 1px color blue;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation: ${fadeBg} 0.7s ease-out;

  @media (max-width: 601px) {
    background-position: top;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
  hsla(0, 93%, 34%, 1) 20%, 
  hsla(0, 93%, 34%, 0) 75%,  
  hsla(0, 93%, 34%, 0) 100%  
  );
  pointer-events: none; /* opcional: pra não bloquear clique nos botões */

  @media (min-width: 601px) {
     background: linear-gradient(
    to right,
  hsla(0, 93%, 34%, 1) 20%, 
  hsla(0, 93%, 34%, 0) 75%,  
  hsla(0, 93%, 34%, 0) 100%  
  );
  }
`;

export const MainContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 80rem;
  margin: 0 auto;
  padding: 8rem 1.5rem 8rem;
  
  @media (min-width: 1024px) {
    padding: 10rem 3rem 8rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 36rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  animation: ${fadeUp} 0.6s ease-out;

  @media (min-width: 601px) {
    justify-content: center;
  }
`;

export const TextContent = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeUp} 0.8s ease-out forwards;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

export const HighlightText = styled.span`
  color: hsl(40, 91%, 55%);
`;

export const Description = styled.p<{ $delay?: string }>`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 28rem;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
  
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
    min-height: 80px;
  }
`;

export const ButtonsWrapper = styled(Link)<{ $delay?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  animation: ${fadeUp} 0.8s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
  background-color: hsl(40, 91%, 55%);
  width: fit-content;
  padding: 14px 20px;
  border-radius: 24px;
  font-size: 16px;
  color: black;
  text-decoration: none;
`;

export const CarouselControls = styled.div<{ $delay?: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  animation: ${fadeUp} 0.6s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  opacity: 0;
`;

export const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.3);
  width: 32px;
  height: 32px;
  cursor: pointer;

  svg{
    width: 18px;
    color: white;
  }
`

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Dot = styled.div<{ $active?: boolean }>`
  width: 0.50rem;
  height: 0.50rem;
  border-radius: 9999px;
  background-color: ${({ $active}) => 
    $active ? 'hsl(0, 0%, 100%)' : 'rgba(255, 255, 255, 0.3)'};
`;