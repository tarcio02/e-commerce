import { type CartItem, type RpcItem } from "./cart.types";

const toNumber = (v: number | string | null | undefined, fallback = 0) =>
  typeof v === 'number' ? v : (v ? Number(v) : fallback);

export const mapRpcItemToCartItem = (i: RpcItem): CartItem => ({
  id: i.id,
  imagem: i.imagem ?? undefined,
  nome: i.nome ?? '',
  preco: toNumber(i.preco, 0),
  quantidade: toNumber(i.quantidade, 0),
  preco_total: toNumber(i.preco_total, 0),
});