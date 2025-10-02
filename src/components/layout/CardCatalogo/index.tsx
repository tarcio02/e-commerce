import { useRef, useCallback } from 'react'
import {
  addItem as addItemAction,
  useAppDispatch,
  useAppSelector,
  selectCartItems,
} from '../../../app/store'
import { formatPrice } from '../../../utils/formatPrice'
import * as S from './styles'

import ModalCart, { type ModalCartRef } from '../ModalCart/index'

type CardProps = {
  id: string
  image: string
  nome: string
  descricao: string
  preco: number
}

const CardCatalogo = ({ id, image, nome, descricao, preco }: CardProps) => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(selectCartItems)

  // Ref para acionar o modal
  const modalRef = useRef<ModalCartRef>(null)

  // Se já existir no carrinho: apenas avisa. Se não existir: adiciona e avisa.
  const cartUi = useCallback(
    (idProcurado: string) => {
      const exists = items.some((item) => String(item.id) === String(idProcurado))

      if (exists) {
        modalRef.current?.show({
          title: 'Produto já foi adicionado',
          message: 'Este item já está no seu carrinho.',
          durationMs: 3000,
        })
        return
      }

      // Adiciona pela primeira vez
      dispatch(
        addItemAction({
          id,
          image,
          nome,
          descricao,
          preco,
          qty: 1,
        }),
      )

      modalRef.current?.show({
        title: 'Adicionado ao carrinho',
        message: 'Item incluído com sucesso.',
        durationMs: 3000,
      })
    },
    [items, dispatch, id, image, nome, descricao, preco],
  )

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

        <S.Button onClick={() => cartUi(id)}>Comprar</S.Button>
      </S.Container>

      {/* Modal deslizante para os avisos */}
      <ModalCart ref={modalRef} offsetPx={120} enterMs={300} exitMs={300} />
    </S.StylesCardCatalogo>
  )
}

export default CardCatalogo
