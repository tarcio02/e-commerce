import { type RootState } from '../../app/root-reducer';
import { type OrderPreviewItem } from './orderPreview.types';

export const selectOrderStatus = (state: RootState): string | null => 
  (state.orderPreview as OrderPreviewItem).status;

export const selectEnderecoId = (state: RootState): string | null => 
  (state.orderPreview as OrderPreviewItem).endereco_id;

export const selectEnderecoView = (state: RootState): string | null => 
  (state.orderPreview as OrderPreviewItem).endereco_view;

export const selectMetodoEnvio = (state: RootState): string | null => 
  (state.orderPreview as OrderPreviewItem).metodo_envio;

export const selectCarrinhoId = (state: RootState): string | null => 
  (state.orderPreview as OrderPreviewItem).carrinho_id;

export const selectIsLoading = (state: RootState): boolean => 
  (state.orderPreview as OrderPreviewItem).isLoading;



