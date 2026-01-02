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
        route="catalogo/destaques"
        data={produtos ?? []}
        badge="Estrelas do site"
        icon={Star}
        titulo="Produtos em"
        highlight=" destaques"
      />
      <Sobre />
      <Catalogo
        route="catalogo/frete_gratis"
        data={produtos ?? []}
        badge="Não pague envio"
        icon={Truck}
        titulo="Com Frete"
        highlight=" Grátis"
      />
      <Receitas />
      <Qualidades />
      <Form />
    </>
  )
}

export default Home
