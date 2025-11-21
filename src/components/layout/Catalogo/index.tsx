import * as S from './styles'

import CardCatalogo from '../CardCatalogo'
import type React from 'react'

export type Itens = {
  id: string
  imagem: string
  nome: string
  descricao: string
  preco: number
}

type ListProps = {
  data: Itens[]
  titulo: string
}

const Catalogo: React.FC<ListProps> = ({ data, titulo }) => {
  return (
    <S.StylesCatalogo>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Container>
        {data.map((item) => (
          <CardCatalogo
            key={item.id}
            id={item.id}
            image={item.imagem}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
          />
        ))}
      </S.Container>
    </S.StylesCatalogo>
  )
}

export default Catalogo
