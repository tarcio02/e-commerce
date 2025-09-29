import * as S from './styles'

const Form = () => {
  return (
    <S.StylesForm>
      <S.Top>Receba as Melhores Ofertas</S.Top>
      <S.Form>
        <S.Titulo>Insira suas informações de contato</S.Titulo>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Nome" />
        <S.Button>Eu quero :)</S.Button>
      </S.Form>
    </S.StylesForm>
  )
}

export default Form
