import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StylesReceitas = styled.div`
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`
export const Titulo = styled.h3`
  font-family: serif;
  font-size: 24px;
  margin-bottom: 16px;
`

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  gap: 16px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

`