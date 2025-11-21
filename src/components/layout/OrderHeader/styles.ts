import styled from "styled-components";

export const Header = styled.header`
  background-color: #A80505;
  color: #fff;
  padding: 1.5rem 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;
