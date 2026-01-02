import { Link } from "react-router-dom";
import styled from "styled-components";

export const StylesLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 92px);
  margin-top: 92px;
` 

export const Form = styled.form`
  width: 80%;
  max-width: 400px;
  padding: 40px 32px;
  border-radius: 16px;
  background: rgba(168, 7, 7, 1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 16px;

    .input {
      outline: none;
      border: 1px solid white;
      padding: 8px;
      background-color: transparent;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      color: white;
      font-size: 16px;

      &::placeholder{
        color: rgba(255, 255, 255, 0.5);
      }
      &:focus{
        border: 1px solid  #ffa801;
      }
    }

    .check {
      display: flex;
      align-items: center;
      input {
        align-items: center;
        margin-right: 4px;
      }
    }

`

export const Button = styled.button`
  border: none;
  background-color: #ffa801;
  font-weight: bold;
  font-size: 16px;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;

  transform: translateZ(0);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 220ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.06);
  }
`

export const Titulo = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
  color: white;
`

export const ToCadastro = styled(Link)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  color: #ffa801;
  text-decoration: none;
  border-bottom: 1px solid #ffa801;
  width: fit-content;

  transform: translateZ(0);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 220ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.06);
  }

  svg{
    width: 18px;
  }
`