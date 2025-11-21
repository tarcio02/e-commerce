import styled from "styled-components";

export const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  /* @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  } */
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* @media (min-width: 1024px) {
    grid-column: span 2 / span 2;
  } */
`;

export const RightColumn = styled.div`
  @media (min-width: 1024px) {
    grid-column: span 1 / span 1;
  }
`;