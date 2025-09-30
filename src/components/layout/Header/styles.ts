import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const StylesHeader = styled.div`
  position: relative;
  z-index: 999;
`

export const Container = styled.div<{ $downScroll: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spaces.paddingMobile};
  width: 100%;
  height: 92px;

  position: fixed;
  left: 0;
  right: 0;
  top: ${({ $downScroll }) => ($downScroll ? '0' : '18px')};
  background-color: ${({ $downScroll }) => ($downScroll ? 'rgb(168, 7, 7)' : 'transparent')};

  transition:
    top 220ms cubic-bezier(0.22, 0.61, 0.36, 1),
    background-color 240ms ease;
  will-change: top, background-color;

  /* @media (prefers-reduced-motion: reduce) {
    transition: none;
  } */

  @media (min-width: 601px) {
    padding: 0 80px;
  }
`

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

export const BtnCarrinho = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  img {
    width: 26px;
  }
`
export const BtnPerfil = styled.div`
  display: none;
  cursor: pointer;
  background-color: transparent;
  border: none;

  img {
    width: 26px;
  }

  @media (min-width: 769px) {
    display: block;
  }
`
