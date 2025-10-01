import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

import * as S from './styles'

import MenuNav from '../MenuNav'
import MenuHamburguer from '../../ui/MenuHamburguer'

import carrinho from '../../../assets/icons/carrinho-icon.png'
import logo from '../../../assets/images/logo-sdf.png'
import perfil from '../../../assets/icons/perfil-icon.png'
import Ofertas from '../Ofertas'

type TypeProps = {
  menuAberto: boolean
  toogleHeader: () => void
  toggleMenu: () => void
  stateHeader: boolean
}

const Header = ({ menuAberto, toogleHeader, toggleMenu, stateHeader }: TypeProps) => {
  const location = useLocation()
  const isNotRoot = useMemo(() => location.pathname !== '/', [location.pathname])

  return (
    <S.StylesHeader>
      <Ofertas />
      <S.Container $downScroll={stateHeader} $isRoute={isNotRoot}>
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
