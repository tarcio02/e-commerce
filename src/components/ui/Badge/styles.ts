import styled, { css } from "styled-components";

export const Badge = styled.div<{ variant: string }>`
  display: inline-flex;
  align-items: center;
  text-align: center;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  padding: 8px;
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  transition: background-color 0.2s, color 0.2s;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px hsl(var(--ring));
  }

  ${({ variant }) =>
    variant === "default" &&
    css`
      background-color: #16a34a;
      color: #fff;
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: #ffaa00;
      color: #000;

    `}

  ${({ variant }) =>
    variant === "destructive" &&
    css`
      background-color: hsl(var(--destructive));
      color: hsl(var(--destructive-foreground));

    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      border-color: hsl(var(--border));
      color: hsl(var(--foreground));
      background: transparent;
    `}
`;
