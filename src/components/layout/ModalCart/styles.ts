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

  color: #fff;
  padding: 14px 18px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  min-width: 280px;
  max-width: min(92vw, 560px);
  will-change: transform, opacity;

  &[data-variant="success"] {
    background: rgb(22, 163, 74);
    border-left: 4px solid #16a34a;
  }

  &[data-variant="warning"] {
    background: rgb(234, 179, 8);
    border-left: 4px solid #eab308;
  }

`;

