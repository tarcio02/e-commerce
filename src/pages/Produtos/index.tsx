import * as S from './styles'
import banner from '../../assets/images/banner-produtos.png'
import { useMemo, useState } from 'react'
import { ChefHat, Filter, Star, Truck } from 'lucide-react'
import Button from '../../components/ui/Button/Index'
import Catalogo from '../../components/layout/Catalogo'
import { useGetProductsQuery } from '../../services/products.api'

type FilterType = 'all' | 'frete_gratis' | 'destaques' | 'pasteis' | 'macarrao'

const Produtos = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const { data: products, isLoading, error } = useGetProductsQuery()

  const configSection = {
    all: {
      badge: 'As Melhores Massas',
      titulo: 'Todas Nossas',
      highlight: 'Massas',
      icon: ChefHat,
    },
    frete_gratis: {
      badge: 'Não Pague Pelo Envio',
      titulo: 'Aproveite o frete grátis',
      highlight: 'Massas',
      icon: Truck,
    },
    destaques: {
      badge: 'Os Populares',
      titulo: 'Produtos Destaques',
      highlight: 'Massas',
      icon: Star,
    },
    pasteis: {
      badge: 'Crocrantes e sequinhos',
      titulo: 'Os Melhores Pasteis',
      highlight: 'Massas',
      icon: Star,
    },
    macarrao: {
      badge: 'A Melhor Massa',
      titulo: 'Macarrão e Espaguetes',
      highlight: 'Massas',
      icon: Star,
    },
  }
  const catalagoProps = configSection[activeFilter]

  const filtereProducts = useMemo(() => {
    if (!products) return []

    return products.filter((product) => {
      if (activeFilter === 'all') return true
      if (activeFilter === 'frete_gratis') return product.frete_gratis === true
      if (activeFilter === 'destaques') return product.destaque === true
      if (activeFilter === 'pasteis') return product.categoria === 'pasteis'
      if (activeFilter === 'macarrao') return product.categoria === 'macarrao'
      return true
    })
  }, [activeFilter, products])

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {String(error)}</p>
  return (
    <S.Section>
      {/* Hero */}
      <S.StylesHero>
        <S.BackgroundImage $bgImage={banner} />
        <S.GradientOverlay />
        <S.MainContent>
          <S.Badge>QUALIDADE E COMPROMISSO</S.Badge>
          <S.Title>
            NOSSOS<S.Highlight>PRODUTOS</S.Highlight>
          </S.Title>
          <S.Description>
            Explore nossos produtos. As melhores massas para pasteis e macarrão estão aqui.
          </S.Description>
        </S.MainContent>
      </S.StylesHero>

      {/* Filtro */}
      <S.FiltersWrapper>
        <S.BadgeFilter>
          <Filter className="h-4 w-4 mr-2" />
          Filtrar por:
        </S.BadgeFilter>
        <Button
          variant={activeFilter === 'all' ? 'outline' : 'ghost'}
          size="sm"
          className={
            activeFilter === 'all'
              ? 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'
              : ''
          }
          onClick={() => setActiveFilter('all')}
        >
          Todos
        </Button>
        <Button
          variant={activeFilter === 'frete_gratis' ? 'outline' : 'ghost'}
          size="sm"
          onClick={() => setActiveFilter('frete_gratis')}
        >
          Frete Grátis
        </Button>
        <Button
          variant={activeFilter === 'destaques' ? 'outline' : 'ghost'}
          size="sm"
          onClick={() => setActiveFilter('destaques')}
        >
          Em Destaque
        </Button>
        <Button
          variant={activeFilter === 'pasteis' ? 'outline' : 'ghost'}
          size="sm"
          onClick={() => setActiveFilter('pasteis')}
        >
          Pasteis
        </Button>
        <Button
          variant={activeFilter === 'macarrao' ? 'outline' : 'ghost'}
          size="sm"
          onClick={() => setActiveFilter('macarrao')}
        >
          Macarrão
        </Button>
      </S.FiltersWrapper>

      {/* Catálogo */}
      {filtereProducts ? (
        <Catalogo
          badge={catalagoProps.badge}
          data={filtereProducts}
          icon={catalagoProps.icon}
          titulo={catalagoProps.titulo}
        />
      ) : (
        <S.NoProducts>
          <h2>Nenhum Produto Encontrado.</h2>
        </S.NoProducts>
      )}
    </S.Section>
  )
}

export default Produtos
