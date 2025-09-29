import * as S from './styles'

type CardProps = {
  id: number
  image: string
  receita: string
}

const CardReceita = ({ id, image, receita }: CardProps) => {
  return (
    <S.StylesCardReceita>
      <S.image>
        <img src={image} alt="Foto de receita" />
      </S.image>
      <S.Container>
        <S.Titulo>{receita}</S.Titulo>
        <S.Link> Veja Receita {id}</S.Link>
      </S.Container>
    </S.StylesCardReceita>
  )
}

export default CardReceita
