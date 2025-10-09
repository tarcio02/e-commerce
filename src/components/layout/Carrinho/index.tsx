import { selectCartItems, selectCartSubtotal, useAppSelector } from '../../../app/store'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import close from '../../../assets/icons/close.png'
import ShippingBar from '../ShippingBar'
import raviole from '../../../assets/images/ravioli.png'
import CardCarrinho from '../CardCarrinho'
import { formatPrice } from '../../../utils/formatPrice'

type PropCarriho = {
  carrinhoAberto: boolean
  fechar: () => void
}

const Carrinho = ({ carrinhoAberto, fechar }: PropCarriho) => {
  const navigate = useNavigate()
  const items = useAppSelector(selectCartItems)

  const subtotal = useAppSelector(selectCartSubtotal)

  const itemVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
    removed: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.18 } },
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
        {items.length ? (
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.div
                key={item.id} // importante pra animar remover
                layout // anima reflow dos cards quando lista muda
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="removed"
              >
                <CardCarrinho
                  id={item.id}
                  image={item.image ?? raviole}
                  nome={item.nome}
                  preco={item.preco}
                  quantidade={item.qty ?? 1}
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
          <ShippingBar total={subtotal} />
          <S.SubTotal>
            <h3>Subtotal:</h3>
            <h3>{formatPrice(subtotal)}</h3>
          </S.SubTotal>
        </S.Container>
        <S.Container>
          <S.BtnFinalizar
            onClick={() => {
              navigate('/addres', {
                state: {
                  cameFromCart: true,
                  intended: '/addres',
                },
              })
              fechar()
            }}
          >
            Finaliza Compra
          </S.BtnFinalizar>
        </S.Container>
      </S.Bottom>
    </S.StylesCarrinho>
  )
}

export default Carrinho
