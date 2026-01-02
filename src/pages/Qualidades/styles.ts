import styled, { keyframes } from "styled-components";

const primaryColor = "#a80707";
const primaryLight = "#c41818";
const foreground = "#1a1a1a";
const mutedForeground = "#6b7280";
const cardBg = "#ffffff";
const border = "#e5e7eb";
const success = "#22c55e";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  padding: 5rem 1rem;
`;

export const Container = styled.div`
max-width: 72rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 6px;
  padding: 0.5rem 1rem;
  background: ${primaryColor}15;
  color: ${primaryColor};
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;

  svg {
    width: 1.2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${foreground};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const TitleAccent = styled.span`
  color: ${primaryColor};
`;

export const Subtitle = styled.p`
  color: ${mutedForeground};
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

export const StatCard = styled.div<{ $delay: number }>`
  background: ${cardBg};
  border-radius: 1rem;
  border: 1px solid ${border};
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}ms;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${primaryColor}20;
    border-color: ${primaryColor}30;
  }
`;

export const StatIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  border-radius: 0.75rem;
  background: ${primaryColor}15;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${StatCard}:hover & {
    background: ${primaryColor};
    transform: scale(1.1);
  }
`;

export const StatIcon = styled.span`
  color: ${primaryColor};
  transition: color 0.3s ease;

  ${StatCard}:hover & {
    color: white;
  }
`;

export const StatValue = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${primaryColor};
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${mutedForeground};
`;

export const PillarsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const PillarCard = styled.div<{ $delay: number }>`
  background: ${cardBg};
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid ${border};
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}ms;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px ${primaryColor}15;
  }
`;

export const PillarIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${primaryColor}, ${primaryLight});
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 40px ${primaryColor}40;
  transition: transform 0.3s ease;

  ${PillarCard}:hover & {
    transform: scale(1.1);
  }
`;

export const PillarIcon = styled.span`
  color: white;
`;

export const PillarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${foreground};
  margin-bottom: 0.75rem;
`;

export const PillarDescription = styled.p`
  color: ${mutedForeground};
  line-height: 1.7;
`;

export const TrustBadgeWrapper = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

export const TrustBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: ${cardBg};
  border-radius: 9999px;
  border: 1px solid ${border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const TrustIcon = styled.span`
  color: ${success};
`;

export const TrustText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${foreground};
`;