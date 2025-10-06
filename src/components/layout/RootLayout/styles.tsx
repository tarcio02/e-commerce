import styled from 'styled-components'

export const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
  z-index: 90; /* certifique-se de que Menu/Carrinho tenham z-index > 900 */
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`
