import styled from 'styled-components';

export const Content = styled.div`
max-width: 80rem;
margin: 0 auto;
`;

export const Header = styled.header`
margin-bottom: 2rem;
`;

export const Title = styled.h1`
font-family: 'Space Grotesk', sans-serif;
font-size: 1.75rem;
font-weight: 700;
color: hsl(0, 0%, 12%);
margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
font-family: 'Inter', sans-serif;
font-size: 0.875rem;
color: hsl(0, 0%, 45%);
`;

export const StatsGrid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 1.25rem;
margin-bottom: 1.25rem;

@media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
}
`;

