import * as S from './styles'
import close from '../../../assets/icons/close.png'
import {
  Building2,
  Handshake,
  House,
  NotebookText,
  PackageSearch,
  ReceiptText,
  ShoppingBasket,
  User,
} from 'lucide-react'

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
          <House size={16} />
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
          to="/sobre"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <Building2 />
          Quem Somos?
        </S.LinkNav>
        <S.LinkNav
          to="/politicas-de-privacidade"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <ReceiptText />
          Políticas de Privacidade
        </S.LinkNav>
        <S.LinkNav
          to="/termos-de-uso"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <Handshake />
          Termos de Uso
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
