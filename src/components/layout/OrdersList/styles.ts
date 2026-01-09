import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(10px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const Container = styled.section<{ $delay?: number }>`
background-color: ${({ theme }) => theme.colors.card};
border-radius: 1rem;
box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
padding: 1.5rem;
opacity: 0;
animation: ${fadeIn} 0.5s ease-out forwards;
animation-delay: ${({ $delay }) => $delay || 0}ms;
`;

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
flex-wrap: wrap;
gap: 1rem;
`;

export const Title = styled.h2`
font-family: 'Space Grotesk', sans-serif;
font-size: 1.25rem;
font-weight: 600;
color: hsl(0, 0%, 12%);
`;

export const SummaryContainer = styled.div`
display: flex;
gap: 1.5rem;
flex-wrap: wrap;
`;

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
color: hsl(0, 0%, 12%);
`;

export const CancellationRate = styled.span<{ $high?: boolean }>`
font-family: 'Space Grotesk', sans-serif;
font-size: 1rem;
font-weight: 600;
color: hsl(142, 76%, 36%);
`;

export const TableWrapper = styled.div`
overflow-x: auto;
`;

export const Table = styled.table`
width: 100%;
border-collapse: collapse;
`;

export const TableHead = styled.thead`
background-color: hsl(0, 0%, 92%);
`;

export const TableHeadCell = styled.th`
font-family: 'Inter', sans-serif;
font-size: 0.75rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.05em;
color: hsl(0, 0%, 45%);
padding: 0.75rem 1rem;
text-align: left;
white-space: nowrap;

&:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
}

&:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
}
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr<{ $index: number }>`
border-bottom: 1px solid hsl(0, 0%, 88%);
transition: all 0.15s ease;
opacity: 0;
animation: ${fadeIn} 0.3s ease-out forwards;
animation-delay: ${({ $index }) => $index * 50}ms;

&:hover {
    background-color: hsl(0, 0%, 92%);
}

&:last-child {
    border-bottom: none;
}
`;

export const TableCell = styled.td`
font-family: 'Inter', sans-serif;
font-size: 0.875rem;
color: hsl(0, 0%, 12%);
padding: 1rem;
white-space: nowrap;
`;

export const TimeCell = styled(TableCell)`
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
`;

export const CustomerName = styled.span`
font-weight: 500;
`;

const statusStyles = {
paid: css`
    background-color: hsla(142, 76%, 36%, 0.1);
    color: hsl(142, 76%, 36%);
`,
pending: css`
    background-color: hsla(40, 100%, 50%, 0.1);
    color: hsl(40, 100%, 50%);
`,
cancelled: css`
    background-color: hsla(0, 84%, 60%, 0.1);
    color: hsl(0, 84%, 60%);
`,
shipped: css`
  background-color: rgba(13, 162, 231, 0.1);
  color:#0da2e7;
`,
delivered: css`
  background-color: hsla(142, 76%, 36%, 0.1);
  color: hsl(142, 76%, 36%);
`,
};

export const StatusBadge = styled.span<{ $status: 'paid' | 'pending' | 'cancelled' | 'shipped' | 'delivered' }>`
display: inline-flex;
align-items: center;
gap: 0.375rem;
padding: 0.375rem 0.75rem;
border-radius: 9999px;
font-family: 'Inter', sans-serif;
font-size: 0.75rem;
font-weight: 500;

${({ $status }) => statusStyles[$status]}
`;

export const StatusDot = styled.span<{ $status: 'paid' | 'pending' | 'cancelled' | 'shipped' | 'delivered' }>`
width: 6px;
height: 6px;
border-radius: 50%;
background-color: currentColor;
`;

export const ActionsContainer = styled.div`
display: flex;
gap: 0.5rem;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'success' | 'danger' | 'default' | 'disable'}>`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 0.375rem;
padding: 0.5rem 0.75rem;
border-radius: 0.5rem;
font-family: 'Inter', sans-serif;
font-size: 0.75rem;
font-weight: 500;
cursor: pointer;
transition: all 0.15s ease;
border: none;

${({ $variant }) => {
    switch ($variant) {
    case 'primary':
        return css`
        background-color: hsl(40, 100%, 50%);
        color: hsl(0, 0%, 100%);
        &:hover {
            background-color: hsla(40, 100%, 45%, 1);
        }
        `;
    case 'success':
        return css`
        background-color: hsl(142, 76%, 36%);
        color: hsl(0, 0%, 100%);
        &:hover {
            background-color: hsla(142, 76%, 30%, 1);
        }
        `;
    case 'danger':
        return css`
        background-color: hsl(0, 84%, 60%);
        color: hsl(0, 0%, 100%);
        &:hover {
            background-color: hsla(0, 84%, 50%, 1);
        }
        `;
    case 'disable':
      return css`
        background-color: hsl(0, 0%, 85%);
        color: hsl(0, 0%, 45%);
        cursor: default;
      `;
    default:
        return css`
        background-color: hsl(0, 0%, 94%);
        color: hsl(0, 0%, 12%);
        &:hover {
            background-color: hsl(0, 0%, 92%);
        }
        `;
    }
}}

&:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`;

export const DetailsButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
width: 2rem;
height: 2rem;
border-radius: 0.5rem;
background-color: hsl(0, 91%, 34%);
color: hsl(0, 0%, 100%);
border: none;
cursor: pointer;
transition: hsl(0, 0%, 100%);

&:hover {
    background-color: hsla(0, 91%, 28%, 1);
}
`;

export const EmptyState = styled.div`
text-align: center;
padding: 3rem;
color: hsl(0, 0%, 45%);
font-family: 'Inter', sans-serif;
`;
