import styled, { css, keyframes } from 'styled-components';

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

export const Container = styled.div<{ $delay?: number }>`
background-color: hsl(0, 0%, 100%);
border-radius: 1.25rem;
padding: 1.25rem;
transition: all 0.3s ease;
box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
animation: ${slideUp} 0.4s ease-out forwards;
animation-delay: ${({ $delay }) => $delay || 0}ms;
opacity: 0;

&:hover {
    box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
    transform: translateY(-2px);
}
`;

export const Header = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
margin-bottom: 0.75rem;
`;

export const Label = styled.span`
font-size: 0.875rem;
font-weight: 500;
color: hsl(0, 0%, 100%);
text-transform: uppercase;
letter-spacing: 0.05em;
`;

export const IconWrapper = styled.div`
padding: 0.5rem;
border-radius: 0.75rem;
background-color: rgba(255, 170, 0, 0.1);
color: hsl(40, 100%, 50%);
`;

export const Value = styled.div`
font-family: 'Space Grotesk', sans-serif;
font-size: 1.875rem;
font-weight: 700;
letter-spacing: -0.025em;
color: hsl(0, 0%, 12%);
margin-bottom: 0.5rem;
`;

export const ComparisonWrapper = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

interface TrendBadgeProps {
$variant: 'positive' | 'negative' | 'neutral';
}

export const TrendBadge = styled.span<TrendBadgeProps>`
display: inline-flex;
align-items: center;
gap: 0.25rem;
padding: 0.125rem 0.5rem;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 600;

${({ $variant }) => {
    switch ($variant) {
    case 'positive':
        return css`
        color: hsl(142, 76%, 36%);
        background-color: rgba(22, 162, 73, 0.1);
        `;
    case 'negative':
        return css`
        color: hsl(0, 84%, 60%);
        background-color: rgba(240, 61, 61, 0.1);
        `;
    default:
        return css`
        color: hsl(0, 0%, 45%);
        background-color: hsl(0, 0%, 92%);
        `;
    }
}}
`;

export const ComparisonLabel = styled.span`
font-size: 0.75rem;
color: hsl(0, 0%, 45%);
`;
