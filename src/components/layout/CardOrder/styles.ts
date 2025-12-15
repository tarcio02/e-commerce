import styled from 'styled-components';

export type BadgeStyle = {
  color: string;
  bg: string;
  border: string;
};

interface BadgeProps {
  styles: BadgeStyle;
}


export const CardContainer = styled.div<{ $delay: number }>`
  background: hsl(var(--card));
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  overflow: hidden;
  animation: fadeIn 0.3s ease-out forwards;
  animation-delay: ${props => props.$delay}ms;
  opacity: 0;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CardHeader = styled.div`
  background-color: #F0f0f080;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid hsl(var(--border));
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoBlock = styled.div<{ $hideOnMobile?: boolean }>`
  ${props => props.$hideOnMobile && `
    @media (max-width: 640px) {
      display: none;
    }
  `}
`;

export const InfoLabel = styled.p`
  font-size: 0.75rem;
  color: #737373;
`;

export const InfoValue = styled.p<{ $bold?: boolean }>`
  font-weight: ${props => props.$bold ? '600' : '500'};
  color: hsl(var(--foreground));
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ItemImage = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 0.375rem;
  background: hsl(var(--muted));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ItemName = styled.p`
  font-weight: 500;
  color: hsl(var(--foreground));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemQuantity = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  color: hsl(var(--foreground));
  white-space: nowrap;
`;

export const MoreItems = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;

export const CardFooter = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #E6E6E6;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const TotalLabel = styled.p`
  font-size: 0.875rem;
  color: #737373;
`;

export const TotalValue = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(var(--foreground));
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #ffa801;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
` 

export const BagdeStatus = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 8px;
  padding: 0.1rem 0.5rem;
  color: ${({ styles }) => styles.color};
  background: ${({ styles }) => styles.bg};
  border: 1px solid ${({ styles }) => styles.border};

  svg{
    width: 18px;
    color: ${({ styles }) => styles.color};
  }
`