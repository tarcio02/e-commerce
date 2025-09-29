import styled from "styled-components";

export const StylesForm = styled.div`
text-align: center;
background-color: rgb(168, 7, 7);
height: auto;
padding-bottom: 80px;
`

export const Top = styled.div`
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
  margin: 0 auto;
  margin-top: 80px;

  input{
    width: 100%;
    height: 48px;
    border-radius: 20px;
    border: none;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;

    &::placeholder{
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

export const Titulo = styled.div`
  font-family: serif;
  color: white;
  font-size: 28px;
`

export const Button = styled.div`
  background-color: #ffa801;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  color: white;
  border-radius: 20px;
`

