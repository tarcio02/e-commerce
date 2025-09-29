import { selectCartItems, selectCartSubtotal, useAppSelector } from '../../../app/store'

import * as S from './styles'

import close from '../../../assets/icons/close.png'
import ShippingBar from '../ShippingBar'
import raviole from '../../../assets/images/ravioli.png'
import CardCarrinho from '../CardCarrinho'

type PropCarriho = {
  carrinhoAberto: boolean
  fechar: () => void
}

const Carrinho = ({ carrinhoAberto, fechar }: PropCarriho) => {
  const items = useAppSelector(selectCartItems)

  const subtotal = useAppSelector(selectCartSubtotal)

  return (
    <S.StylesCarrinho $aberto={carrinhoAberto}>
      <S.Top>
        <h3>CARRINHO</h3>
        <S.BtnFechar onClick={fechar}>
          <img src={close} alt="Ícone de fechar" />
        </S.BtnFechar>
      </S.Top>
      <S.Body>
        {items.length ? (
          items.map((item) => (
            <CardCarrinho
              key={item.id}
              id={item.id}
              image={item.image ?? raviole}
              nome={item.nome}
              preco={item.preco}
              quantidade={item.qty ?? 1}
            />
          ))
        ) : (
          <p style={{ padding: 16, opacity: 0.7 }}>Seu carrinho está vazio.</p>
        )}
      </S.Body>
      <S.Bottom>
        <S.Container>
          <ShippingBar total={Number(subtotal)} />
          <S.SubTotal>
            <h3>Subtotal:</h3>
            <h3>R$ {subtotal}</h3>
          </S.SubTotal>
        </S.Container>
        <S.Container>
          <S.BtnFinalizar>Finaliza Compra</S.BtnFinalizar>
        </S.Container>
      </S.Bottom>
    </S.StylesCarrinho>
  )
}

export default Carrinho
