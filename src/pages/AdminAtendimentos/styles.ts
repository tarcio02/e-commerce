import styled from 'styled-components';

export const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color:hsl(0, 0%, 45%);
`;

export const AIInsightSection = styled.div`
  background: hsl(0, 0%, 100%);
  border-radius: 1rem;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
`;

export const AIIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background-color: hsl(40, 100%, 50%)15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(40, 100%, 50%);
  flex-shrink: 0;
`;

export const AIInsightContent = styled.div`
  flex: 1;
`;

export const AIInsightLabel = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color:hsl(0, 0%, 45%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
`;

export const AIInsightText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: hsl(0, 0%, 12%);
  line-height: 1.6;
`;

export const AIInsightSuggestion = styled.span`
  color: hsl(40, 100%, 50%);
  font-weight: 600;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  padding: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
    transform: translateY(-2px);
  }
`;

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const StatLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color:hsl(0, 0%, 45%);
`;

export const StatPeriod = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.625rem;
  color:hsl(0, 0%, 45%);
  background-color: hsl(0, 0%, 92%);
  padding: 0.125rem 0.5rem;
  border-radius: 0.5rem;
`;

export const StatValue = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.5rem;
`;

export const StatComparison = styled.div<{ $positive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ $positive }) => $positive ? 'hsl(142, 76%, 36%)' : 'hsl(0, 84%, 60%)'};
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.25rem;
`;

export const LogsSection = styled.section`
  margin-top: 1.5rem;
`;

export const LogsSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LogsSectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
`;

export const BulkActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Checkbox = styled.div<{ $checked: boolean }>`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ $checked }) => $checked ? 'hsl(40, 100%, 50%)' : 'hsl(0, 0%, 88%)'};
  background-color: ${({ $checked }) => $checked ? 'hsl(40, 100%, 50%)' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  transition: all 0.3s ease;
`;

export const SelectAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  color:hsl(0, 0%, 45%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    color: hsl(0, 0%, 12%);
    background-color: hsl(0, 0%, 92%);
  }
`;

export const BulkSendButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
  background-color: hsl(40, 100%, 50%);
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LogCard = styled.div<{ $selected: boolean }>`
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  padding: 1.25rem;
  transition: all 0.3s ease;
  border: 2px solid ${({ $selected }) => $selected ? 'hsl(40, 100%, 50%)' : 'transparent'};

  &:hover {
    box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const CardCheckbox = styled.div<{ $checked: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ $checked }) => $checked ? 'hsl(40, 100%, 50%)' : 'hsl(0, 0%, 88%)'};
  background-color: ${({ $checked }) => $checked ? 'hsl(40, 100%, 50%)' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 0.125rem;

  &:hover {
    border-color: hsl(40, 100%, 50%);
  }
`;

export const CardCustomerInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const LogCustomerName = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.25rem;
`;

export const LogDate = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color:hsl(0, 0%, 45%);
`;

export const CardBody = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ClassificationBadge = styled.span<{ $type: string }>`
  font-family: 'Inter', sans-serif;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background-color: ${({ $type }) => {
    switch ($type) {
      case 'duvida': return 'rgba(59, 130, 246, 0.15)';
      case 'reclamacao': return 'rgba(245, 158, 11, 0.15)';
      case 'erro_pedido': return 'rgba(239, 68, 68, 0.15)';
      default: return 'rgba(107, 114, 128, 0.15)';
    }
  }};
  color: ${({ $type }) => {
    switch ($type) {
      case 'duvida': return '#3b82f6';
      case 'reclamacao': return '#f59e0b';
      case 'erro_pedido': return '#ef4444';
      default: return '#6b7280';
    }
  }};
  border: 1px solid ${({ $type }) => {
    switch ($type) {
      case 'duvida': return 'rgba(59, 130, 246, 0.3)';
      case 'reclamacao': return 'rgba(245, 158, 11, 0.3)';
      case 'erro_pedido': return 'rgba(239, 68, 68, 0.3)';
      default: return 'rgba(107, 114, 128, 0.3)';
    }
  }};
`;

export const SummaryBox = styled.div`
  background-color: hsl(0, 0%, 92%);
  border-radius: 0.75rem;
  padding: 0.75rem;
`;

export const SummaryLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.6875rem;
  font-weight: 600;
  color:hsl(0, 0%, 45%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
`;

export const SummaryText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  color: hsl(0, 0%, 12%);
  line-height: 1.5;
`;

export const ResultBox = styled.div`
  background-color: hsl(0, 0%, 92%);
  border-radius: 0.75rem;
  padding: 0.75rem;
`;

export const ResultLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.6875rem;
  font-weight: 600;
  color:hsl(0, 0%, 45%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
`;

export const ResultText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  color: hsl(0, 0%, 12%);
  line-height: 1.5;
`;

export const AISuggestionBox = styled.div`
  background: linear-gradient(135deg, hsl(40, 100%, 50%)15, hsl(40, 100%, 50%)08);
  border: 1px solid hsl(40, 100%, 50%)30;
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

export const AISuggestionIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.75rem;
  background-color: hsl(40, 100%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  flex-shrink: 0;
`;

export const AISuggestionContent = styled.div`
  flex: 1;
`;

export const AISuggestionLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.6875rem;
  font-weight: 600;
  color: hsl(40, 100%, 50%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.375rem;
`;

export const AISuggestionText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 12%);
  line-height: 1.5;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SendMessageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  background-color: hsl(40, 100%, 50%);
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 1rem;
  box-shadow: 0 8px 30px -4px hsla(0, 0%, 0%, 0.12);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 1px solid hsl(0, 0%, 88%);
`;

export const ModalTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color:hsl(0, 0%, 45%);
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: hsl(0, 0%, 12%);
  }
`;

export const ModalBody = styled.div`
  padding: 1.25rem;
`;

export const MessageLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 12%);
  margin-bottom: 0.75rem;
`;

export const MessageTextarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 0.75rem;
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 0.75rem;
  background-color: hsl(0, 0%, 45%);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  resize: vertical;

  &:focus {
    outline: none;
    border-color: hsl(40, 100%, 50%);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem;
  border-top: 1px solid hsl(0, 0%, 88%);
`;

export const CancelButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color:hsl(0, 0%, 45%);
  background-color: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid hsl(0, 0%, 88%);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: hsl(0, 0%, 92%);
  }
`;

export const ConfirmButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  background-color: hsl(40, 100%, 50%);
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const ShowMoreButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(40, 100%, 50%);
  background-color: transparent;
  border: 1px dashed hsl(0, 0%, 88%);
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: hsl(0, 0%, 92%);
    border-color: hsl(40, 100%, 50%);
  }
`;