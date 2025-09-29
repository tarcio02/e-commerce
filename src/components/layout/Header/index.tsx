import * as S from './styles'

import MenuNav from '../MenuNav'
import MenuHamburguer from '../../ui/MenuHamburguer'

import carrinho from '../../../assets/icons/carrinho-icon.png'
import logo from '../../../assets/images/logo-sdf.png'
import perfil from '../../../assets/icons/perfil-icon.png'

type TypeProps = {
  menuAberto: boolean
  toogleHeader: () => void
  toggleMenu: () => void
  downScroll: boolean
}

const Header = ({ menuAberto, toogleHeader, toggleMenu, downScroll }: TypeProps) => {
  return (
    <S.StylesHeader>
      <S.Container $downScroll={downScroll}>
        <MenuNav />
        <MenuHamburguer menuAberto={menuAberto} toggleMenu={toggleMenu} />
        <S.Logo>
          <img src={logo} alt="Logo sabor da feira" />
        </S.Logo>
        <S.Icons>
          <S.BtnPerfil>
            <img src={perfil} alt="ìcone de perfil" />
          </S.BtnPerfil>
          <S.BtnCarrinho onClick={toogleHeader}>
            <img src={carrinho} alt="ícone de carrinho de compras" />
          </S.BtnCarrinho>
        </S.Icons>
      </S.Container>
    </S.StylesHeader>
  )
}

export default Header
