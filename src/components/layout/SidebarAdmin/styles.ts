    import styled from 'styled-components';

    export const Container = styled.aside<{ $collapsed: boolean }>`
    height: 100vh;
    background-color: #a80707;
    color: white;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    position: sticky;
    top: 0;
    width: ${({ $collapsed }) => ($collapsed ? '5rem' : '16rem')};
    `;

    export const Header = styled.div`
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
    `;

    export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

    export const Logo = styled.span`
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.sidebarForeground};
    `;

    export const ToggleButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.75rem;
    transition: all 0.15s ease;
    margin-left: auto;

    &:hover {
        background-color: ${({ theme }) => theme.colors.sidebarAccent};
    }
    `;

    export const Nav = styled.nav`
    flex: 1;
    padding: 0.75rem;
    `;

    export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    `;

    export const MenuItem = styled.li``;

    export const MenuLink = styled.a<{ $active: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    transition: all 0.3s ease;

    ${({ $active, theme }) =>
        $active
        ? `
            background-color: ${theme.colors.sidebarPrimary};
            color: ${theme.colors.sidebarPrimaryForeground};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `
        : `
            color: ${theme.colors.sidebarForeground}cc;
            
            &:hover {
            background-color: ${theme.colors.sidebarAccent};
            color: ${theme.colors.sidebarForeground};
            }
        `}
    `;

    export const MenuLabel = styled.span`
    font-weight: 500;
    `;

    export const Footer = styled.div`
    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.sidebarBorder};
    `;

    export const UserWrapper = styled.div<{ $collapsed: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    ${({ $collapsed }) => $collapsed && 'justify-content: center;'}
    `;

    export const Avatar = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.sidebarPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.sidebarPrimaryForeground};
    font-weight: 700;
    `;

    export const UserInfo = styled.div``;

    export const UserName = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    `;

    export const UserRole = styled.p`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.sidebarForeground}99;
    `;
