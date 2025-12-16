import styled, { keyframes } from "styled-components";

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

export const Section = styled.section`
  padding-bottom: 5rem;
  background-color: hsl(0, 0%, 98%);
`;

export const StylesHero = styled.div`
  display: flex;
  position: relative;
  height: 40vh;
  overflow: hidden;

  @media (min-width: 601px) {
    height: 70vh;
  }
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
  rgba(0, 0, 0, 0.7) 20%, 
  hsla(0, 93%, 34%, 0) 75%,  
  hsla(0, 93%, 34%, 0) 100%  
  );
  pointer-events: none; /* opcional: pra não bloquear clique nos botões */

  @media (min-width: 601px) {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  position: relative;
  z-index: 10;
  max-width: 80rem;
  padding: 2.5rem;
  
  @media (min-width: 1024px) {
    
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: .5rem;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: hsl(0, 93%, 34%);
  background-color: rgba(168, 7, 7, 0.3);
  border-radius: 9999px;
  width: fit-content;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: .5rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Highlight = styled.span`
  color: hsl(0, 93%, 34%);
`;

export const Description = styled.p`
  color: hsl(0, 0%, 60%);
  font-family: "Lato", sans-serif;
  font-size: 1.125rem;
  max-width: 28rem;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const BadgeFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #737373;
  padding: 0.5rem;
  border-radius: 12px;
  `

export const NoProducts = styled.div`
  font-size: 24px;
  color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;