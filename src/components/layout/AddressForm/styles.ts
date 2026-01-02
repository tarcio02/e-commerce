import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 20px; 
  display: flex;
  flex-direction: column;
  margin-top: 92px;
`

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

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1.5rem;
  padding-top: 40px;
`

// Grid responsiva
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  font-size: 16px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #FFAA00;
  }
`

export const SubmitButton = styled.button`
  margin-top: 12px;
  padding: 14px;
  border-radius: 10px;
  background-color: #4b79ef;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #3f6add;
  }
`
