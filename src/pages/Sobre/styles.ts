import styled from 'styled-components'

export const Wrapper = styled.div`
min-height: 80vh;
display: flex;
flex-direction: column;
`;

export const AboutSection = styled.section`
padding-top: 5rem;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: #A80707;
  background-color: rgba(168, 7, 7, 0.1);
  border-radius: 16px;
  padding: 8px 16px;
  width: fit-content;
  margin: 16px auto;

  svg {
    width: 1.2rem;
  }
`

export const AboutContent = styled.div`
text-align: center;
max-width: 48rem;
margin-left: auto;
margin-right: auto;
padding-left: 1rem;
padding-right: 1rem;

h2 {
    font-size: 2.25rem; /* text-4xl */
    font-weight: 700;
    color: black;
    margin-bottom: 1.5rem;
}

p {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.125rem; /* text-lg */
    line-height: 1.75rem; /* leading-relaxed */
    margin-bottom: 2rem;
}

.highlight {
  color: #a80707;
}
`;

export const StatsGrid = styled.div`
margin-top: 3rem; /* mt-12 */
display: grid;
gap: 2rem; /* gap-8 */
grid-template-columns: 1fr;

@media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
}
`;

export const StatItem = styled.div`
.value {
    font-size: 1.875rem; /* text-3xl */
    font-weight: 700;
    color: #a80707;
    margin-bottom: 0.5rem;
}`