import Hero from './Hero'
import Catalogo from '../components/layout/Catalogo'
import Sobre from './Sobre'
import Receitas from './Receitas'
import Qualidades from './Qualidades'
import Form from './Form'

import raviole from '../assets/icons/ravioli.png'
import preparo from '../assets/images/preparo-pastel.png'

const Home = () => {
  const itens = [
    {
      id: '1',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
    {
      id: '2',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
    {
      id: '3',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
    {
      id: '4',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
  ]

  const receitas = [
    {
      id: 1,
      imagem: preparo,
      receita: 'Pastel de queijo',
    },
    {
      id: 2,
      imagem: preparo,
      receita: 'Pastel de frango',
    },
    {
      id: 3,
      imagem: preparo,
      receita: 'Pastel de carne',
    },
    {
      id: 3,
      imagem: preparo,
      receita: 'Pastel de carne',
    },
  ]

  return (
    <>
      <Hero />
      <Catalogo data={itens} titulo="Mais vendidos:" />
      <Sobre />
      <Catalogo data={itens} titulo="Com Frete Grátis:" />
      <Receitas data={receitas} titulo="Melhores Receitas" />
      <Qualidades />
      <Form />
    </>
  )
}

export default Home
