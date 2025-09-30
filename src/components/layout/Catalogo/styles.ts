import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const StylesCatalogo = styled.div`
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Titulo = styled.h3`
  font-size: 24px;
  font-family: serif;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(160px, 1fr));


  @media (min-width: 601px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`
