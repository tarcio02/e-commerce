import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 92px;
`;

export const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 0 50px -12px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #A80707;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  box-shadow: 0 10px 30px -10px #A80707;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0.5rem 0 0;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    transform: translateX(4px);
  }
`;

export const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #A80707;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;

  svg {
    color: white;
    width: 20px;
    height: 20px;
  }
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const InfoLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const InfoValue = styled.span`
  display: block;
  font-size: 1rem;
  color: #1f2937;
  font-weight: 500;
`;

export const OrdersLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  background: #ffa801;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px -3px #ffa801;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px rgba(102, 126, 234, 0.5);
  }

  ${IconWrapper} {
    background: rgba(255, 255, 255, 0.2);
  }

  ${InfoLabel} {
    color: rgba(255, 255, 255, 0.8);
  }

  ${InfoValue} {
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const ArrowIcon = styled.div`
  color: white;
  opacity: 0.8;
  transition: transform 0.2s ease;

  ${OrdersLink}:hover & {
    transform: translateX(4px);
  }
`;

export const EditButton = styled.button`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem;
  background: transparent;
  border: 2px solid #A80707;
  border-radius: 12px;
  color: #A80707;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #A80707;
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px #A80707;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AddressContainer = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
`
export const TopAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AddressButton = styled(Link)`
display: flex;
align-items: center;
border-radius: 20px;
font-size: 14px;
padding: 2px 6px;
gap: 4px;
font-weight: bold;
color: #16a249;
background-color: rgba(22, 162, 73, 0.1);
border: 2px solid rgba(22, 162, 73, 0.5);
cursor: pointer;
text-decoration: none;

svg{
  width: 18px;
}
`
export const AddressTitle = styled.h2`
color: #1f2937;

`

export const AddressCount = styled.h4`
  color: #9ca3af;
`

export const Content = styled.div`
  border-radius: 0 0 0.75rem 0.75rem;
  padding: 1.5rem;
  margin-top: 1rem;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyStateIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: rgba(107, 114, 128, 0.5);
`;

export const EmptyStateText = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const AddressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Modal = styled.div<{$isOpen: boolean}>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({$isOpen}) => ($isOpen ? 'flex' :'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
`
export const ModalContainer = styled.div`
  @keyframes fadeIn {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  background: #A80707;
  width: 90%;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.2s ease;
  color: white;
  position: relative;

  @media (min-width: 601px) {
    max-width: 480px;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  color: white;
  position: absolute;
  right: 12px;
  top: 12px;

  &:hover {
    opacity: 0.6;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 24px;
`

export const LabelModal = styled.label`
  margin-bottom: 8px;
  font-size: 20px;
  color:  white;
`

export const InputModal = styled.input`
  margin-bottom: 16px;
  background: #A80707;
  border: 2px solid white;
  border-radius: 12px;
  height: 40px;
  padding: 8px;
  font-size: 18px;
  color: white ;

  &:focus {
    outline: none;
    border: 2px solid #ffa801;
  }
`

export const BtnSalvar = styled.button`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  background: #ffa801;
  border: none;
  border-radius: 12px;
  color: black;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px #ffa801;
  }
`