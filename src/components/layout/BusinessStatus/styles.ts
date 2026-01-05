
import styled, { keyframes } from 'styled-components';

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
transition: $all 0.3s ease;
box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
animation: ${slideUp} 0.4s ease-out forwards;
animation-delay: ${({ $delay }) => $delay || 0}ms;
opacity: 0;

&:hover {
    box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
    transform: translateY(-2px);
}
`;

export const Label = styled.span`
font-size: 0.875rem;
font-weight: 500;
color: hsl(0, 0%, 45%);
text-transform: uppercase;
letter-spacing: 0.05em;
`;

interface StatusBoxProps {
$status: 'healthy' | 'attention' | 'critical';
}

const getStatusBackground = (status: string) => {
switch (status) {
    case 'healthy':
    return' hsl(142, 76%, 36%)';
    case 'attention':
    return 'hsl(40, 100%, 50%)';
    case 'critical':
    return 'hsl(0, 84%, 60%)';
    default:
    return 'hsl(0, 0%, 92%)';
}
};

export const StatusBox = styled.div<StatusBoxProps>`
margin-top: 1rem;
padding: 1rem;
border-radius: 1.25rem;
background-color: ${({ $status }) => getStatusBackground($status)}1a;
border: 1px solid ${({ $status }) => getStatusBackground($status)}4d;
`;

export const StatusContent = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
`;

export const IconWrapper = styled.div<StatusBoxProps>`
padding: 0.625rem;
border-radius: 9999px;
background-color: ${({ $status }) => getStatusBackground($status)};
color: hsl(0, 0%, 100%);
display: flex;
align-items: center;
justify-content: center;
`;

export const StatusTextWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const StatusLabel = styled.p`
font-family: 'Space Grotesk', sans-serif;
font-weight: 600;
font-size: 1.125rem;
color: hsl(0, 0%, 12%);
`;

export const StatusMessage = styled.p`
font-size: 0.875rem;
color: hsl(0, 0%, 45%);
`;
