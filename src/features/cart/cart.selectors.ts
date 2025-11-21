import { createSelector } from '@reduxjs/toolkit';
import { type CartState } from './cart.types';
import { type RootState } from '../../app/root-reducer';

// Se já existir em outro lugar, remova esta interface e reutilize a sua
export interface CartItem {
  id: string;
  imagem?: string | null;   // no estado pode vir null
  nome: string;
  preco: number;
  quantidade: number;
  preco_total: number;
}

// Linha pronta para renderizar: imagem normalizada para `undefined`
export type CartLineItem = {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
  preco_total: number;
  imagem?: string; // <- espera undefined (não null)
};

/** Utilitário seguro */
const toFiniteNumber = (value: unknown): number =>
  typeof value === 'number' && Number.isFinite(value) ? value : 0;

/** Usa preco_total válido; senão, calcula preco * quantidade */
const computePrecoTotal = (item: CartItem): number => {
  const precoTotal = toFiniteNumber(item.preco_total);
  if (precoTotal > 0) return precoTotal;
  return toFiniteNumber(item.preco) * toFiniteNumber(item.quantidade);
};

/* ===========================
 * Seletores básicos existentes
 * =========================== */

// Retorna o id do carrinho
export const selectCartId = (state: RootState): string | null =>
  (state.cart as CartState).id_carrinho;

// Retorna os items do carrinho (do slice)
export const selectCartItems = (state: RootState): CartItem[] =>
  (state.cart as CartState).items;

/** Subtotal simples antigo (soma de preços unitários) — mantenho por compatibilidade */
export const selectCartSubtotal = (state: RootState): number =>
  (state.cart as CartState).items.reduce(
    (acc, it) => acc + toFiniteNumber(it.preco),
    0
  );


// Sem fallback para CartState (evita erro do id_carrinho ausente)
export const selectCartState = (state: RootState): CartState =>
  (state.cart as CartState);

// Fallback somente no array (seguro e idiomático)
export const selectCartItemsSafe = createSelector(
  [(state: RootState) => (state.cart as CartState)?.items],
  (items): CartItem[] => items ?? []
);

// Linha pronta para renderização (com imagem -> undefined)
export const selectCartLineItemsForRender = createSelector(
  [selectCartItemsSafe],
  (items): CartLineItem[] =>
    items.map((item) => ({
      id: item.id,
      nome: item.nome,
      quantidade: toFiniteNumber(item.quantidade),
      preco: toFiniteNumber(item.preco),
      preco_total: computePrecoTotal(item),
      imagem: item.imagem ?? undefined, // <= normaliza null -> undefined
    }))
);

// Totais do carrinho
export interface CartTotals {
  subtotal: number;
  totalQuantidade: number;
  itensUnicos: number;
}

export const selectCartTotals = createSelector(
  [selectCartItemsSafe],
  (items): CartTotals => {
    let subtotal = 0;
    let totalQuantidade = 0;

    for (const it of items) {
      subtotal += computePrecoTotal(it);
      totalQuantidade += toFiniteNumber(it.quantidade);
    }

    return {
      subtotal,
      totalQuantidade,
      itensUnicos: items.length,
    };
  }
);

// Subtotal correto (derivado do totals)
export const selectCartSubtotalCorrect = createSelector(
  [selectCartTotals],
  (t): number => t.subtotal
);

// Fábrica de seletor para pegar um item pelo ID
export const makeSelectCartItemById = (id: string) =>
  createSelector(
    [selectCartItemsSafe],
    (items): CartItem | undefined => items.find((i) => i.id === id)
  );
