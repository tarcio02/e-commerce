import styled, { css } from "styled-components";

export const RadioGroupContainer = styled.div`
  display: grid;
  gap: 0.5rem; /* equivalente ao gap-2 */
`;

export const RadioItemWrapper = styled.label<{ $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  user-select: none;
`;

export const HiddenRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const CustomRadioCircle = styled.span<{
  $checked: boolean;
  $disabled: boolean;
}>`
  width: 1rem;  /* 16px */
  height: 1rem;
  border-radius: 999px;
  border: 1px solid #a80505;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s ease-in-out;

  ${({ $checked }) =>
    $checked &&
    css`
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
    `}

  ${({ $disabled }) =>
    !$disabled &&
    css`
      ${RadioItemWrapper}:focus-within & {
        outline: #a80505;
        outline-offset: 2px;
      }
    `}
`;

export const RadioIndicator = styled.span`
  width: 0.625rem;  /* 10px */
  height: 0.625rem;
  border-radius: 999px;
  background: #a80505;
`;
