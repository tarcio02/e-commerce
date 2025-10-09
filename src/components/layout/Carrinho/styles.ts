import styled from 'styled-components'

export const StylesCarrinho = styled.aside<{ $aberto: boolean }>`
  position: fixed;
  inset: 0 0 0 auto;                /* cola na lateral direita */
  width: min(420px, 100vw);
  height: 100dvh;                   /* altura travada na viewport (melhor p/ mobile) */
  transform: translateX(${({ $aberto }) => ($aberto ? '0%' : '100%')});
  transition: transform .28s ease;
  background: #fff;
  z-index: 1001;
  display: flex;                    /* ⬅️ importante */
  flex-direction: column;           /* header / body / footer em coluna */
  box-shadow: -8px 0 24px rgba(0,0,0,.18);
  overflow: hidden;                 /* impede scroll no container; o Body vai rolar */
`;

export const Top = styled.header`
  flex: 0 0 auto;
  padding: 16px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.06);
  background: rgb(168, 7, 7);
  color: white;
  position: sticky; top: 0;         /* opcional: fixa o topo enquanto lista rola */
  z-index: 1;
`;

export const BtnFechar = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 24px;
  }
`

export const Body = styled.div`
  /* O segredo do scroll: */
  flex: 1 1 auto;                   /* ocupa o espaço livre */
  min-height: 0;                    /* 🔑 permite encolher para o overflow funcionar */
  overflow-y: auto;                 /* cria a barra quando necessário */
  padding: 12px 16px;               /* ajuste ao seu gosto */
  overscroll-behavior: contain;     /* evita bounce afetar o fundo */
  -webkit-overflow-scrolling: touch;
`;

export const Bottom = styled.footer`
  flex: 0 0 auto;
  padding: 12px 16px 16px;
  border-top: 1px solid rgba(0,0,0,.06);
  background: rgb(168, 7, 7);
  /* conforto em iPhone com notch: */
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
`;

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
  cursor: pointer;
`