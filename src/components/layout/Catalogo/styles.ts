import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { Link } from 'react-router-dom'

export const StylesCatalogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

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

export const Highlight = styled.div`
  color: #A80707;
`

export const Titulo = styled.h3`
  display: flex;
  width: fit-content;
  gap: 6px;
  font-size: 2rem;
  margin: 16px 0 32px 0;
  /* margin-bottom: 16px; */
  margin-left: 8px;
  color: black;
  text-align: center;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const Button = styled(Link)`
display: flex;
align-items: center;
padding: 16px 20px;
margin-top: 1.5rem;
border: none;
gap: 6px;
border-radius: 16px;
font-size: 16px;
font-weight: bold;
background-color: transparent;
border: 2px solid #ffa802;
color: #ffa802;
cursor: pointer;
width: fit-content;
text-decoration: none;
svg{
  width: 20px;
}
`