import { useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../../app/store'
import { type RootState } from '../../../app/root-reducer'
import { formatPrice } from '../../../utils/formatPrice'
import * as S from './styles'
import ModalCart, { type ModalCartRef } from '../ModalCart'
import { addToCartAndSync, apllyDeltaAndSync } from '../../../features/cart/cart.thunks'
import { Minus, Plus, ShoppingCart, Star, Truck } from 'lucide-react'

type CardProps = {
  idItem: string //
  image: string //
  nome: string //
  descricao?: string //
  preco: number //
  oldPrice?: number //
  avaliacao: number
  desconto?: number //
}

const CardCatalogo = ({
  idItem,
  image,
  nome,
  descricao,
  preco,
  oldPrice,
  avaliacao,
}: CardProps) => {
  const dispatch = useDispatch<AppDispatch>()

  // Itens do carrinho para checar se já existe
  const items = useSelector((state: RootState) => state.cart.items)

  // Dois modais: um para sucesso e outro para "já existe"
  const addedModalRef = useRef<ModalCartRef>(null)
  const existsModalRef = useRef<ModalCartRef>(null)

  const alreadyInCart = items?.some((it: { id: string }) => it.id === idItem)
  const quantidade = items.find((item) => item.id === idItem)?.quantidade ?? 0

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
          id: idItem,
          nome,
          preco,
          imagem: image,
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
          productName: nome,
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
  }, [alreadyInCart, dispatch, idItem, nome, preco, image])

  const handleIncrement = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: idItem, delta: +1 }))
  }, [dispatch, idItem])

  const handleDecrement = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: idItem, delta: -1 }))
  }, [dispatch, idItem])

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        fill={index < Math.floor(avaliacao) ? '#ffa801' : 'none'}
        stroke={index < Math.floor(avaliacao) ? '#ffa801' : '#ddd'}
      />
    ))
  }

  function calcularDescontoPercentual(preco?: number | null, oldPrice?: number | null): number {
    if (!preco || !oldPrice || oldPrice <= 0 || preco >= oldPrice) {
      return 0
    }

    const desconto = ((oldPrice - preco) / oldPrice) * 100

    return Math.round(desconto)
  }

  return (
    <S.CardContainer>
      <S.ImageWrapper>
        <S.ProductImage src={image} alt={nome} />
        {oldPrice !== 0 ? (
          <S.Badge>{`-${calcularDescontoPercentual(preco, oldPrice)}% OFF`}</S.Badge>
        ) : (
          <S.Badge>
            <Truck size={18} />
          </S.Badge>
        )}
        {/* <FavoriteButton
          onClick={handleFavorite}
          className={isFavorite ? 'active' : ''}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart fill={isFavorite ? '#A80707' : 'none'} />
        </FavoriteButton> */}
      </S.ImageWrapper>
      <S.CardContent>
        <S.Text>
          {/* {category && <Category>{category}</Category>} */}
          <S.ProductName>{nome}</S.ProductName>
          {descricao && <S.Description>{descricao}</S.Description>}

          {avaliacao > 0 && <S.RatingWrapper>{renderStars()}</S.RatingWrapper>}
        </S.Text>

        <S.Values>
          <S.PriceWrapper>
            {oldPrice !== 0 ? (
              <S.OldPrice>{formatPrice(oldPrice ?? 0)}</S.OldPrice>
            ) : (
              <S.Frete>Frete Grátis</S.Frete>
            )}
            <S.Price>{formatPrice(preco)}</S.Price>
          </S.PriceWrapper>

          {!alreadyInCart ? (
            <S.AddToCartButton onClick={handleAddToCart}>
              <ShoppingCart />
              Adicionar
            </S.AddToCartButton>
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
        </S.Values>
      </S.CardContent>
      {/* Modal de sucesso/erro */}
      <ModalCart ref={addedModalRef} offsetPx={120} enterMs={300} exitMs={300} />
      {/* Modal exclusivo para "já existe" */}
      <ModalCart ref={existsModalRef} offsetPx={170} enterMs={300} exitMs={300} />
    </S.CardContainer>
  )
}

export default CardCatalogo
