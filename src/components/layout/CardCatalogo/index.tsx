import { useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../../app/store'
import { type RootState } from '../../../app/root-reducer'
import { formatPrice } from '../../../utils/formatPrice'
import * as S from './styles'
import ModalCart, { type ModalCartRef } from '../ModalCart'

import { addToCartAndSync } from '../../../features/cart/cart.thunks'

type CardProps = {
  id: string
  image: string
  nome: string
  descricao: string
  preco: number
}

const CardCatalogo = ({ id, image, nome, descricao, preco }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>()

  // Itens do carrinho para checar se já existe
  const items = useSelector((state: RootState) => state.cart.items)

  // Dois modais: um para sucesso e outro para "já existe"
  const addedModalRef = useRef<ModalCartRef>(null)
  const existsModalRef = useRef<ModalCartRef>(null)

  const handleAddToCart = useCallback(async () => {
    const alreadyInCart = items?.some((it: { id: string }) => it.id === id)

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
          id,
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
  }, [dispatch, id, image, nome, preco, items])

  return (
    <S.StylesCardCatalogo>
      <S.Image>
        <img src={image} alt="Foto do produto" />
      </S.Image>

      <S.Container>
        <S.Title>
          <h3>{nome}</h3>
          <p>{descricao}</p>
        </S.Title>

        <S.preco>{formatPrice(preco)}</S.preco>

        <S.Button onClick={handleAddToCart}>Adicionar ao carrinho</S.Button>
      </S.Container>

      {/* Modal de sucesso/erro */}
      <ModalCart ref={addedModalRef} offsetPx={120} enterMs={300} exitMs={300} />

      {/* Modal exclusivo para "já existe" */}
      <ModalCart ref={existsModalRef} offsetPx={170} enterMs={300} exitMs={300} />
    </S.StylesCardCatalogo>
  )
}

export default CardCatalogo
