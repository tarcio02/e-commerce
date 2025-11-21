import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  height: 2.5rem; 
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid #E6E6E6;
  background-color: #FAFAFA;
  padding: 0.5rem 0.75rem; /* py-2 px-3 */
  font-size: 1rem; /* text-base */
  color: inherit;
  transition: 0.2s ease;
  box-sizing: border-box;

  /* placeholder */
  ::placeholder {
    color: hsl(var(--muted-foreground));
  }

  /* input[type="file"] */
  &::file-selector-button {
    border: none;
    background: transparent;
    font-size: 0.875rem; /* text-sm */
    font-weight: 500;
    color: hsl(var(--foreground));
    margin-right: 0.5rem;
  }

  /* focus */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--ring));
    outline-offset: 2px;
    border: 1px solid #ffaa00;
  }

  /* disabled */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* responsivo (md:text-sm) */
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;
