import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  padding:  2rem;
`;

export const IconWrapper = styled.div<{$isShipped: boolean}>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({$isShipped}) => $isShipped ? 'hsl(40, 100%, 50%)': '#ef444420'  };
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  svg {
    color: ${({$isShipped}) => $isShipped ? 'hsl(0, 0%, 100%)' : '#ef4444' };
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  text-align: center;
  margin: 0 0 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: hsl(0, 0%, 45%);
  text-align: center;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
`;

export const CustomerName = styled.strong`
  color: hsl(0, 0%, 12%);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

export const Button = styled.button<{$variant?: 'shipped' | 'canceled' | ''}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 100px;
  color: rgba(0, 0, 0, 0.4);
  border: 2px solid  rgba(0, 0, 0, 0.3);
  background-color: transparent;

  ${({$variant}) => {
    switch($variant) {
    case 'shipped':
      return css`
        background: hsl(40, 100%, 50%);
        color: hsl(0, 0%, 100%);
        border: none;
      `;
    case 'canceled' :
      return css`
        background: #ef4444;
        border: none;
        color: white;
    `}
  }}

    &:hover {
    opacity: 0.7;
  }
`;
