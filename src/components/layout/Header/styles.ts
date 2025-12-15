import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const StylesHeader = styled.div`
  position: relative;
  z-index: 999;
`

export const Container = styled.div<{ $downScroll: boolean, $isRoute: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  width: 100%;
  height: 92px;

  position: ${({ $isRoute }) => ($isRoute ? '' : 'fixed')};
  left: 0;
  right: 0;
  top: ${({ $downScroll }) => ($downScroll ? '0' : '32px')};
  background: ${({ $downScroll, $isRoute }) =>
  $downScroll || $isRoute
    ? 'rgb(168, 7, 7)'
    : 'transparent'
};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition:
    top 220ms cubic-bezier(0.22, 0.61, 0.36, 1),
    background-color 240ms ease;
  will-change: top, background-color;

  ${({ $isRoute }) =>
  $isRoute &&
  css`
    @media (prefers-reduced-motion: reduce) {
    transition: none;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Logo = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    display: block;
    max-width: 6rem;
    height: auto;
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;

  svg {
    width: 20px;
    color: white;
  }
`

export const Notification = styled.div`
  position: absolute;
  right: 0;
  bottom: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  font-size: 10px;
  background-color: #f59f0a;
  color: black;
  border-radius: 50%;
`

