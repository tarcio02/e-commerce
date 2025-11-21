import styled from "styled-components";

interface CardContainerProps {
  $isSelected: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  border: 2px solid ${props => props.$isSelected ? '#FFA801' : '#e5e7eb'};
  border-radius: 0.5rem;
  padding: 1rem;
  transition: all 0.2s;
  cursor: pointer;
  background-color: ${props => props.$isSelected ? 'rgba(255, 168, 1, 0.05)' : 'white'};
  box-shadow: ${props => props.$isSelected ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : 'none'};

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    border-color: ${props => props.$isSelected ? '#FFA801' : 'rgba(255, 168, 1, 0.5)'};
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

interface CheckboxProps {
  $isSelected: boolean;
}

export const Checkbox = styled.div<CheckboxProps>`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid ${props => props.$isSelected ? '#FFA801' : 'rgba(107, 114, 128, 0.3)'};
  background-color: ${props => props.$isSelected ? '#FFA801' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
`;

export const AddressInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  color: #FFA801;
  margin-top: 0.125rem;
`;

export const AddressDetails = styled.div`
  flex: 1;
`;

export const StreetAddress = styled.p`
  font-weight: 600;
  color: #111827;
`;

export const Complement = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const LocationInfo = styled.div`
  padding-left: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const LocationText = styled.p`
  font-size: 0.875rem;
  color: #111827;
`;

export const ZipCode = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const DefaultBadge = styled.div`
  padding-left: 1.75rem;
  margin-top: 0.5rem;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: rgba(255, 168, 1, 0.1);
  color: #FFA801;
  border-radius: 0.25rem;
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background-color: transparent;
  color: #ef4444;
  cursor: pointer;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(239, 68, 68, 0.1);
  }
`;
