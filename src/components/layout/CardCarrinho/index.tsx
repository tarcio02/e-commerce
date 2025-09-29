import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../../../app/store'
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

const CardCarrinho = ({ id, image, nome, preco, quantidade }: CardCarrinhoProps) => {
  const dispatch = useDispatch()

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
        <S.Button $trash={false} onClick={() => dispatch(decreaseQuantity(id))}>
          <img src={menos} alt="ìcone de menos" />
        </S.Button>
        <h3>{quantidade}</h3>
        <S.Button $trash={false} onClick={() => dispatch(increaseQuantity(id))}>
          <img src={mais} alt="ícon de mais" />
        </S.Button>
      </S.Quantidade>
      <S.Button $trash={true} onClick={() => dispatch(removeItem({ id }))}>
        <img src={lixeira} alt="ìmagem de produto" />
      </S.Button>
    </S.StylesCardCarrinho>
  )
}

export default CardCarrinho
