import styled from "styled-components";

export const Wrapper = styled.div<{
  isOpen: boolean;
  isExiting: boolean;
  offsetPx: number;
  enterMs: number;
  exitMs: number;
}>`
  position: fixed;
  left: 50%;
  top: 0;
  z-index: 9999;

  /* Mantemos o elemento SEMPRE montado, e só movemos no eixo Y */
  transform: translate(-50%, ${({ isOpen }) => (isOpen ? 'var(--offset)' : 'calc(-100% - 24px)')});
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition:
    transform ${({ isExiting, exitMs, enterMs }) => (isExiting ? exitMs : enterMs)}ms ease,
    opacity   ${({ isExiting, exitMs, enterMs }) => (isExiting ? exitMs : enterMs)}ms ease;

  /* ajuda a não capturar cliques quando estiver fora de vista */
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

  /* offset final em px (ex.: 120px) */
  --offset: ${({ offsetPx }) => `${offsetPx}px`};

  background: #111;
  color: #fff;
  padding: 14px 18px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  min-width: 280px;
  max-width: min(92vw, 560px);
  will-change: transform, opacity;
`;

