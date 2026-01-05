import styled from 'styled-components';

export const Container = styled.div`
display: flex;
min-height: 100vh;
background-color: hsl(0, 0%, 97%);
`;

export const Main = styled.main`
flex: 1;
min-width: 0;
`;

export const Content = styled.div`
padding: 1.5rem 2rem;
max-width: 1400px;
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
