import styled from "styled-components";

export const Label = styled.label`
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  line-height: 1.25rem; /* leading-none */

  /* Mantém compatibilidade visual com peer-disabled */
  &[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
