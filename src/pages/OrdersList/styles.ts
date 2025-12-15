import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: rgba(168, 7, 7, 0.3);
  border-radius: 0.5rem;
  
  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #A80707;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(var(--foreground));
  
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const Subtitle = styled.p`
  color:  #737373;
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

export const OrdersGrid = styled.div`
  display: grid;
  gap: 1rem;
  
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EmptyORdersStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  width: 320px;
  margin: 0 auto;
  margin-top: 80px;
`