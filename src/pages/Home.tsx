import Hero from './Hero'
import Catalogo from '../components/layout/Catalogo'
import Sobre from './Sobre'
import Receitas from './Receitas'
import Qualidades from './Qualidades'
import Form from './Form'
import { useGetProductsQuery } from '../services/products.api'

import preparo from '../assets/images/preparo-pastel.png'

const Home = () => {
  const { data: produtos, isLoading, error } = useGetProductsQuery()

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

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {String(error)}</p>

  return (
    <>
      <Hero />
      <Catalogo data={produtos ?? []} titulo="Mais vendidos:" />
      <Sobre />
      <Catalogo data={produtos ?? []} titulo="Com Frete Grátis:" />
      <Receitas data={receitas} titulo="Melhores Receitas" />
      <Qualidades />
      <Form />
    </>
  )
}

export default Home
