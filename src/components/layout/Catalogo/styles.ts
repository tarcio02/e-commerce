import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const StylesCatalogo = styled.div`
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

export const Titulo = styled.h3`
  font-size: 2rem;
  margin: 16px 0 32px 0;
  /* margin-bottom: 16px; */
  margin-left: 8px;
  color: #A80707;
  text-align: center;
`

export const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(160px, 1fr));


  @media (min-width: 601px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`
