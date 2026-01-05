import styled from 'styled-components';

export const Overlay = styled.div`
position: fixed;
inset: 0;
background-color: hsla(0, 0%, 0%, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
padding: 1rem;
`;

export const Modal = styled.div`
background-color: hsl(0, 0%, 100%);
border-radius: 1rem;
box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
width: 100%;
max-width: 32rem;
max-height: 90vh;
overflow: hidden;
display: flex;
flex-direction: column;
`;

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.25rem 1.5rem;
border-bottom: 1px solid hsl(0, 0%, 88%);
background-color: hsl(0, 91%, 34%);
`;

export const Title = styled.h3`
font-family: 'Space Grotesk', sans-serif;
font-size: 1.125rem;
font-weight: 600;
color: hsl(0, 0%, 100%);
`;

export const CloseButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 2rem;
height: 2rem;
border-radius: 0.5rem;
background-color: hsla(0, 0%, 100%, 0.1);
color: hsl(0, 0%, 100%);
border: none;
cursor: pointer;
transition: all 0.15s ease;

&:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
}
`;

export const Content = styled.div`
padding: 1.5rem;
overflow-y: auto;
`;

export const Section = styled.section`
margin-bottom: 1.5rem;

&:last-child {
    margin-bottom: 0;
}
`;

export const SectionTitle = styled.h4`
font-family: 'Inter', sans-serif;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
color: hsl(0, 0%, 45%);
margin-bottom: 0.75rem;
`;

export const InfoGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
`;

export const InfoItem = styled.div`
display: flex;
flex-direction: column;
gap: 0.25rem;
`;

export const InfoLabel = styled.span`
font-family: 'Inter', sans-serif;
font-size: 0.75rem;
color: hsl(0, 0%, 45%);
`;

export const InfoValue = styled.span`
font-family: 'Space Grotesk', sans-serif;
font-size: 0.875rem;
font-weight: 500;
color: hsl(0, 0%, 12%);
`;

export const ItemsList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.75rem;
border-radius: 0.5rem;
background-color: hsl(0, 0%, 92%);
margin-bottom: 0.5rem;

&:last-child {
    margin-bottom: 0;
}
`;

export const ItemInfo = styled.div`
display: flex;
flex-direction: column;
gap: 0.125rem;
`;

export const ItemName = styled.span`
font-family: 'Inter', sans-serif;
font-size: 0.875rem;
font-weight: 500;
color: hsl(0, 0%, 12%);
`;

export const ItemQuantity = styled.span`
font-family: 'Inter', sans-serif;
font-size: 0.75rem;
color: hsl(0, 0%, 45%);
`;

export const ItemPrice = styled.span`
font-family: 'Space Grotesk', sans-serif;
font-size: 0.875rem;
font-weight: 600;
color: hsl(0, 0%, 12%);
`;

export const TotalRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 1rem;
border-top: 1px solid hsl(0, 0%, 88%);
margin-top: 1rem;
`;

export const TotalLabel = styled.span`
font-family: 'Inter', sans-serif;
font-size: 1rem;
font-weight: 600;
color: hsl(0, 0%, 12%);
`;

export const TotalValue = styled.span`
font-family: 'Space Grotesk', sans-serif;
font-size: 1.25rem;
font-weight: 700;
color: hsl(40, 100%, 50%);
`;
