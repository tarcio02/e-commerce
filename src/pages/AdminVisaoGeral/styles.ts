import styled from 'styled-components';

export const Content = styled.div`
max-width: 80rem;
margin: 0 auto;
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

