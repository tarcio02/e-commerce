import styled from 'styled-components'

export const StylesCardCatalogo = styled.div`
  background-color: #f7f1e3;
  border: 1px solid #f7f1e3;
  padding: 16px;
  border-radius: 20px;

  @media (min-width: 601px) {

  }
`

export const Image = styled.div`
  background-color: white;

  img {
    width: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`

export const Title = styled.div`
  h3 {
    margin-bottom: 8px;
  }
`

export const preco = styled.h3`
  color: #33d9b2;
  font-size: 20px;
  letter-spacing: 1px;
`

export const Button = styled.button`
  background-color: #ffa801;
  border: none;
  padding: 8px 0;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  transform: translateZ(0);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 220ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.06);
  }
`
