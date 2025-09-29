// src/components/MenuHamburguer/styles.jsx (CORRIGIDO)

import styled from 'styled-components'
// 1. Importe o seu tema diretamente

export const StylesMenuHamburguer = styled.div`
  display: none;
  width: 28px;
  height: 21px; /* (3px de altura da linha * 3) + (6px de gap * 2) = 21px */
  cursor: pointer;
  transition: transform 0.3s ease;

  &.show {
    transform: translateY(0);
  }

  .linha {
    width: 100%; /* Ocupa toda a largura do contêiner */
    height: 3px;
    background: white;
    /* 2. Posicionamos as linhas absolutamente dentro do contêiner */
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
    transform-origin: center; /* Garante que a rotação seja a partir do centro */

    &:active {
      background: linear-gradient(to right, #008dfd, #e91fe9);
    }
  }

  /* 3. Posicionamos cada linha na sua posição inicial */
  .linha:nth-child(1) {
    top: 0;
  }

  .linha:nth-child(2) {
    top: 50%;
    transform: translateY(-50%); /* Centraliza a linha do meio perfeitamente */
  }

  .linha:nth-child(3) {
    bottom: 0;
  }

  /* --- ANIMAÇÃO PARA O "X" --- */

  /* Quando a classe 'ativa' é adicionada */
  & .linha.ativa:nth-child(1) {
    /* 4. Move a linha para o centro e a rotaciona */
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }

  & .linha.ativa:nth-child(2) {
    /* 5. A linha do meio simplesmente desaparece */
    opacity: 0;
  }

  & .linha.ativa:nth-child(3) {
    /* 6. Move a linha para o centro e a rotaciona na direção oposta */
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }

  @media (max-width: 768px) {
    display: block; /* Usamos 'block' em vez de 'flex' com position: relative */
  }
`
