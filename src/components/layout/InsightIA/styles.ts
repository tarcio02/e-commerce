import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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

export const AIInsightsCard = styled.div`
  background: linear-gradient(135deg, rgba(168, 7, 7, 0.08) 0%, rgba(255, 168, 1, 0.08) 100%);
  border: 1px solid rgba(168, 7, 7, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${slideUp} 0.4s ease-out forwards;
`;

export const AIInsightsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const AIIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #a80707 0%, #ffa801 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const AITitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
`;

export const AIInsightText = styled.p`
  font-size: 0.938rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const AIActionButton = styled(Link)`
  background: linear-gradient(135deg, #a80707 0%, #ffa801 100%);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  width: fit-content;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(168, 7, 7, 0.4);
  }
`;