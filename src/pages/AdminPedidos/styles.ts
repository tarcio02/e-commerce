import styled, { keyframes } from 'styled-components';


const slideUp = keyframes`
from { 
    opacity: 0;
    transform: translateY(10px);
}
to { 
    opacity: 1;
    transform: translateY(0);
}
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
  animation: ${slideUp} 0.5s ease-out forwards;
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
  border: 1px solid ${({$isActive}) => $isActive ? "#ffa801" : "rgba(0, 0, 0, 0.3)"};
  color:  ${({$isActive}) => $isActive ? "#ffa801" : "#737373"};
  background-color: transparent;
  cursor: pointer;
`
export const ModalContent = styled.div``