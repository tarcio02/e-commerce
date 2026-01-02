import * as S from './styles'

import CardCatalogo from '../CardCatalogo'
import type React from 'react'
import { ShoppingBasket, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import ModalProduct from '../ModalProduct'

export type Itens = {
  id: string
  imagem: string
  nome: string
  descricao: string
  preco: number
  old_price: number
  desconto: number
  categoria: string
  frete_gratis: boolean
  destaque: boolean
}

type ListProps = {
  data: Itens[]
  route: string
  titulo: string
  highlight: string
  badge: string
  icon: LucideIcon
}

const Catalogo: React.FC<ListProps> = ({ data, highlight, route, titulo, badge, icon: Icon }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>('')

  const ModalItem = data.find((i) => i.id === selectedProduct)

  const handleModal = (id?: string) => {
    setShowModal((prev) => !prev)
    if (id) {
      setSelectedProduct(id)
    } else {
      setSelectedProduct('')
    }
  }

  return (
    <S.StylesCatalogo>
      <S.Badge>
        {badge}
        <Icon />{' '}
      </S.Badge>
      <S.Titulo>
        {titulo}
        <S.Highlight>{highlight}</S.Highlight>
      </S.Titulo>
      <S.Container>
        {data.slice(0, 4).map((item) => (
          <CardCatalogo
            handleModal={handleModal}
            frete_gratis={item.frete_gratis}
            key={item.id}
            idItem={item.id}
            image={item.imagem}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            avaliacao={5}
            desconto={item.desconto}
            oldPrice={item.old_price}
          />
        ))}
      </S.Container>
      <S.Button to={route}>
        <ShoppingBasket />
        Ver Todas Ofertas
      </S.Button>
      <ModalProduct onClose={handleModal} show={showModal} modalItem={ModalItem} />
    </S.StylesCatalogo>
  )
}

export default Catalogo
