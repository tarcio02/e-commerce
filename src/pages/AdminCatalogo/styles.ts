import styled from 'styled-components';

export const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
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
  color: hsl(0, 0%, 45%);
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: hsl(40, 100%, 50%);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const AddButton = styled.button<{ $variant?: 'combo' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 600;
  background: ${({ $variant }) => $variant === 'combo' ? 'transparent' : 'linear-gradient(135deg, rgba(168, 7, 7, 0.8) 0%, rgba(255, 168, 1, 0.8) 100%)'};
  color: ${({ $variant }) => $variant === 'combo' ? 'hsl(40, 100%, 50%)' : 'white'};
  border: 2px solid ${({$variant}) => $variant === 'combo' ? 'hsl(40, 100%, 50%)' : ''};
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
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

// Filter Section
export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding: 0.5rem;
  background: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 88%);
  width: fit-content;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background: ${({ $active }) => $active ? 'hsl(40, 100%, 50%)' : 'transparent'};
  color: ${({ $active }) => $active ? '#000' : 'hsl(0, 0%, 45%)'};
  border: none;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ $active }) => $active ? 'hsl(40, 100%, 50%)' : 'hsl(0, 0%, 88%)'};
  }
`;

// Checkout Section
export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const CheckoutCard = styled.div`
  background: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 12px;
  padding: 1.5rem;
`;

export const CheckoutCardTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  margin-bottom: 1rem;
`;

export const ToggleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ToggleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
`;

export const Toggle = styled.button<{ $active: boolean }>`
  width: 48px;
  height: 26px;
  background: ${({ $active }) => $active ? 'hsl(40, 100%, 50%)' : 'hsl(0, 0%, 88%)'};
  border: none;
  border-radius: 13px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;
`;

export const ToggleThumb = styled.div<{ $active: boolean }>`
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $active }) => $active ? '24px' : '2px'};
  transition: left 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaymentOption = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ $active }) => $active ? 'hsl(40, 100%, 50%)15' : 'hsl(0, 0%, 97%)'};
  border: 2px solid ${({ $active }) => $active ? 'hsl(40, 100%, 50%) ': 'hsl(0, 0%, 88%)'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: ${({ $active }) => $active ? 'hsl(40, 100%, 50%)' : 'hsl(0, 0%, 45%)'};
  }
  
  span {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ $active }) => $active ? 'hsl(40, 100%, 50%) ': 'hsl(0, 0%, 45%)'};
  }
  
  &:hover {
    border-color: hsl(40, 100%, 50%);
  }
`;

// Products Section
export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
`;

export const ProductCard = styled.div<{ $isCombo?: boolean; $highlighted?: boolean }>`
  background: 0 4px 20px -2px hsla(0, 0%, 0%, 0.08);
  border: 2px solid ${({ $isCombo, $highlighted }) => 
    $highlighted ? '#FFD700' : ($isCombo ? 'hsl(40, 100%, 50%) ': 'hsl(0, 0%, 88%)')};
  border-radius: 12px;
  padding: 1.25rem;
  position: relative;
  transition: all 0.2s ease;
  
  ${({ $isCombo, theme }) => $isCombo && `
    background: linear-gradient(135deg, ${theme.colors.card} 0%, 'hsl(40, 100%, 50%)08' 100%);
  `}
  
  ${({ $highlighted }) => $highlighted && `
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  `}
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const ComboTag = styled.span`
  position: absolute;
  top: -8px;
  right: 16px;
  background: hsl(40, 100%, 50%);
  color: #000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
`;

export const HighlightTag = styled.span`
  position: absolute;
  top: -8px;
  left: 16px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #000;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  svg {
    fill: #000;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const ProductName = styled.h4`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  flex: 1;
  padding-right: 0.5rem;
`;

export const ProductActions = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const IconButton = styled.button<{ $danger?: boolean; $highlight?: boolean; $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${({ $highlight, $active }) => 
    $highlight && $active ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'hsl(0, 0%, 97%)'};
  border: 1px solid ${({ $highlight, $active }) => 
    $highlight && $active ? '#FFD700' : 'hsl(0, 0%, 88%)'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: ${({ $danger, $highlight, $active }) => {
      if ($highlight && $active) return '#000';
      if ($highlight) return '#FFD700';
      if ($danger) return 'hsl(0, 84%, 60%)';
      return 'hsl(0, 0%, 45%)';
    }};
  }
  
  &:hover {
    background: ${({ $danger, $highlight }) => {
      if ($highlight) return 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
      if ($danger) return 'hsl(0, 84%, 60%)15';
      return 'hsl(0, 0%, 88%)';
    }};
    border-color: ${({ $danger, $highlight }) => {
      if ($highlight) return '#FFD700';
      if ($danger) return 'hsl(0, 84%, 60%)';
      return 'hsl(0, 0%, 45%)';
    }};
    
    svg {
      color: ${({ $highlight }) => $highlight ? '#000' : 'inherit'};
    }
  }
`;

export const ProductDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  color: hsl(0, 0%, 45%);
  line-height: 1.4;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ComboProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1rem;
`;

export const ComboProductItem = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.6875rem;
  color: hsl(40, 100%, 50%);
  background: hsl(40, 100%, 50%);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const OriginalPrice = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 45%);
  text-decoration: line-through;
`;

export const PromotionalPrice = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(142, 76%, 36%);
`;

export const CurrentPrice = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(0, 0%, 12%);
`;

export const ProductToggles = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 0.5rem;
  border-top: 1px solid hsl(0, 0%, 88%);
  margin-top: 0.5rem;
`;

export const ToggleSwitchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  
  svg {
    color: hsl(0, 0%, 45%);
  }
`;

export const MiniToggle = styled.button<{ $active: boolean; $variant?: 'shipping' | 'highlight' }>`
  width: 32px;
  height: 18px;
  background: ${({ $active, $variant }) => {
    if (!$active) return 'hsl(0, 0%, 88%)';
    if ($variant === 'shipping') return 'hsl(142, 76%, 36%)';
    if ($variant === 'highlight') return '#FFD700';
    return 'hsl(40, 100%, 50%)';
  }};
  border: none;
  border-radius: 9px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;
`;

export const MiniToggleThumb = styled.div<{ $active: boolean }>`
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $active }) => $active ? '16px' : '2px'};
  transition: left 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ToggleSwitchLabel = styled.span<{ $active?: boolean; $variant?: 'shipping' | 'highlight' }>`
  font-family: 'Inter', sans-serif;
  font-size: 0.6875rem;
  font-weight: 500;
  color: ${({ $active, $variant }) => {
    if (!$active) return 'hsl(0, 0%, 45%)';
    if ($variant === 'shipping') return 'hsl(142, 76%, 36%)';
    if ($variant === 'highlight') return '#FFD700';
    return 'hsl(40, 100%, 50%)';
  }};
`;

// Modal Styles
export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;
  max-height: 70vh;
  overflow-y: auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const FormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  color: hsl(0, 0%, 12%);
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  background: hsl(0, 0%, 97%);
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  transition: border-color 0.2s ease;
  
  &::placeholder {
    color: hsl(0, 0%, 45%);
  }
  
  &:focus {
    outline: none;
    border-color: hsl(40, 100%, 50%);
  }
`;

export const ImageInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: hsl(0, 0%, 45%);
    flex-shrink: 0;
  }
  
  input {
    flex: 1;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 0.5rem;
  border: 1px solid hsl(0, 0%, 88%);
`;

export const FormTextarea = styled.textarea`
  padding: 0.75rem;
  background: hsl(0, 0%, 97%);
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.2s ease;
  
  &::placeholder {
    color: hsl(0, 0%, 45%);
  }
  
  &:focus {
    outline: none;
    border-color: hsl(40, 100%, 50%);
  }
`;

export const ModalToggleRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.75rem;
  background: hsl(0, 0%, 97%);
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
`;

export const ModalToggleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  svg {
    color: hsl(0, 0%, 45%);
  }
`;

export const ModalToggle = styled.button<{ $active: boolean; $variant?: 'shipping' | 'highlight' }>`
  width: 40px;
  height: 22px;
  background: ${({ $active, $variant}) => {
    if (!$active) return 'hsl(0, 0%, 88%)';
    if ($variant === 'shipping') return 'hsl(142, 76%, 36%)';
    if ($variant === 'highlight') return '#FFD700';
    return 'hsl(40, 100%, 50%)';
  }};
  border: none;
  border-radius: 11px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s ease;
`;

export const ModalToggleThumb = styled.div<{ $active: boolean }>`
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ $active }) => $active ? '20px' : '2px'};
  transition: left 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ModalToggleLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: hsl(0, 0%, 12%);
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const CancelButton = styled.button`
  padding: 0.625rem 1.25rem;
  background: transparent;
  color: hsl(0, 0%, 45%);
  border: 1px solid hsl(0, 0%, 88%);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: hsl(0, 0%, 97%);
    color: hsl(0, 0%, 12%);
  }
`;

export const SaveButton = styled.button`
  padding: 0.625rem 1.25rem;
  background: hsl(40, 100%, 50%);
  color: #000;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
`;

export const ContentModal = styled.div`
  padding: 2rem;
`

export const TitleModal = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(0, 0%, 12%);
  text-align: center;
  margin: 0 0 0.5rem 0;
`