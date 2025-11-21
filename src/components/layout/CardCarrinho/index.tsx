// CardCarrinho.tsx
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from '../../../app/store'
import { apllyDeltaAndSync } from '../../../features/cart/cart.thunks'
import * as S from './styles'
import lixeira from '../../../assets/icons/lixeira-icon.png'
import mais from '../../../assets/icons/mais.png'
import menos from '../../../assets/icons/menos.png'
import { formatPrice } from '../../../utils/formatPrice'

type CardCarrinhoProps = {
  id: string
  image: string
  nome: string
  preco: number
  quantidade: number
}

export default function CardCarrinho({ id, image, nome, preco, quantidade }: CardCarrinhoProps) {
  const dispatch = useDispatch<AppDispatch>()

  const handleIncrement = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: id, delta: +1 }))
  }, [dispatch, id])

  const handleDecrement = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: id, delta: -1 }))
  }, [dispatch, id])

  const handleRemove = useCallback(() => {
    dispatch(apllyDeltaAndSync({ productId: id, delta: -quantidade }))
  }, [dispatch, id, quantidade])

  return (
    <S.StylesCardCarrinho>
      <S.Image $width={56}>
        <img src={image} alt="ìmagem de produto" />
      </S.Image>

      <S.Container>
        <S.Text>{nome}</S.Text>
        <S.Text>{formatPrice(preco)}</S.Text>
      </S.Container>

      <S.Quantidade>
        <S.Button
          $decrement={quantidade > 1}
          onClick={handleDecrement}
          disabled={quantidade <= 0}
          aria-label="Diminuir quantidade"
        >
          <img src={menos} alt="ìcone de menos" />
        </S.Button>

        <h3>{quantidade}</h3>

        <S.Button $decrement={true} onClick={handleIncrement} aria-label="Aumentar quantidade">
          <img src={mais} alt="ícon de mais" />
        </S.Button>
      </S.Quantidade>

      <S.RemoveItem onClick={handleRemove} role="button" aria-label="Remover item">
        <img src={lixeira} alt="Excluir item" />
      </S.RemoveItem>
    </S.StylesCardCarrinho>
  )
}
