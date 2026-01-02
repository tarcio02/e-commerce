import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 20px; 
  display: flex;
  flex-direction: column;
  /* gap: 24px; */
  margin-top: 92px;
`;

export const Header = styled.header`
  background-color: #A80707;
  color: white;
  padding: 1.5rem;
  border-radius: 0.75rem 0.75rem 0 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

export const Content = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1.5rem;
  padding-top: 40px;
`;

export const EmptyState = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyStateIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: rgba(107, 114, 128, 0.5);
`;

export const EmptyStateText = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const AddressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const AddButtonContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
