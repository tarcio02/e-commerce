import styled from 'styled-components'

export const StylesCarrinho = styled.div<{ $aberto: boolean }>`
  // Propiedades para definir o efeito do elemento aparecer e sumir da tela
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $aberto }) => ($aberto ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1009;
  background-color: white;
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
  background-color: white;
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
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
