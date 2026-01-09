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
    font-family: sans-serif;
    `;

    export const Header = styled.div`
    height: 72px;               /* ajuste: 64/72/80 */
    padding: 0 1rem;            /* padding só horizontal */
    box-sizing: border-box;
    border-bottom: 1px solid hsl(0, 91%, 28%);
    display: flex;
    align-items: center;
`;;

    export const HeaderContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;


    export const Logo = styled.span`
    font-weight: 700;
    font-size: 1.1rem;
    color: hsl(0, 0%, 100%);
    white-space: nowrap;
    `;

    export const ToggleButton = styled.button`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 0.75rem;
    transition: background-color 0.15s ease;
    background-color: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    svg { color: white; }

    &:hover {
      background-color: hsl(0, 91%, 28%);
    }
`;


    export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
    padding: 0.75rem;
    `;

    export const MenuItem = styled.li`
    `;

    export const MenuLink = styled.a<{ $active: boolean; $collapsed: boolean }>`
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: 0.75rem;
      text-decoration: none;
      color: white;
      font-size: 1rem;

      height: 48px;          
      box-sizing: border-box;
      overflow: hidden;      

    svg {
      width: 20px;
    }

    ${({ $active }) =>
        $active
        ? `
            background-color: hsl(40, 100%, 50%);
            color: hsl(0, 0%, 100%);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `
        : `
            color: hsl(0, 0%, 100%)cc;
            
            &:hover {
            background-color: hsl(0, 91%, 28%);
            color: hsl(0, 0%, 100%);
            }
        `}
    `;

    export const IconWrapper = styled.span`
      width: 20px;
      height: 20px;
      min-width: 20px;   /* 🔑 impede encolhimento */
      min-height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
`;

    export const MenuLabel = styled.span<{ $collapsed: boolean }>`
      font-weight: 500;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: ${({ $collapsed }) => ($collapsed ? "0px" : "240px")};
      opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
      transform: ${({ $collapsed }) => ($collapsed ? "translateX(-6px)" : "translateX(0)")};

      transition: max-width 0.25s ease, opacity 0.2s ease, transform 0.25s ease;
`;

    export const Footer = styled.div`
    bottom: 0;
    padding: 0.75rem;
    border-top: 1px solid hsl(0, 91%, 28%);
    `;

    export const UserWrapper = styled.div<{ $collapsed: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    ${({ $collapsed }) => $collapsed && 'justify-content: center;'}
    `;

  export const Avatar = styled.div<{$collapsed: boolean}>`
  background-color: ${({$collapsed}) => ($collapsed ? 'transparent' : '#ffa801')};
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background-color 0.25s ease;
  `;

    export const UserInfo = styled.div<{ $collapsed: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
  `;

export const UserText = styled.div<{ $collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;

  opacity: ${({ $collapsed }) => ($collapsed ? 0 : 1)};
  transform: ${({ $collapsed }) => ($collapsed ? "translateX(-6px)" : "translateX(0)")};
  transition: opacity 160ms ease, transform 200ms ease;

  will-change: opacity, transform;

  max-width: ${({ $collapsed }) => ($collapsed ? "0px" : "220px")};
  transition: max-width 220ms ease, opacity 160ms ease, transform 200ms ease;
`;

    export const UserRole = styled.p`
      font-size: 0.75rem;
      color: hsl(0, 0%, 100%)',99;
    `;
