import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow-x: auto;
`;

export const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 16px;
  max-width: 90%;
  width: 100%;
  max-height: 90vh;
  overflow: hidden; /* <- importante */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease;
  position: relative;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 601px) {
    max-width: 600px;
  }
`;

export const ScrollArea = styled.div`
  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
  }

  scrollbar-width: thin;              
  scrollbar-color: #c1c1c1 #f1f1f1;   

@media (min-width: 601px) {
  display: flex;
}
`;

export const ImageContainer = styled.div`

  width: 100%;
  aspect-ratio: 4/3;
  background: #f5f5f5;

@media (min-width: 601px) {
  width: 70%;
}
`
export const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 601px) {
    width: 28px;
    height: 28px;
    top: 6px;
    right: 6px;
  }
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: .4rem;
  padding: 24px;

  @media (min-width: 601px) {
    width: 400px;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
`

export const DiscountBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e53935;
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`

export const FreteGratisBadge = styled.span`
  color: #16a249;
  background-color: rgba(22, 162, 73, 0.1);
  border: 1px solid rgba(22, 162, 73, 0.3);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 6px;

  svg {
    width: 18px;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
`

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;

`

export const PriceContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
  flex-wrap: wrap;
`

export const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
`

export const OldPrice = styled.span`
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
`

export const DiscountTag = styled.span`
  background: #ffebee;
  color: #e53935;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 12px 16px;
gap: 8px;
background-color: #ffa801;
border: none;
border-radius: 16px;
font-size: 16px;
font-weight: bold;
margin-top: 8x;

svg{
  width: 20px;
}

@media (min-width: 601px) {
  gap: 8px;
}
`
export const Price = styled.div`
  display: flex;
  flex-direction: column;
`
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const QuantityButton = styled.button`
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #A80707;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 48px;
`;

export const QuantityValue = styled.span`
  min-width: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a1a;
`;
