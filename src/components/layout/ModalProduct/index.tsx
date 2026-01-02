import { useCallback, useEffect, useRef } from 'react'
import * as S from './styles'
import { Minus, Plus, ShoppingCart, Truck } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../../app/store'
import type { RootState } from '../../../app/root-reducer'
import { addToCartAndSync, apllyDeltaAndSync } from '../../../features/cart/cart.thunks'
import ModalCart, { type ModalCartRef } from '../ModalCart'

type Modal = {
  id: string
  imagem: string
  nome: string
  descricao: string
  preco: number
  old_price: number
  frete_gratis: boolean
}

type PropsModal = {
  modalItem?: Modal
  show: boolean
  onClose: (id?: string) => void
}

const ModalProduct = ({ show, onClose, modalItem }: PropsModal) => {
  const dispatch = useDispatch<AppDispatch>()

  // Itens do carrinho para checar se já existe
  const items = useSelector((state: RootState) => state.cart.items)

  // Dois modais: um para sucesso e outro para "já existe"
  const addedModalRef = useRef<ModalCartRef>(null)
  const existsModalRef = useRef<ModalCartRef>(null)

  const alreadyInCart = items?.some((it: { id: string }) => it.id === modalItem?.id)
  const quantidade =
    items.find((item: { id: string | undefined }) => item.id === modalItem?.id)?.quantidade ?? 0

  const handleAddToCart = useCallback(async () => {
    if (alreadyInCart) {
      existsModalRef.current?.show({
        variant: 'warning',
        title: 'Produto já está no carrinho',
        message: 'Este item já foi adicionado anteriormente.',
        durationMs: 2500,
      })
      return
    }

    try {
      await dispatch(
        addToCartAndSync({
          id: modalItem?.id ?? '',
          nome: modalItem?.nome ?? '',
          preco: modalItem?.preco ?? 0,
          imagem: modalItem?.imagem ?? '',
          quantidade: 1, // sempre acumula +1
        }),
      )

      if (alreadyInCart) {
        existsModalRef.current?.show({
          variant: 'warning',
          title: 'Produto já foi adicionado',
          message: 'Esse produto já foi adicionado no seu carrinho',
          durationMs: 2500,
        })
      } else {
        addedModalRef.current?.show({
          variant: 'success',
          productName: modalItem?.nome,
          title: 'Adicionado ao carrinho',
          message: 'Item adicionado no carrinho.',
          durationMs: 3000,
        })
      }
    } catch (err) {
      addedModalRef.current?.show({
        variant: 'warning',
        title: 'Não foi possível adicionar',
        message: 'Tente novamente em instantes.',
        durationMs: 3000,
      })
      console.error(err)
    }
  }, [alreadyInCart, dispatch, modalItem?.id, modalItem?.imagem, modalItem?.nome, modalItem?.preco])

  const handleIncrement = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: modalItem?.id ?? '', delta: +1 }))
  }, [dispatch, modalItem?.id])

  const handleDecrement = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: modalItem?.id ?? '', delta: -1 }))
  }, [dispatch, modalItem?.id])

  function calcularDescontoPercentual(preco?: number | null, oldPrice?: number | null): number {
    if (!preco || !oldPrice || oldPrice <= 0 || preco >= oldPrice) {
      return 0
    }
    const desconto = ((oldPrice - preco) / oldPrice) * 100
    return Math.round(desconto)
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  if (!show) return null

  console.log('id modal:' + modalItem?.id)

  return (
    <S.Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.ScrollArea>
          <S.CloseButton onClick={() => onClose()}>✕</S.CloseButton>

          <S.ImageContainer>
            {modalItem?.imagem ? (
              <S.ProductImage src={modalItem.imagem} alt={modalItem.nome} />
            ) : (
              <S.NoImage>Sem imagem</S.NoImage>
            )}
          </S.ImageContainer>
          <S.Content>
            <S.Title>{modalItem?.nome}</S.Title>
            <S.Description>{modalItem?.descricao}</S.Description>
            {modalItem?.frete_gratis && (
              <S.FreteGratisBadge>
                <Truck /> Frete Grátis
              </S.FreteGratisBadge>
            )}
            <S.PriceContainer>
              <S.Price>
                <S.OldPrice>R$ {modalItem?.old_price.toFixed(2).replace('.', ',')}</S.OldPrice>
                <S.CurrentPrice>R$ {modalItem?.preco?.toFixed(2).replace('.', ',')}</S.CurrentPrice>
              </S.Price>

              <S.DiscountTag>
                -{calcularDescontoPercentual(modalItem?.preco, modalItem?.old_price)}% OFF
              </S.DiscountTag>
            </S.PriceContainer>
            {!alreadyInCart ? (
              <S.Button onClick={handleAddToCart}>
                <ShoppingCart />
                Adicionar
              </S.Button>
            ) : (
              <S.QuantityWrapper>
                <S.QuantityControl>
                  <S.QuantityButton onClick={handleDecrement} aria-label="Diminuir quantidade">
                    <Minus />
                  </S.QuantityButton>
                  <S.QuantityValue>{quantidade}</S.QuantityValue>
                  <S.QuantityButton onClick={handleIncrement} aria-label="Aumentar quantidade">
                    <Plus />
                  </S.QuantityButton>
                </S.QuantityControl>
              </S.QuantityWrapper>
            )}
          </S.Content>
        </S.ScrollArea>
      </S.ModalBox>
      <ModalCart ref={addedModalRef} offsetPx={120} enterMs={300} exitMs={300} />
      {/* Modal exclusivo para "já existe" */}
      <ModalCart ref={existsModalRef} offsetPx={170} enterMs={300} exitMs={300} />
    </S.Backdrop>
  )
}

export default ModalProduct
