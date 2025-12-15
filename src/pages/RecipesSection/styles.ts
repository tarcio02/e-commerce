import styled, {keyframes} from "styled-components";

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


export const Section = styled.section`
  padding: 5rem 0;
  background-color: hsl(0, 0%, 98%);
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 42rem;
  margin: 0 auto 4rem;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: hsl(0, 93%, 34%);
  background-color: rgba(168, 7, 7, 0.1);
  border-radius: 9999px;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: hsl(0, 0%, 9%);
  margin-bottom: 1rem;

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
  color: hsl(0, 0%, 45%);
  font-family: "Lato", sans-serif;
  font-size: 1.125rem;
`;

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

interface CardWrapperProps {
  $delay: number;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  animation: fadeIn 0.3s ease-out;
  animation-delay: ${(props) => props.$delay}ms;
  animation-fill-mode: both;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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