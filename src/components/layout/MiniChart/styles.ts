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

const growUp = keyframes`
from {
    transform: scaleY(0);
}
to {
    transform: scaleY(1);
}
`;

export const Container = styled.div<{ $delay?: number }>`
background-color: hsl(0, 0%, 100%);
border-radius:1.25rem;
padding: 1.25rem;
transition: all 0.3s ease;
box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08) ;
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
align-items: center;
justify-content: space-between;
margin-bottom: 1rem;
`;

export const Label = styled.span`
font-size: 0.875rem;
font-weight: 500;
color: hsl(0, 0%, 45%);
text-transform: uppercase;
letter-spacing: 0.05em;
`;

export const Total = styled.span`
font-size: 0.875rem;
font-weight: 500;
color: hsl(0, 0%, 45%);

strong {
    color: hsl(0, 0%, 12%);
    font-weight: 600;
}
`;

export const ChartContainer = styled.div`
display: flex;
gap: 0.5rem;
`;

export const YAxis = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 8rem;
padding: 0.25rem 0;
`;

export const YAxisLabel = styled.span`
font-size: 0.625rem;
font-weight: 500;
color: hsl(0, 0%, 45%);
text-align: right;
min-width: 2.5rem;
`;

export const ChartWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`;

export const ChartArea = styled.div`
position: relative;
height: 8rem;
width: 100%;
border-left: 1px solid hsl(0, 0%, 88%);
border-bottom: 1px solid hsl(0, 0%, 88%);
`;

export const GridLines = styled.div`
position: absolute;
inset: 0;
display: flex;
flex-direction: column;
justify-content: space-between;
pointer-events: none;
`;

export const GridLine = styled.div`
width: 100%;
height: 1px;
background-color: hsl(0, 0%, 88%);
opacity: 0.5;
`;

export const BarsContainer = styled.div`
position: absolute;
inset: 0;
display: flex;
align-items: flex-end;
justify-content: space-around;
padding: 0 0.5rem;
gap: 0.50rem;
`;

export const BarWrapper = styled.div`
flex: 1;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
`;

export const Bar = styled.div<{ $height: number; $delay?: number }>`
width: 100%;
max-width: 5rem;
height: ${({ $height }) => Math.max($height, 2)}%;
background-color: hsl(40, 100%, 50%);
border-radius: 0.5rem 0.5rem 0 0;
transform-origin: bottom;
animation: ${growUp} 0.5s ease-out forwards;
animation-delay: ${({ $delay }) => $delay || 0}ms;
transform: scaleY(0);
transition: background-color 0.2s ease;

&:hover {
    background-color: hsl(40, 100%, 50%)cc;
}
`;

export const XAxis = styled.div`
display: flex;
justify-content: space-around;
padding-top: 0.5rem;
`;

export const XAxisLabel = styled.span`
font-size: 0.75rem;
font-weight: 500;
color: hsl(0, 0%, 45%);
text-align: center;
flex: 1;
`;
