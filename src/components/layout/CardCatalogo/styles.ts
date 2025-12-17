import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(168, 7, 7, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: linear-gradient(135deg, #fff5e6 0%, #ffe4cc 100%);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.08);
  }
`;

export const Badge = styled.span`
display: flex;
align-items: center;
  position: absolute;
  top: 12px;
  gap: 6px;
  left: 12px;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  color: #16a249;
  background-color: rgba(22, 162, 73, 0.1);
  border: 1px solid rgba(22, 162, 73, 0.3);

  svg{
    width: 14px;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  z-index: 2;
  
  &:hover {
    background: #fff5f5;
    transform: scale(1.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
    color: #A80707;
    transition: fill 0.2s ease;
  }
  
  &.active svg {
    fill: #A80707;
  }
`;

export const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
/* height: 250px; */
padding:  16px;
`;

export const Text = styled.div`
  /* border: 1px solid red; */
`

export const Values = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
  /* border: 1px solid red; */
  height: 110px;
`

export const Category = styled.span`
  font-size: 0.75rem;
  color: #ffa801;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: #A80707;
`;

export const OldPrice = styled.span`
  font-size: 0.9rem;
  color: #999;
  text-decoration: line-through;
`;

export const Frete = styled.div`
  text-decoration: none;
  font-size: 0.9rem;
  color: #999;
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const RatingText = styled.span`
  font-size: 0.85rem;
  color: #666;
  margin-left: 4px;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: #ffa801;
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e69500;
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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

export const QuantityValue = styled.span`
  min-width: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a1a;
`;
