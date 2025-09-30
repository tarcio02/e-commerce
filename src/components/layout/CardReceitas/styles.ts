import styled from 'styled-components'

export const StylesCardReceita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-size: 16px;
  background-color: #f7f1e3;
  border: 1px solid #f7f1e3;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
`

export const image = styled.div`
  height: 200px;
  width: 100%;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  letter-spacing: 1px;
`

export const Link = styled.a`
  font-size: 14px;
  letter-spacing: 1px;
  color: black;
`
