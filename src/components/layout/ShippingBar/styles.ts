import styled from "styled-components";

export const StylesShippingBar= styled.div`
  /* display: grid;
  gap: 6px; */
  width: 100%;
`

export const Track = styled.div`
  position: relative;
  width: 100%;
  height: 24px;             
  background: #ffa801;    
  border-radius: 999px;
  overflow: hidden;
`

export const Fill = styled.div<{$progressPct: number}>`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $progressPct }) => `${$progressPct}%`};
  background: #27ae60;
  transition: width 360ms ease;
  z-index: 1;
`

export const Label = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2; 
`