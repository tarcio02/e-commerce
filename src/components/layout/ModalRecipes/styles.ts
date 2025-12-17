import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow-x: auto;
`;

export const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 16px;
  max-width: 90%;
  width: 100%;
  max-height: 90vh;
  overflow: hidden; /* <- importante */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease;
  position: relative;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 601px) {
    max-width: 600px;
  }
`;

export const ScrollArea = styled.div`
  max-height: 90vh;
  overflow-y: auto;

  /* scrollbar arredondado */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
  }

  scrollbar-width: thin;              /* Firefox */
  scrollbar-color: #c1c1c1 #f1f1f1;   /* Firefox */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #ffa801;
  border: 1px solid #ffa801;
  top: 16px;
  right: 16px;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
`

export const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: #ffffff;
    transform: scale(1.1);
  }
`

export const Content = styled.div`
  padding: 24px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  line-height: 1.3;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
`

export const InfoBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #f5f5f5;
  border-radius: 24px;
  font-size: 14px;
  color: #555;

  svg {
    width: 16px;
    height: 16px;
    color: #ffa801;
  }
`

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: #ffa801;
    border-radius: 2px;
  }
`

export const PreparingList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step-counter;
`

export const PreparingItem = styled.li`
  counter-increment: step-counter;
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 15px;
  line-height: 1.6;
  color: #444;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: counter(step-counter);
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    background: #ffa801;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
  }
`