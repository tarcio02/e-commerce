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
`;

export const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 16px;
  max-width: 90%;
  width: 100%;
  max-height: 95vh;
  overflow: hidden; /* <- importante */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease;
  position: relative;
  overflow-y: auto;

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

export const Close = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 28px;
  height: 28px;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  color: hsl(0, 0%, 45%);
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`