import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
      opacity: 0;
      transform: translateY(10px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
`;

export const CategoriesSection = styled.section`
  padding-top: 5rem; /* py-20 */
  padding-bottom: 5rem;

  width: 100%;
  max-width: 1280px;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionHeader = styled.h2`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700;
  color: hsl(var(--foreground));
  margin-bottom: 1rem;
  text-align: center;
`;
export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: #A80707;
  background-color: rgba(168, 7, 7, 0.1);
  border-radius: 16px;
  padding: 8px 16px;
  width: fit-content;
  margin: 16px auto;

  svg {
    width: 1.2rem;
  }
`

export const SectionDescription = styled.p`
  color: hsl(var(--muted-foreground));
  font-size: 1.125rem; /* text-lg */
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  gap: 1.5rem; /* gap-6 */
  margin-top: 3rem;

  grid-template-columns: repeat(2, 1fr); 
`;

export const CategoryCard = styled(Link)<{ delay: number }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem; /* rounded-lg */
  /* aspect-ratio: 3 / 4; */
  height: 300px;

  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${({ delay }) => `${delay}ms`};

  display: block;

  @media (min-width: 601px) {
    height: 360px;
  } 
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.7s;

  ${CategoryCard}:hover & {
      transform: scale(1.1); /* group-hover:scale-110 */
}
`;


export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.4),
      transparent
  );
`;

export const CategoryInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1.5rem; 
  width: 100%;
`;

export const CategoryTitle = styled.h3`
  /* font-family: "Cormorant Garamond", serif; */
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700;
  color: white;
/* margin-bottom: 0.5rem; */
`;
export const HighlightText = styled.span`
  color: #A80707;
`;
export const CategoryAction = styled.div`
  display: flex;
  align-items: center;
  color: #A80707;
  gap: 0.25rem;

  transition: transform 0.3s;

  ${CategoryCard}:hover & {
      transform: translateX(0.5rem); /* group-hover:translate-x-2 */
  }

  svg {
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
  }
`;