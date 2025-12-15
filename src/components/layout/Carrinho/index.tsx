import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectCartId } from '../../../features/cart/cart.selectors'
import {
  setOrderCarrinhId,
  setOrderStatus,
} from '../../../features/orderPreview/orderPreview.slice'

import * as S from './styles'

import close from '../../../assets/icons/close.png'
import ShippingBar from '../ShippingBar'
import raviole from '../../../assets/images/ravioli.png'
import CardCarrinho from '../CardCarrinho'
import { formatPrice } from '../../../utils/formatPrice'
import ModalCart, { type ModalCartRef } from '../ModalCart'
import { useRef } from 'react'

// ⬇️ importe seus seletores
import {
  selectCartLineItemsForRender,
  selectCartTotals,
} from '../../../features/cart/cart.selectors' // ajuste o caminho

type PropCarriho = {
  carrinhoAberto: boolean
  fechar: () => void
}

const Carrinho = ({ carrinhoAberto, fechar }: PropCarriho) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const modalRef = useRef<ModalCartRef>(null)

  // ⬇️ Consumo dos seletores
  const itens = useAppSelector(selectCartLineItemsForRender)
  const { subtotal } = useAppSelector(selectCartTotals)
  const cartId = useAppSelector(selectCartId)

  const itemVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
    removed: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.18 } },
  }

  const handleCart = () => {
    if (!itens || itens.length === 0) {
      modalRef.current?.show({
        variant: 'warning',
        title: 'Carrinho Vazio!',
        message: 'Adicione alguns items no carrinho primeiro.',
        durationMs: 5000,
      })
      return
    }
    dispatch(setOrderCarrinhId(cartId))
    dispatch(setOrderStatus('pending'))
    navigate('/preview-pedido', {
      state: { cameFromCart: true, intended: '/addres' },
    })
    fechar()
  }

  return (
    <S.StylesCarrinho $aberto={carrinhoAberto}>
      <S.Top>
        <h3>CARRINHO</h3>
        <S.BtnFechar onClick={fechar}>
          <img src={close} alt="Ícone de fechar" />
        </S.BtnFechar>
      </S.Top>

      <S.Body>
        {itens.length ? (
          <AnimatePresence initial={false}>
            {itens.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="removed"
              >
                <CardCarrinho
                  id={item.id}
                  image={item.imagem ?? raviole}
                  nome={item.nome}
                  preco={item.preco}
                  quantidade={item.quantidade}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <p style={{ padding: 16, opacity: 0.7 }}>Seu carrinho está vazio.</p>
        )}
      </S.Body>

      <S.Bottom>
        <S.Container>
          {/* A ShippingBar espera o subtotal em string */}
          <ShippingBar total={subtotal} />
          <S.SubTotal>
            <h3>Subtotal:</h3>
            <h3>{formatPrice(subtotal)}</h3>
          </S.SubTotal>
        </S.Container>

        <S.Container>
          <S.BtnFinalizar onClick={handleCart}>Finalizar Compra</S.BtnFinalizar>
        </S.Container>
      </S.Bottom>
      <ModalCart ref={modalRef} offsetPx={120} enterMs={300} exitMs={300} />
    </S.StylesCarrinho>
  )
}

export default Carrinho
