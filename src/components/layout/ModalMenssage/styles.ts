import styled from "styled-components";

export const Container = styled.div`

`

export const Header = styled.div`
  padding: 1.5rem;
  padding-bottom: 1rem;
  flex-shrink: 0;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin: 0;

  svg {
    color: hsl(40, 100%, 50%);
  }
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color:hsl(0, 0%, 45%);
  margin: 0.25rem 0 0 0;
`;

export const MessageContainer = styled.div`
  padding: 0 1.5rem 1.5rem;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`;

export const CustomerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: hsl(0, 0%, 92%);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const CustomerAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, hsl(40, 100%, 50%), hsl(0, 91%, 34%));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
`;

export const CustomerInfo = styled.div`
  flex: 1;
`;

export const CustomerName = styled.div`
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  font-size: 0.95rem;
`;

export const CustomerEmail = styled.div`
  font-size: 0.85rem;
  color:hsl(0, 0%, 45%);
`;

export const MessageBubble = styled.div`
  background: linear-gradient(135deg, hsl(40, 100%, 50%), hsl(0, 91%, 34%));
  border-radius: 1rem;
  border-bottom-right-radius: 4px;
  padding: 1rem;
  position: relative;
`;

export const MessageText = styled.p`
  color: white;
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0;
`;

export const MessageTime = styled.span`
  display: block;
  text-align: right;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid hsl(0, 0%, 88%);
  background: hsl(0, 0%, 92%)30;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  ${({ $variant}) => $variant === 'outline' ? `
    background: transparent;
    border: 1px solid hsl(0, 0%, 88%);
    color:hsl(0, 0%, 12%);

    &:hover {
      background: hsl(0, 91%, 34%);
    }
  ` : `
    background: hsl(40, 100%, 50%);
    border: none;
    color: white;

    &:hover {
      opacity: 0.9;
    }
  `}
`;