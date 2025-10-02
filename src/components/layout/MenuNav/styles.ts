import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StylesMenuNav = styled.div`
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: none;

  @media (min-width: 769px) {
    display: flex;
  }
`

export const Item = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
`
