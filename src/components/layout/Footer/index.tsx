import * as S from './styles'

import pix from '../../../assets/icons/pix-icon.png'
import visa from '../../../assets/icons/visa.-iconpng.png'
import master from '../../../assets/icons/mastercard-icon.png'
import elo from '../../../assets/icons/elo-icon.png'
import amex from '../../../assets/icons/amex-icon.png'
import hiper from '../../../assets/icons/hipercard-icon.png'
import whatsapp from '../../../assets/icons/whatsapp-icon.png'
import intagram from '../../../assets/icons/instagram-icon.png'
import email from '../../../assets/icons/email-icon.png'

const Footer = () => {
  return (
    <S.StylesFooter>
      <S.Flex>
        <S.Links>
          <a href="#">Sobre</a>
          <a href="#">Produtos</a>
          <a href="#">Receitas</a>
        </S.Links>
        <S.Section>
          <h3>Formas de Pagamento:</h3>
          <S.Container>
            <S.Bandeira>
              <img src={pix} alt="Ícone do pix" />
            </S.Bandeira>
            <S.Bandeira>
              <img src={visa} alt="Ícone da visa" />
            </S.Bandeira>
            <S.Bandeira>
              <img src={master} alt="Ícone da mastercard" />
            </S.Bandeira>
            <S.Bandeira>
              <img src={elo} alt="ícone da elo" />
            </S.Bandeira>
            <S.Bandeira>
              <img src={amex} alt="ícone da american express" />
            </S.Bandeira>
            <S.Bandeira>
              <img src={hiper} alt="ícone do hipercard" />
            </S.Bandeira>
          </S.Container>
        </S.Section>
        <S.Section>
          <h3>Nossas Redes:</h3>
          <S.Container>
            <S.Social>
              <img src={whatsapp} alt="Ícone de whatsapp" />
            </S.Social>
            <S.Social>
              <img src={intagram} alt="Ícone de instagram" />
            </S.Social>
            <S.Social>
              <img src={email} alt="Ícone de email" />
            </S.Social>
          </S.Container>
        </S.Section>
      </S.Flex>
      <S.Copy>
        <div className="top">
          <a href="#">Termos de uso</a>
          <a href="#">Políticas de privacidade</a>
        </div>
        <div className="center">
          <p>&copy; Massas Sabor da Feira - Todos os direitos reservados.</p>
          <p>Vitória da Conquista - BA</p>
        </div>
      </S.Copy>
    </S.StylesFooter>
  )
}

export default Footer
