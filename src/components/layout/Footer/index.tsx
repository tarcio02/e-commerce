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
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <S.StylesFooter>
      <S.Flex>
        <S.Links>
          <S.LinksNav to="/sobre">Sobre</S.LinksNav>
          <S.LinksNav to="/catalogo">Produtos</S.LinksNav>
          <S.LinksNav to="/receitas">Receitas</S.LinksNav>
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
            <S.Social rel="noopener noreferrer" target="_blank" href="https://wa.me/+557788451284">
              <img src={whatsapp} alt="Ícone de whatsapp" />
            </S.Social>
            <S.Social
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/massas_sabordafeiravca/"
            >
              <img src={intagram} alt="Ícone de instagram" />
            </S.Social>
            <S.Social
              rel="noopener noreferrer"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sabordafeiraoficial@gmail.com"
            >
              <img src={email} alt="Ícone de email" />
            </S.Social>
          </S.Container>
        </S.Section>
      </S.Flex>
      <S.Copy>
        <div className="top">
          <Link to="/termos-de-uso">Termos de uso</Link>
          <Link to="/politicas-de-privacidade">Políticas de privacidade</Link>
        </div>
        <div className="center">
          <p>&copy; 2025 - Massas Sabor da Feira - Todos os direitos reservados.</p>
          <p>Vitória da Conquista - BA</p>
        </div>
      </S.Copy>
    </S.StylesFooter>
  )
}

export default Footer
