import styled from 'styled-components'

export const StylesCardCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 16px;
  border: 3px solid white;
  background-color: #f5f6fa;
`
export const Image = styled.div<{ $width: number }>`
  img {
    width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : ($width ?? '32px'))};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
  width: 70px;
`

export const Text = styled.h3`
  font-size: 15px;
`

export const Quantidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: rgb(168, 7, 7);
  color: white;
  width: 120px;
  height: 40px;
`

export const Button = styled.button<{ $decrement: boolean }>`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({$decrement}) => ($decrement ? '#ffa801' : 'rgba(255, 168, 1, 0.6)')};
  border: none;
  cursor: pointer;

  img {
    width: 12px;
  }
`
export const RemoveItem = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  img {
    width: 26px;
  }
`