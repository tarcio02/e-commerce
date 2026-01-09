import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  LayoutDashboard,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Megaphone,
  Store,
  Users,
  Settings,
} from 'lucide-react'
import * as S from './styles'

const menuItems = [
  { icon: LayoutDashboard, label: 'Visão Geral', href: '/admin' },
  { icon: ShoppingCart, label: 'Pedidos e Vendas', href: '/admin/pedidos-vendas' },
  { icon: Users, label: 'Clientes', href: '/clientes' },
  { icon: MessageSquare, label: 'Atendimentos IA', href: '/atendimentos' },
  { icon: Store, label: 'Catálogo e Checkout', href: '/catalogo' },
  { icon: Megaphone, label: 'Marketing', href: '/marketing' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <S.Container $collapsed={collapsed}>
      <S.Header>
        <S.HeaderContent>
          <S.UserInfo $collapsed={collapsed}>
            <S.Avatar $collapsed={collapsed}>SE</S.Avatar>
            <S.UserText $collapsed={collapsed}>
              <S.Logo>Sua Empresa</S.Logo>
              <S.UserRole>Painel Admin</S.UserRole>
            </S.UserText>
          </S.UserInfo>

          <S.ToggleButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </S.ToggleButton>
        </S.HeaderContent>
      </S.Header>

      {/* <S.Nav> */}
      <S.MenuList>
        {menuItems.map((item) => (
          <S.MenuItem key={item.label}>
            <S.MenuLink
              as={Link}
              to={item.href}
              $active={location.pathname === item.href}
              $collapsed={collapsed}
            >
              <S.IconWrapper>
                <item.icon size={20} />
              </S.IconWrapper>
              <S.MenuLabel $collapsed={collapsed}>{item.label}</S.MenuLabel>
            </S.MenuLink>
          </S.MenuItem>
        ))}
      </S.MenuList>
      {/* </S.Nav> */}

      <S.Footer>
        <S.MenuLink
          as={Link}
          to="/admin/configuracoes"
          $active={location.pathname === '/admin/configuracoes'}
          $collapsed={collapsed}
        >
          <S.IconWrapper>
            <Settings size={20} />
          </S.IconWrapper>
          <S.MenuLabel $collapsed={collapsed}>Configurações</S.MenuLabel>
        </S.MenuLink>
      </S.Footer>
    </S.Container>
  )
}
