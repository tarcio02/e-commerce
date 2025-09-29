// CardCatalogo.tsx
import * as S from './styles'
import { addItem as addItemAction, useAppDispatch } from '../../../app/store'
import { formatPrice } from '../../../utils/formatPrice'

type CardProps = {
  id: string
  image: string
  nome: string
  descricao: string
  preco: number
}

const CardCatalogo = ({ id, image, nome, descricao, preco }: CardProps) => {
  const dispatch = useAppDispatch()

  const handleItem = () => {
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
  }

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
        <S.Button onClick={handleItem}>Comprar</S.Button>
      </S.Container>
    </S.StylesCardCatalogo>
  )
}

export default CardCatalogo
