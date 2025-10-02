import * as S from './styles'

import localizacao from '../../assets/icons/localizacao-icon.png'
import raviole from '../../assets/icons/ravioli.png'
import entregador from '../..//assets/icons/entregador-icon.png'
import { Marquee } from '../../utils/marquee'

const Hero = () => {
  const cards = [
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
    'Massas Frescas',
  ]

  return (
    <S.StylesHero>
      <S.HeroContainer>
        <S.Container>
          <S.Titulo>Massas Sabor da Feira</S.Titulo>
          <S.IconParagrafo>
            <img src={raviole} alt="Ícone de pastel" />
            <S.Paragrafo>Massas frescas para verejo e atacado.</S.Paragrafo>
          </S.IconParagrafo>
          <S.IconParagrafo>
            <img src={localizacao} alt="ìcone de ocalização" />
            <S.Paragrafo>Vitória da Conquista - BA</S.Paragrafo>
          </S.IconParagrafo>
            <S.Button to="/catalogo">
              Faça um Pedido
              <img src={entregador} alt="Ícone de entregador" />
            </S.Button>
          <Marquee speed={50}>
            {cards.map((card) => (
              <S.Card>{card}</S.Card>
            ))}
          </Marquee>
        </S.Container>
      </S.HeroContainer>
    </S.StylesHero>
  )
}

export default Hero
