import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesFooter = styled.div`
  padding: ${theme.spaces.paddingMobile};
`

export const Section = styled.div`
  margin-bottom: 32px;

  h3{
    font-size: 20px;
    color: #4f4f4f;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  gap: 8px;
  margin-top: 16px;
`

export const Bandeira = styled.div`
  border: 1px solid gray;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px;

  img{
    width: 40px;
    height: auto;
  }
`

export const Social = styled.a` 
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px;

  img{
    width: 40px;
    height: auto;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  a{
    font-weight: bold;
    color: #4f4f4f;
    text-decoration: none;
  }
`



export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-top: 1px solid gray;
  padding-top: 8px;

  a{
    color: black;
  }

  .top{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .center{
    text-align: center;
  }
`