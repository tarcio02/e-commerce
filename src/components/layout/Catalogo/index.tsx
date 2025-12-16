import * as S from './styles'

import CardCatalogo from '../CardCatalogo'
import type React from 'react'
import type { LucideIcon } from 'lucide-react'

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
  titulo: string
  badge: string
  icon: LucideIcon
}

const Catalogo: React.FC<ListProps> = ({ data, titulo, badge, icon: Icon }) => {
  return (
    <S.StylesCatalogo>
      <S.Badge>
        {badge}
        <Icon />{' '}
      </S.Badge>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Container>
        {data.map((item) => (
          <CardCatalogo
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
    </S.StylesCatalogo>
  )
}

export default Catalogo
