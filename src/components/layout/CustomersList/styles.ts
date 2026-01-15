import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
from { 
    opacity: 0;
    transform: translateY(10px);
}
to { 
    opacity: 1;
    transform: translateY(0);
}
`;

export const Container = styled.div`
  background-color: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  border-radius: 1rem;
  box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  overflow: hidden;
  animation: ${slideUp} 0.6s ease-out forwards;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid hsl(0, 0%, 88%);
`;

export const Title = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-right: 1rem;
`;

export const ContainerHeader = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 8px;
`


export const SummaryItem = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;


export const SummaryLabel = styled.span`
font-family: 'Inter', sans-serif;
font-size: 0.875rem;
color: hsl(0, 0%, 45%);
`;

export const SummaryValue = styled.span`
font-family: 'Space Grotesk', sans-serif;
font-size: 1rem;
font-weight: 600;
color: #16a249;
`;


export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  background-color: hsl(0, 0%, 97%);
  width: 250px;
  transition: all 0.15s ease;

  &::placeholder {
    color: hsl(0, 0%, 45%);
  }

  &:focus {
    outline: none;
    border-color: hsl(40, 100%, 50%);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-top: 1px solid hsl(0, 0%, 88%)
`;

export const LoadMoreButton = styled.button`
  padding: 0.625rem 1.5rem;
  background-color: hsl(40, 100%, 50%);
  color: hsl(0, 0%, 100%);
  border: none;
  border-radius: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: hsl(0, 0%, 92%);
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid hsl(0, 0%, 88%);
  transition: all 0.15s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: hsl(0, 0%, 92%);
    cursor: pointer;
  }
`;

export const TableHeader = styled.th`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: hsl(0, 0%, 45%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.75rem 1rem;
  text-align: left;
`;

export const TableCell = styled.td`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  padding: 1rem;
`;

export const CustomerName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: hsl(40, 100%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  font-weight: 600;
  font-size: 0.75rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const Name = styled.span`
  font-weight: 500;
`;

export const NumericValue = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
`;

export const StatusBadge = styled.span<{ $status: 'ativo' | 'inativo' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ $status}) => {
    switch ($status) {
      case 'ativo':
        return `
          background-color: hsl(142, 76%, 36%)15;
          color: success;
        `;
      case 'inativo':
        return `
          background-color: hsl(0, 0%, 45%)15;
          color: hsl(0, 0%, 45%);
        `;
    }
  }}
`;