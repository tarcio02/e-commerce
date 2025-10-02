import * as S from './styles'

const MenuNav = () => {
  return (
    <S.StylesMenuNav>
      <S.Item to="/catalogo">Produtos</S.Item>
      <S.Item to="/receitas">Receitas</S.Item>
      <S.Item to="/sobre">Quem Somos?</S.Item>
    </S.StylesMenuNav>
  )
}

export default MenuNav
