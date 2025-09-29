import * as S from './styes'

import CardReceita from '../../components/layout/CardReceitas'

type Itens = {
  id: number
  imagem: string
  receita: string
}

type ListProps = {
  data: Itens[]
  titulo: string
}

const Receitas: React.FC<ListProps> = ({ data, titulo }) => {
  return (
    <S.StylesReceitas>
      <S.Titulo>{titulo}:</S.Titulo>
      <S.Container>
        {data.map((item) => (
          <CardReceita id={item.id} image={item.imagem} receita={item.receita} />
        ))}
      </S.Container>
    </S.StylesReceitas>
  )
}

export default Receitas
