import styled from "styled-components";

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E6E6E6;

  &:last-child {
    border-bottom: none;
  }
  /* @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  } */
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;

  /* @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  } */
`;
export const ItemImagem = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px; 
`
export const ItemName = styled.p`
  font-weight: 500;
`;

export const ItemQuantity = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;

export const ItemPriceContainer = styled.div`
  text-align: right;

  /* @media (max-width: 600px) {
    text-align: left;
  } */
`;

export const ItemPrice = styled.p`
  font-weight: 600;
`;

export const ItemUnitPrice = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
