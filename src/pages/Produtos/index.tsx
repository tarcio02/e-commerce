import * as S from './styles'
import banner from '../../assets/images/banner-produtos.png'
import { useEffect, useMemo, useState } from 'react'
import { ChefHat, Filter, Star, Truck } from 'lucide-react'
import Button from '../../components/ui/Button/Index'
import { useGetProductsQuery } from '../../services/products.api'
import CardCatalogo from '../../components/layout/CardCatalogo'
import ModalProduct from '../../components/layout/ModalProduct'
import { useParams } from 'react-router-dom'

type FilterType = 'all' | 'frete_gratis' | 'destaques' | 'pasteis' | 'macarrao'

const Produtos = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>('')

  const { data: products = [], isLoading, error } = useGetProductsQuery()
  const modalItem = products.find((i) => i.id === selectedProduct)
  const { type } = useParams<{ type?: FilterType }>()

  useEffect(() => {
    if (type) {
      setActiveFilter(type)
    } else {
      setActiveFilter('all')
    }
  }, [type])

  const handleModal = (id?: string) => {
    setShowModal((prev) => !prev)
    if (id) {
      setSelectedProduct(id)
    } else {
      setSelectedProduct('all')
    }
  }

  const configSection = {
    all: {
      badge: 'As Melhores Massas',
      titulo: 'Todas Nossas',
      highlight: 'Massas',
      description: 'Explore o melhor das massas de pasteis e espaguetes.',
      icon: ChefHat,
    },
    frete_gratis: {
      badge: 'Não Pague Pelo Envio',
      titulo: 'Aproveite o ',
      highlight: 'frete grátis',
      description: 'Peça qualquer coisa e não pague a entrega.',
      icon: Truck,
    },
    destaques: {
      badge: 'Os Populares',
      titulo: 'Produtos ',
      highlight: 'Destaques',
      description: 'Veja os produtos mais desejados do site. Aproveita as ofertas',
      icon: Star,
    },
    pasteis: {
      badge: 'Crocrantes e sequinhos',
      titulo: 'Os Melhores ',
      highlight: 'Pasteis',
      description: 'Saboreie os pasteis mais crocantes e sequinhos que já viu.',
      icon: Star,
    },
    macarrao: {
      badge: 'A Melhor Massa',
      titulo: 'Macarrão e ',
      highlight: 'Espaguetes',
      description: 'O veradadeiro espaguete italiano, feito com amor e carinho.',
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
          <S.Badge>{catalagoProps.badge}</S.Badge>
          <S.Title>
            {catalagoProps.titulo}
            <S.Highlight> {catalagoProps.highlight}</S.Highlight>
          </S.Title>
          <S.Description>{catalagoProps.description}</S.Description>
        </S.MainContent>
      </S.StylesHero>
      <S.Main>
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
        {filtereProducts.length !== 0 ? (
          <S.ProductGridContainer>
            {filtereProducts.map((product, index) => (
              <>
                {console.log(product.old_price)}
                <CardCatalogo
                  handleModal={handleModal}
                  frete_gratis={product.frete_gratis}
                  oldPrice={product.old_price}
                  avaliacao={5}
                  idItem={product.id}
                  image={product.imagem}
                  nome={product.nome}
                  preco={product.preco}
                  desconto={product.desconto}
                  descricao={product.descricao}
                  key={index}
                />
              </>
            ))}
          </S.ProductGridContainer>
        ) : (
          <S.NoProducts>
            <h2>Nenhum Produto Encontrado.</h2>
          </S.NoProducts>
        )}
      </S.Main>
      <ModalProduct onClose={handleModal} show={showModal} modalItem={modalItem} />
    </S.Section>
  )
}

export default Produtos
