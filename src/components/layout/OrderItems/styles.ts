import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid hsl(var(--border));

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
`;

export const ItemName = styled.p`
  font-weight: 500;
`;

export const ItemQuantity = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;

export const ItemPriceContainer = styled.div`
  text-align: right;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
`;

export const ItemUnitPrice = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;
