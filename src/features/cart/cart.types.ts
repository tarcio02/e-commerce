// Tipagem dos dados de items do carrinho
export interface CartItem {
  id: string;   
  imagem?: string | null;
  nome: string;
  preco: number;                   
  quantidade: number;
  preco_total:number
}

// Tipo do estado do carrinho
export interface CartState {
  id_carrinho: string | null
  items: CartItem[];
}

export type RpcItem = {
  id: string;
  imagem: string | null;
  nome: string | null;
  preco: number | string | null;
  quantidade: number;
};

export type RpcCartAndItems = {
  cart_id: string;
  items: RpcItem[];
};

export  type AddToCartPayload = {
  id: string           // produto_id
  nome: string
  preco: number
  imagem?: string | null
  quantidade?: number  // default 1
}

export type ProductInput = {
  id: string;
  nome: string;
  preco: number;
  imagem?: string | null;
  quantidade?: number
};

export type AddAndSyncArgs = {
  product: ProductInput;                                
  sessionUserId?: string | null;  
};

export type UpsertArgs = {
  carrinho_id: string
  produto_id: string
  quantidade: number
}

export type AccumulateArgs = {
  carrinho_id: string
  produto_id: string
  delta: number
}