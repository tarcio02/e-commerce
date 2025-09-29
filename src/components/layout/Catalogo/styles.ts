import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StylesCatalogo = styled.div`
padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`;

export const Titulo = styled.h3`
  font-size: 24px;
  font-family: serif;
  margin-bottom: 16px;
  margin-left: 8px;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 24px;
  border: 1px solid red;
`