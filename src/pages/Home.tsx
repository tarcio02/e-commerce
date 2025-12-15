import Hero from './Hero'
import Catalogo from '../components/layout/Catalogo'
import Sobre from './Sobre'
import Receitas from './Receitas'
import Qualidades from './Qualidades'
import Form from './Form'
import { useGetProductsQuery } from '../services/products.api'
import { Star, Truck } from 'lucide-react'

const Home = () => {
  const { data: produtos, isLoading, error } = useGetProductsQuery()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {String(error)}</p>

  return (
    <>
      <Hero />
      <Catalogo
        data={produtos ?? []}
        badge="Estrelas do site"
        icon={Star}
        titulo="Produtos em destaques"
      />
      <Sobre />
      <Catalogo
        data={produtos ?? []}
        badge="Não pague envio"
        icon={Truck}
        titulo="Com Frete Grátis"
      />
      <Receitas />
      <Qualidades />
      <Form />
    </>
  )
}

export default Home
