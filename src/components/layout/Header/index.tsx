import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import * as S from './styles'
import MenuNav from '../MenuNav'
import MenuHamburguer from '../../ui/MenuHamburguer'
import logo from '../../../assets/images/logo-sdf.svg'
import Ofertas from '../Ofertas'
import {
  House,
  NotebookText,
  PackageSearch,
  ShoppingBasket,
  ShoppingCart,
  User,
} from 'lucide-react'
import { selectCartItems } from '../../../features/cart/cart.selectors'
import { useAppSelector } from '../../../app/hooks'

type TypeProps = {
  menuAberto: boolean
  toogleHeader: () => void
  toggleMenu: () => void
  stateHeader: boolean
}

const Header = ({ menuAberto, toogleHeader, toggleMenu, stateHeader }: TypeProps) => {
  const location = useLocation()
  const isNotRoot = useMemo(() => location.pathname !== '/', [location.pathname])
  const qntItems = useAppSelector(selectCartItems).reduce((acc, item) => {
    return acc + item.quantidade
  }, 0)

  const navLeft = [
    {
      name: 'Home',
      icon: <House />,
      route: '/',
    },
    {
      name: 'Meus Pedidos',
      icon: <PackageSearch />,
      route: '/checkout/history',
    },
  ]

  const navRight = [
    {
      name: 'Produtos',
      icon: <ShoppingBasket />,
      route: '/catalogo',
    },
    {
      name: 'Receitas',
      icon: <NotebookText />,
      route: '/receitas',
    },
  ]

  return (
    <S.StylesHeader>
      <Ofertas />
      <S.Container $downScroll={stateHeader} $isRoute={isNotRoot}>
        <MenuNav links={navLeft} />
        <MenuHamburguer menuAberto={menuAberto} toggleMenu={toggleMenu} />
        <S.Logo to="/">
          <img src={logo} alt="Logo sabor da feira" />
        </S.Logo>
        <S.Icons>
          <MenuNav links={navRight} />
          <S.NavButton>
            <User />
          </S.NavButton>
          <S.NavButton onClick={toogleHeader}>
            {qntItems == 0 ? '' : <S.Notification>{qntItems}</S.Notification>}
            <ShoppingCart />
          </S.NavButton>
        </S.Icons>
      </S.Container>
    </S.StylesHeader>
  )
}

export default Header
