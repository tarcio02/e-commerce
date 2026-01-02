import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spaces.paddingMobile};
  margin-top: 92px;
`

export const Form = styled.form`
  width: 80%;
  max-width: 600px;
  padding: 40px 32px;
  border-radius: 16px;
  background: rgba(168, 7, 7, 1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* gap: 16px; */

  .section{
    margin-bottom: 16px;

    @media (min-width: 601px) {
      display: flex;
      gap: 16px;

    }
  }

  .container{
    width: 50%;
    input{
      margin-top: 16px;
    }
  }

  .erro{
    border: 2px solid #ffa801;
  }

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
      padding: 6px;
      align-items: start;
      border-radius: 8px;
      margin-bottom: 4px;

      input {
        margin-right: 6px;
        margin-top: 5px;
      }
    }
`
export const InputSenha = styled.div`

  button{
    background-color: transparent;
    border: none;
    color: white;
    text-decoration: underline;
    font-size: 14px;
    margin-top: 4px;
  }
`
export const HighlightLink = styled(Link)`
  color: #ffa801;
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
  }`

  export const Titulo = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 16px;
  color: white;
`

export const ToLogin = styled(Link)`
  text-align: center;
  cursor: pointer;
  color: white;

  transform: translateZ(0);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 220ms cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: scale(1.06);
  }
`

export const LinkTo = styled(Link)`
color: #ffa801;
padding-top:8px;
margin: 0 auto;
display: flex;
align-items: center;
width: fit-content;
border-bottom: 1px solid #ffa801;
text-decoration: none;

svg{
  width: 16px;
}
`