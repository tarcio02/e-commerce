import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { 
LayoutDashboard, 
ShoppingCart, 
ChevronLeft,
ChevronRight
} from "lucide-react";
import * as S from './styles';

const menuItems = [
{ icon: LayoutDashboard, label: "Visão Geral", href: "/" },
{ icon: ShoppingCart, label: "Pedidos e Vendas", href: "/pedidos-vendas" },
];

export function Sidebar() {
const [collapsed, setCollapsed] = useState(false);
const location = useLocation();

return (
    <S.Container $collapsed={collapsed}>
    <S.Header>
        <S.HeaderContent>
        {!collapsed && <S.Logo>Painel</S.Logo>}
        <S.ToggleButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </S.ToggleButton>
        </S.HeaderContent>
    </S.Header>

    <S.Nav>
        <S.MenuList>
        {menuItems.map((item) => (
            <S.MenuItem key={item.label}>
            <S.MenuLink as={Link} to={item.href} $active={location.pathname === item.href}>
                <item.icon size={20} />
                {!collapsed && <S.MenuLabel>{item.label}</S.MenuLabel>}
            </S.MenuLink>
            </S.MenuItem>
        ))}
        </S.MenuList>
    </S.Nav>

    <S.Footer>
        <S.UserWrapper $collapsed={collapsed}>
        <S.Avatar>E</S.Avatar>
        {!collapsed && (
            <S.UserInfo>
            <S.UserName>E-commerce</S.UserName>
            <S.UserRole>Admin</S.UserRole>
            </S.UserInfo>
        )}
        </S.UserWrapper>
    </S.Footer>
    </S.Container>
);
}
