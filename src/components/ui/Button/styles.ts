import styled, { css, keyframes } from "styled-components";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg";

export interface StyledButtonProps {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
  $iconOnly?: boolean;
  disabled?: boolean;
}

const pulse = keyframes`
  0%   { opacity: .9 }
  50%  { opacity: .6 }
  100% { opacity: .9 }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 600;
  user-select: none;
  white-space: nowrap;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color .2s, color .2s, border-color .2s, transform .06s ease-in-out, filter .2s;

  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}

  /* Tamanhos */
  ${({ $size = "md", $iconOnly }) => {
    const sizes: Record<ButtonSize, { pad: string; fs: string; lh: string; minw?: string }> = {
      sm: { pad: "0.5rem 0.75rem", fs: ".875rem", lh: "1.25rem", minw: "2.25rem" },
      md: { pad: "0.625rem 1rem", fs: "0.95rem", lh: "1.5rem", minw: "2.5rem" },
      lg: { pad: "0.75rem 1.25rem", fs: "1rem", lh: "1.75rem", minw: "2.75rem" },
    };
    const s = sizes[$size];
    return css`
      font-size: ${s.fs};
      /* line-height: ${s.lh}; */
      padding: ${$iconOnly ? "0.5rem" : s.pad};
      min-width: ${$iconOnly ? s.minw : undefined};
      aspect-ratio: ${$iconOnly ? "1/1" : undefined};
    `;
  }}

  /* Variantes (usando tokens HSL do tema) */
  ${({ $variant = "primary", theme }) => {
    const h = (t: string) => `hsl(${t})`;
    switch ($variant) {
      case "secondary":
        return css`
          background: ${h(theme.colors.secondary)};
          color: ${h(theme.colors.secondaryForeground)};
          border-color: ${h(theme.colors.border)};
          &:hover { filter: brightness(.97); }
          &:active { transform: translateY(0.5px); }
        `;
      case "outline":
        return css`
          background: transparent;
          color: ${h(theme.colors.primary)};
          border-color: ${h(theme.colors.primary)};
          &:hover { background: ${h(theme.colors.muted)}; }
          &:active { transform: translateY(0.5px); }
        `;
      case "ghost":
        return css`
          background: transparent;
          color: ${h(theme.colors.foreground)};
          border-color: transparent;
          &:hover { background: ${h(theme.colors.muted)}; }
          &:active { transform: translateY(0.5px); }
        `;
      case "destructive":
        return css`
          background: ${h(theme.colors.destructive)};
          color: ${h(theme.colors.destructiveForeground)};
          border-color: ${h(theme.colors.destructive)};
          &:hover { filter: brightness(.96); }
          &:active { transform: translateY(0.5px); }
        `;
      default:
        return css`
          background: ${h(theme.colors.primary)};
          color: ${h(theme.colors.primaryForeground)};
          border-color: ${h(theme.colors.border)};
          &:hover { filter: brightness(.97); }
          &:active { transform: translateY(0.5px); }
        `;
    }
  }}

  /* Foco acessível */
  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 4px hsl(${({ theme }) => theme.colors.ring});
  }

  /* Disabled / Busy */
  &:disabled,
  &[aria-busy="true"] {
    opacity: .6;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Spinner local quando loading */
  &[aria-busy="true"]::after {
    content: "";
    position: absolute;
    right: 0.75rem;
    width: 1rem;
    height: 1rem;
    border-radius: 999px;
    border: 2px solid currentColor;
    border-right-color: transparent;
    animation: ${pulse} .9s ease-in-out infinite;
  }

  /* Quando for iconOnly, centraliza melhor o spinner */
  ${({ $iconOnly }) =>
    $iconOnly &&
    css`
      &[aria-busy="true"]::after {
        position: absolute;
        inset-inline: 0;
        margin: auto;
      }
    `}
`;

export const LeftIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`;

export const RightIcon = styled(LeftIcon)``;
