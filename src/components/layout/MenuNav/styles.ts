import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StylesMenuNav = styled.div`
  justify-content: center;
  align-items: center;
  gap: 24px;
  display: none;

  @media (min-width: 769px) {
    display: flex;
  }

 /* background-color: rgba(245, 159, 10, 0.1);
    color: #ffa801; 
    border: 1px solid rgba(245, 159, 10, 0.3); */

  .active {
    background-color: rgba(255, 255, 255, 0.2);
    color: white; 
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    font-weight: bold;

    svg{
      font-weight: bold;
    }

    &::after{
      background: transparent;
    }
  }
`


export const Item = styled(NavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  position: relative;
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);

  svg {
    width: 18px;
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background: currentColor;

    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`
