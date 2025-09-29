import * as S from './styles'

import { Carousel } from '../../../utils/carrousel'

import raviole from '../../../assets/icons/ravioli.png'
import caminhao from '../../../assets/icons/delivery.png'
import entregador from '../../../assets/icons/delivery-man.png'

const Ofertas = () => {
  const ofertas = [
    {
      nome: 'Massas Frescas',
      icon: raviole,
    },
    {
      nome: 'Entregas em toda região',
      icon: caminhao,
    },
    {
      nome: 'Frete grátis acima de R$ 200,00',
      icon: entregador,
    },
  ]

  return (
    <S.Ofertas>
      <Carousel intervalMs={3000}>
        {ofertas.map((oferta) => (
          <S.Oferta>
            <p>{oferta.nome}</p>
            <img src={oferta.icon} alt="ícone" />
          </S.Oferta>
        ))}
      </Carousel>
    </S.Ofertas>
  )
}

export default Ofertas
