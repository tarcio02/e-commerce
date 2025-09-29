import styled from "styled-components";
import { theme } from "../../styles/theme";

import industria from "../../assets/images/industria.png"

export const StylesSobre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${industria});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 70vh;
  padding: ${theme.spaces.paddingMobile};

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  @media (min-width: 601px) {
    justify-content: start;
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Container = styled.div` 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 2;
  width: 100%;
  color: white;
  gap: 16px;

  @media (min-width: 601px) {
    width: 592px;
  }
  `

export const Titulo = styled.h3`
  font-size: 24px;
  font-family: serif;
  letter-spacing: 1px;
  color: white;
`

export const Paragrafo = styled.div`
  font-size: 20px;
  font-family: serif;
  letter-spacing: 1px;
  color: white;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  font-size: 20px;
  gap: 8px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: white;
  border-radius: 24px;
`