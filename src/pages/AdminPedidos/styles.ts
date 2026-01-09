import styled from 'styled-components';

export const Container = styled.div`
display: flex;
min-height: 100vh;
background-color: hsl(0, 0%, 97%);
`;

export const Main = styled.main`
flex: 1;
min-width: 0;
`;

export const Content = styled.div`
max-width: 80rem;
margin: 0 auto;
`;

export const Header = styled.header`
margin-bottom: 2rem;
`;

export const Title = styled.h1`
font-family: 'Space Grotesk', sans-serif;
font-size: 1.75rem;
font-weight: 700;
color: hsl(0, 0%, 12%);
margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
font-family: 'Inter', sans-serif;
font-size: 0.875rem;
color: hsl(0, 0%, 45%);
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

export const ButtonFilter = styled.button<{$isActive: boolean}>`
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: bold;
  border: 1px solid ${({$isActive}) => $isActive ? "#ffa801" : "#737373"};
  color:  ${({$isActive}) => $isActive ? "#ffa801" : "#737373"};
  background-color: transparent;
`