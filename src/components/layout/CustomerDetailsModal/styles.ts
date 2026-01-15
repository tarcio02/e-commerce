import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 0%, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const Modal = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;

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
`;

export const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid hsl(0, 0%, 88%);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  background-color: hsl(40, 100%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  font-weight: 700;
  font-size: 1.25rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const CustomerDetails = styled.div``;

export const CustomerName = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.25rem;
`;

export const CustomerPhone = styled.p`
  font-family:'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 45%);
`;

export const CloseButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.15s ease;
  color: hsl(0, 0%, 45%);

  &:hover {
    background-color: hsl(0, 0%, 92%);
    color: hsl(0, 0%, 12%);
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Section = styled.div``;

export const SectionTitle = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.75rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const StatItem = styled.div`
  background-color: hsl(0, 0%, 92%);
  padding: 0.75rem;
  border-radius: 0.75rem;
  text-align: center;
`;

export const StatValue = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
`;

export const StatLabel = styled.p`
  font-family:'Inter', sans-serif;
  font-size: 0.75rem;
  color: hsl(0, 0%, 45%);
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: hsl(0, 0%, 92%);
  border-radius: 0.75rem;
`;

export const ProductImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 94%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 45%);
`;

export const ProductInfo = styled.div``;

export const ProductName = styled.p`
  font-family:'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 12%);
`;

export const ProductCount = styled.p`
  font-family:'Inter', sans-serif;
  font-size: 0.75rem;
  color: hsl(0, 0%, 45%);
`;

export const AIInsightBox = styled.div`
  background: linear-gradient(135deg, hsl(40, 100%, 50%)15, hsl(40, 100%, 50%)05);
  border: 1px solid hsl(40, 100%, 50%)30;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const AIIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: hsl(40, 100%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  flex-shrink: 0;
`;

export const AIContent = styled.div``;

export const AILabel = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: hsl(40, 100%, 50%);
  margin-bottom: 0.25rem;
`;

export const AIText = styled.p`
  font-family:'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  line-height: 1.5;
`;