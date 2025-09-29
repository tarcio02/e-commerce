import styled from 'styled-components'

export const Drawer = styled.div<{ $aberto: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background-color: rgb(168, 7, 7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $aberto }) => ($aberto ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1001;
`
export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  list-style: none;
  gap: 24px;
  margin-top: 30px;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    color: white;
    font-weight: bold;

    img{
      width: 28px;
    }

    &:active {
      color: gray;
    }
  }
`
export const btn = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background-color: transparent;
  border: none;
  width: 100%;
  
  img{
    width: 24px;
  }
`

