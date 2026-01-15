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
  margin-bottom: 1.5rem;
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

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div<{$delay: string}>`
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  padding: 1.25rem;
  transition: all 0.3s ease;
  animation: ${slideUp} ${({$delay}) => $delay} ease-out forwards;

  &:hover {
    box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
    transform: translateY(-2px);
  }
`;

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const StatLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color:hsl(0, 0%, 45%);
`;

export const StatPeriod = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.625rem;
  color:hsl(0, 0%, 45%);
  background-color: hsl(0, 0%, 92%);
  padding: 0.125rem 0.5rem;
  border-radius: 0.5rem;
`;

export const StatValue = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.5rem;
`;

export const StatComparison = styled.div<{ $positive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ $positive}) => $positive ? 'hsl(142, 76%, 36%)' : 'hsl(0, 84%, 60%)'};
`;

export const ListSection = styled.section``;