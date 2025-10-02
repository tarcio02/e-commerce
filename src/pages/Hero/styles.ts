import styled from 'styled-components'
import hero from '../../assets/images/massas-sdf.webp'
import { theme } from '../../styles/theme'
import { Link } from 'react-router-dom'

export const StylesHero = styled.div``

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  padding: ${theme.spaces.paddingMobile};

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Container = styled.div`
  margin-top: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  z-index: 2;
  width: 100%;
  color: white;
  gap: 16px;
`

export const Titulo = styled.h1`
  font-weight: bold;
  line-height: 60px;
  font-size: 32px;
  font-family: serif;
  letter-spacing: 1px;

  @media (min-width: 769px) {
    font-size: 48px;
  }
`

export const Paragrafo = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
`

export const IconParagrafo = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 8px;

  img {
    width: 24px;
  }
`

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  gap: 8px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: white;
  border-radius: 24px;
  text-decoration: none;
  cursor: pointer;

  transform: translateZ(0);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 220ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.06);
  }

  img {
    width: 28px;
  }

  @media (min-width: 601px) {
    padding: 12px 16px;
    font-size: 18px;
  }
`

export const Card = styled.div`
  padding: 16px 24px;
  background-color: #ffa801;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 56px;
`
