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
        <li
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={produtos} alt="ìcone de caixa" />
          Produtos
        </li>
        <li
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={receita} alt="ìcone de receita" />
          Receitas
        </li>
        <li
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={empresa} alt="ìcone de grupo de pessoas" />
          Quem Somos?
        </li>
        <li
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={politicas} alt="ìcone de políticas" />
          Políticas de Privacidade
        </li>
        <li
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={termos} alt="ìcone de termos" />
          Termos de Uso
        </li>
        <li
          className="item"
          onClick={() => {
            fechar()
          }}
        >
          <img src={perfil} alt="ìcone de usuário" />
          Minha Conta
        </li>
      </S.Lista>
    </S.Drawer>
  )
}

export default MenuLateral
