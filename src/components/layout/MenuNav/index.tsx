import * as S from './styles'
import type React from 'react'

type LinkItem = {
  name: string
  icon: React.ReactElement
  route: string
}

type LinksProps = {
  links: LinkItem[]
}

const MenuNav = ({ links }: LinksProps) => {
  return (
    <S.StylesMenuNav>
      {links.map((link) => (
        <S.Item to={link.route}>
          {link.icon}
          {link.name}
        </S.Item>
      ))}
    </S.StylesMenuNav>
  )
}

export default MenuNav
