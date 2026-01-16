import styled, { css, keyframes } from 'styled-components'

const slideUp = keyframes`
from { 
    opacity: 0;
    transform: translateY(10px);
}
to { 
    opacity: 1;
    transform: translateY(0);
}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
`

export const Title = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-right: 1rem;
`

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
`

export const SummaryLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 45%);
`

export const SummaryValue = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #16a249;
`

export const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

export const MetricsGrid = styled.div`
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
`

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-bottom: 1rem;
  animation: ${slideUp} 0.7s ease-out forwards;
`

export const ActionsButtonsGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  animation: ${slideUp} 0.7s ease-out forwards;
`

export const ActionButton = styled.button<{ $variant: 'primary' | 'secondary' | 'accent' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;

  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  background-color: transparent;
  border: none;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: linear-gradient(135deg, rgba(168, 7, 7, 0.8) 0%, rgba(255, 168, 1, 0.8) 100%);
        `
      case 'secondary':
        return css`
          background-color: transparent;
          border: 1px solid #ffa801;
          color: #ffa801;
        `
      case 'accent':
        return css`
          background: linear-gradient(135deg, #a80707 0%, #c91a1a 100%);
        `
      default:
        return css`
          color: black;
          background-color: transparent;
          border: 1px solid black;
        `
    }
  }}

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ContainerGrid = styled.div`
  background-color: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  border-radius: 1rem;
  box-shadow: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  overflow: hidden;
  animation: ${slideUp} 0.6s ease-out forwards;
`

export const CampaignsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0 1rem;
  padding-bottom: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const CampaignCard = styled.div<{ $paused?: boolean }>`
  background: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 16px;
  padding: 1.25rem;
  opacity: ${({ $paused }) => ($paused ? 0.6 : 1)};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
`

export const CampaignHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const CampaignInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CampaignType = styled.span<{ $type: 'campaign' | 'offer' }>`
  font-size: 0.688rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ $type }) => ($type === 'campaign' ? '#a80707' : '#ffa801')};
  background: ${({ $type }) =>
    $type === 'campaign' ? 'rgba(168, 7, 7, 0.1)' : 'rgba(255, 168, 1, 0.1)'};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  width: fit-content;
`

export const CampaignTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-top: 0.5rem;
`

export const CampaignObjective = styled.span`
  font-size: 0.813rem;
  color: hsl(0, 0%, 45%);
`

export const CampaignActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CampaignActionBtn = styled.button<{ $variant?: 'edit' | 'pause' }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid hsl(0, 0%, 88%);
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme, $variant }) =>
    $variant === 'pause' ? '#ffa801' : theme.colors.mutedForeground};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ $variant }) => ($variant === 'pause' ? '#ffa801' : '#a80707')};
    color: ${({ $variant }) => ($variant === 'pause' ? '#ffa801' : '#a80707')};
  }
`

export const CampaignDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid hsl(0, 0%, 88%);
`

export const CampaignDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const DetailLabel = styled.span`
  font-size: 0.688rem;
  color: hsl(0, 0%, 45%);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const DetailValue = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
`

export const CampaignResults = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const ResultLabel = styled.span`
  font-size: 0.688rem;
  color: hsl(0, 0%, 45%);
`

export const ResultValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: hsl(0, 0%, 12%);
`

export const StatusBadge = styled.span<{ $active: boolean }>`
  font-size: 0.688rem;
  font-weight: 600;
  padding: 0.25rem 0.625rem;
  border-radius: 20px;
  background: ${({ $active }) => ($active ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 168, 1, 0.15)')};
  color: ${({ $active }) => ($active ? '#22C55E' : '#ffa801')};
`

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`

export const ModalContainer = styled.div`
  background: hsl(0, 0%, 100%);
  border-radius: 16px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid hsl(0, 0%, 88%);
`

export const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const ModalCloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: hsl(0, 0%, 45%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: hsl(0, 0%, 12%);
  }
`

export const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FormLabel = styled.label`
  font-size: 0.813rem;
  font-weight: 500;
  color: hsl(0, 0%, 12%);
`

export const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: hsl(0, 0%, 12%);
  font-size: 0.875rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffa801;
  }

  &::placeholder {
    color: hsl(0, 0%, 45%);
  }
`

export const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: hsl(0, 0%, 12%);
  font-size: 0.875rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffa801;
  }

  &::placeholder {
    color: hsl(0, 0%, 45%);
  }
`

export const FormSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  color: hsl(0, 0%, 12%);
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #ffa801;
  }
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`

export const RadioOption = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1px solid ${({ $selected }) => ($selected ? '#ffa801' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 8px;
  background: ${({ $selected }) => ($selected ? 'rgba(255, 168, 1, 0.1)' : 'transparent')};
  cursor: pointer;
  font-size: 0.813rem;
  color: hsl(0, 0%, 12%);
  transition: all 0.2s ease;

  input {
    display: none;
  }

  &:hover {
    border-color: #ffa801;
  }
`

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CheckboxOption = styled.label<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ $selected }) => ($selected ? '#ffa801' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 8px;
  background: ${({ $selected }) => ($selected ? 'rgba(255, 168, 1, 0.1)' : 'transparent')};
  cursor: pointer;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  transition: all 0.2s ease;

  input {
    display: none;
  }

  &:hover {
    border-color: #ffa801;
  }
`

export const CheckboxIndicator = styled.div<{ $checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${({ $checked }) => ($checked ? '#ffa801' : 'rgba(255, 255, 255, 0.3)')};
  background: ${({ $checked }) => ($checked ? '#ffa801' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s ease;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid hsl(0, 0%, 88%);
`

export const ModalCancelBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  background: transparent;
  color: hsl(0, 0%, 12%);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }
`

export const ModalSubmitBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #a80707 0%, #ffa801 100%);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(168, 7, 7, 0.4);
  }
`

export const AIBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffa801;
  background: rgba(255, 168, 1, 0.15);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-left: 0.5rem;
`
