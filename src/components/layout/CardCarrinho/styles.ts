import styled from "styled-components";

export const StylesCardCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 16px;
  border: 1px solid white;
  background-color: #f5f6fa;
`

export const Image = styled.div<{$width: number}>`
  img{
    width: ${({ $width }) => 
    typeof $width === 'number' ? `${$width}px` : ($width ?? '32px')};
  }
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
  /* border: 1px solid red; */
  width: 70px;
`

export const Text = styled.h3`
  font-size: 15px;
`

export const Quantidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: rgb(168, 7, 7);
  color: white;
`

export const Button = styled.button<{$trash: boolean}>`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ $trash }) => $trash ? 'transparent' : '#ffa801'};
  border: none;
  cursor: pointer;

  img{
    width: ${({ $trash }) => $trash ? '26px' : '12px'};
  }
`
