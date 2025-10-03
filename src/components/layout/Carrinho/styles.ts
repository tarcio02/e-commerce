import styled from 'styled-components'

export const StylesCarrinho = styled.div<{ $aberto: boolean }>`
  position: fixed;
  right: 0; top: 0; bottom: 0;
  width: 360px;

  display: flex;
  flex-direction: column;

  /* altura real da viewport (melhor p/ mobile) */
  height: 100vh;
  height: 100svh;   /* browsers novos */
  height: 100dvh;   /* fallback em alguns cenários */

  background: #fff;
  box-shadow: -16px 0 48px rgba(0,0,0,.22);
  transform: translateX(${({ $aberto }) => ($aberto ? '0' : '100%')});
  transition: transform .24s ease;
  z-index: 9990;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(168, 7, 7);
  height: 60px;
  padding: 0 16px;
  color: white;
  letter-spacing: 1px;
`

export const BtnFechar = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 24px;
  }
`

export const Body = styled.div`
flex: 1 1 auto;
  min-height: 0;        /* <- ESSENCIAL em flex para scroll interno */
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 8px 12px;

  scrollbar-gutter: stable both-edges;
  &::-webkit-scrollbar { width: 8px; }
  &::-webkit-scrollbar-thumb { background: rgba(0,0,0,.24); border-radius: 99px; }
`

export const Bottom = styled.div`
  background-color: rgb(168, 7, 7);
  padding: 16px;
  bottom: 0;
  width: 100%;
  position: absolute;
  overflow-y: auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

export const BtnFinalizar = styled.div`
  text-align: center;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  background-color: #ffa801;
  font-size: 16px;
  padding: 16px;
  border-radius: 24px;
  margin-top: 24px;
`
