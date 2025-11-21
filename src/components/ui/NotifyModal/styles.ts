import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
const slideUp = keyframes`
  from { 
    transform: translate(-50%, -16px); 
    opacity: 0; 
  } 
  to { 
    transform: translate(-50%, 0); 
    opacity: 1; 
  }
` 

export const Backdrop = styled.div`
  position: fixed; 
  inset: 0;
  background: rgba(0,0,0,.4);
  animation: ${fadeIn} ease-out; 
`

export const Wrapper = styled.section`
  position: fixed;
  left: 50%;
  top: 80px; 
  transform: translate(-50%, 0); 
  width: min(92vw, 560px);
  background: var(--background, #fff);
  color: var(--foreground, #111);
  border: 1px solid var(--border, #e5e7eb);
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0,0,0,.12);
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  padding: 16px 16px 12px;
  animation: ${slideUp} .6s ease-out;
  z-index: 9999;

  &[data-variant='destructive'],
  &[data-variant='error'] {
    border-color: #fecaca;
    background: #fff1f2;
    color: #7f1d1d;
  }

  &[data-variant='success'] {
    border-color: #bbf7d0;
    background: #f0fdf4;
    color: #065f46;
  }

  &[data-variant='warning'] {
    border-color: #fde68a;
    background: #fffbeb;
    color: #92400e;
  }

  &[data-variant='info'] {
    /* já usa cores padrão */
  }
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 24px 1fr auto;
  align-items: center;
  gap: 10px;
`

export const IconWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-variant='error'],
  &[data-variant='destructive'] {
    color: #dc2626;
  }
  &[data-variant='success'] { color: #16a34a; }
  &[data-variant='warning'] { color: #d97706; }
  &[data-variant='info'] { color: #0ea5e9; }
`

export const Title = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
`

export const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: inherit;
  opacity: .6;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity .15s ease, background .15s ease;

  &:hover { opacity: 1; background: rgba(0,0,0,.05); }
`

export const Body = styled.div`
  margin-top: 4px;
`

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.45;
`

export const ErrorList = styled.ul`
  margin-top: 8px;
  padding-left: 18px;

  & > li {
    list-style: disc;
    font-size: 0.9rem;
    line-height: 1.35;
  }
`

export const Actions = styled.footer`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  & > button {
    height: 36px;
    padding: 0 14px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    border: 1px solid var(--border, #e5e7eb);
    background: var(--accent, #f9fafb);
    color: var(--foreground, #111);
    cursor: pointer;
    transition: background .15s ease, border-color .15s ease;

    &:hover {
      background: #eef2f7;
      border-color: #d1d5db;
    }
  }
`
