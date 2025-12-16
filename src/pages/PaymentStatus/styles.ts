import styled from "styled-components";

export const StylesOrderStatus = styled.div`
  min-height: 100vh;
  background-color: hsl(var(--background));
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 90px;

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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
`;

export const AddressSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AddressText = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

export const PricingRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const PricingLabel = styled.span`
  color: hsl(var(--muted-foreground));
`;

export const PricingValue = styled.span``;

export const DiscountRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: hsl(var(--accent));
  margin-bottom: 0.5rem;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 0.5rem;
`;
