import * as S from './styles'
import close from '../../../assets/icons/close.png'
import { House, NotebookText, PackageSearch, ShoppingBasket, User } from 'lucide-react'

type PropsTypes = {
  aberto: boolean
  fechar: () => void
}

const MenuLateral = ({ aberto, fechar }: PropsTypes) => {
  return (
    <S.Drawer $aberto={aberto}>
      <S.btn onClick={fechar}>
        <img src={close} alt="Ícone de fechar" />
      </S.btn>
      <S.Lista>
        <S.LinkNav
          to="/"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <House />
          Home
        </S.LinkNav>
        <S.LinkNav
          to="/catalogo"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <ShoppingBasket />
          Produtos
        </S.LinkNav>
        <S.LinkNav
          to="/checkout/history"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <PackageSearch />
          Meus Pedidos
        </S.LinkNav>
        <S.LinkNav
          to="/receitas"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <NotebookText />
          Receitas
        </S.LinkNav>
        <S.LinkNav
          to="/perfil"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <User />
          Minha Conta
        </S.LinkNav>
      </S.Lista>
    </S.Drawer>
  )
}

export default MenuLateral
