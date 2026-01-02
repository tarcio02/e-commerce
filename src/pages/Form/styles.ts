import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const neonYellowSoft = keyframes`
  0% {
    box-shadow:
      inset 0 0 6px rgba(255, 168, 1, 0.4),
      0 0 6px rgba(255, 168, 1, 0.5),
      0 0 14px rgba(255, 168, 1, 0.4);
  }
  50% {
    box-shadow:
      inset 0 0 10px rgba(255, 168, 1, 0.7),
      0 0 12px rgba(255, 168, 1, 0.8),
      0 0 24px rgba(255, 168, 1, 0.7);
  }
  100% {
    box-shadow:
      inset 0 0 6px rgba(255, 168, 1, 0.4),
      0 0 6px rgba(255, 168, 1, 0.5),
      0 0 14px rgba(255, 168, 1, 0.4);
  }
`

export const StylesForm = styled.div`
  text-align: center;
  background-color: rgb(168, 7, 7);
  height: auto;
  padding-bottom: 80px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  top: 0;
  text-align: center;
  padding: 24px;
  font-size: 18px;
  color: white;
  background-color: #ffa801;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 70%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 80px;

  input {
    width: 100%;
    height: 48px;
    border-radius: 20px;
    border: none;
    padding: 16px;
    font-size: 16px;
    outline: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }

    &:focus {
      border: none;
      animation: none;
    }
  }

  .error{
    border: 3px solid #ffa801;
    animation: ${neonYellowSoft} 1.8s ease-in-out infinite;
  }
`

export const Titulo = styled.h2`
  color: white;
  font-size: 28px;
`

export const Highlight = styled.h2`
color: #ffa801;
  font-size: 28px;

`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #ffa801;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  transform: translateZ(0);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 220ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.06);
  }

  svg {
    width: 18px;
  }
`

export const HighlightLink = styled(Link)`
  color: #ffa801;
`
export const Check = styled.div`
display: flex;
align-items: center;
text-align: start;
gap: 6px;
border-radius: 20px;

  input {
    width: 16px;
  }
`