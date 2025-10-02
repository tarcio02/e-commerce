import * as S from './styles'

import close from '../../../assets/icons/close.png'

import produtos from '../../../assets/icons/produtos-icon.png'
import receita from '../../../assets/icons/receita-icon.png'
import empresa from '../../../assets/icons/empresa-icon.png'
import politicas from '../../../assets/icons/politicas-icon.png'
import termos from '../../../assets/icons/termos-icon.png'
import perfil from '../../../assets/icons/perfil-icon.png'

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
        <S.LinkNav to="/catalogo"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={produtos} alt="ìcone de caixa" />
          Produtos
        </S.LinkNav>
        <S.LinkNav to="/receitas"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={receita} alt="ìcone de receita" />
          Receitas
        </S.LinkNav>
        <S.LinkNav to="/sobre"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={empresa} alt="ìcone de grupo de pessoas" />
          Quem Somos?
        </S.LinkNav>
        <S.LinkNav to="/politicas-de-privacidade"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={politicas} alt="ìcone de políticas" />
          Políticas de Privacidade
        </S.LinkNav>
        <S.LinkNav to="/termos-de-uso"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={termos} alt="ìcone de termos" />
          Termos de Uso
        </S.LinkNav>
        <S.LinkNav to="/perfil"
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={perfil} alt="ìcone de usuário" />
          Minha Conta
        </S.LinkNav>
      </S.Lista>
    </S.Drawer>
  )
}

export default MenuLateral
