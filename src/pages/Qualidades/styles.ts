import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesQualidade = styled.div`
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Iamge = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 601px) {
    max-width: 360px;
    margin: 0;
  }
`

export const Texto = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 601px) {
    max-width: 592px;
  }
`

export const Titulo = styled.h2`
  font-family: serif;
  font-size: 28px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.7);

  @media (min-width: 601px) {
    font-size: 32px;
  }

  @media (min-width: 769px) {
    font-size: 40px;
  }
`

export const Paragrafo = styled.p`
  font-size: 18px;
`

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  color: white;
  background-color: rgb(168, 7, 7);

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
