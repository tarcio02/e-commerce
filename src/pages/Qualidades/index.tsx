import * as S from './styles'

import selo from '../../assets/images/selo.avif'

const Qualidades = () => {
  return (
    <S.StylesQualidade>
      <S.Iamge>
        <img src={selo} alt="selo de satisfação" />
      </S.Iamge>
      <S.Texto>
        <S.Titulo>Qualidade do atendimento a entrega</S.Titulo>
        <S.Paragrafo>
          Massas crocantes e sequinhas, para a sua melhor experiência e satisfação. Massa fresca
          para atacado e varejo
        </S.Paragrafo>
        <S.Button to="/qualidade">Saiba mais</S.Button>
      </S.Texto>
    </S.StylesQualidade>
  )
}

export default Qualidades
