// styles.ts
import styled, { css } from "styled-components";

type Orientation = "horizontal" | "vertical";

interface SeparatorRootProps {
  $orientation: Orientation;
}

export const SeparatorRoot = styled.div<SeparatorRootProps>`
  flex-shrink: 0;
  background-color: ${({ theme }) =>
    // ajusta pra sua tokenização de tema
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (theme as any)?.colors?.border ?? "rgba(0, 0, 0, 0.12)"};

  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? css`
          height: 1px;
          width: 100%;
        `
      : css`
          width: 1px;
          height: 100%;
        `}
`;
