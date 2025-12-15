import styled from "styled-components";

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AddressSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AddressContent = styled.div`
  flex: 1;
`;

export const AddressLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const AddressText = styled.p`
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
`;
