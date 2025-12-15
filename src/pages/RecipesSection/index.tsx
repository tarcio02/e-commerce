import CardReceitas from '../../components/layout/CardReceitas'
import pastelImage from '../../assets/images/receitas/pastelB.jpg'
import fettuccineImage from '../../assets/images/receitas/fettuccine.jpg'
import penneImage from '../../assets/images/receitas/penne.jpg'
import lasanhaImage from '../../assets/images/receitas/lasanha.jpg'
import pastelQueijoImage from '../../assets/images/receitas/pastel-queijo.jpg'
import heroImage from '../../assets/images/receitas/hero-pasta.jpg'
import * as S from './styles'
import { Filter } from 'lucide-react'
import Button from '../../components/ui/Button/Index'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

type FilterType = 'macarrao' | 'pastel'

const recipes = [
  {
    title: 'Espaguete ao Sugo',
    description:
      'Clássico macarrão com molho de tomate caseiro, manjericão fresco e queijo parmesão ralado.',
    image: heroImage,
    time: '30 min',
    servings: 4,
    categories: 'macarrao',
    dificult: 'Fácil',
  },
  {
    title: 'Pastel de Carne',
    description:
      'Massa crocante recheada com carne moída temperada, um clássico irresistível da culinária brasileira.',
    image: pastelImage,
    time: '45 min',
    servings: 8,
    categories: 'pastel',
    dificult: 'Intermediário',
  },
  {
    title: 'Fettuccine Alfredo',
    description:
      'Massa fresca com cremoso molho de queijo parmesão, manteiga e uma pitada de noz-moscada.',
    image: fettuccineImage,
    time: '25 min',
    servings: 4,
    categories: 'espaguete',
    dificult: 'Intermediário',
  },
  {
    title: 'Penne à Bolonhesa',
    description:
      'Macarrão penne com rico molho de carne moída, tomates frescos e ervas aromáticas.',
    image: penneImage,
    time: '50 min',
    servings: 6,
    categories: 'macarrao',
    dificult: 'Difícil',
  },
  {
    title: 'Lasanha Tradicional',
    description:
      'Camadas de massa, molho bolonhesa, bechamel e queijo gratinado no forno até dourar.',
    image: lasanhaImage,
    time: '1h 30min',
    servings: 8,
    categories: 'macarrao',
    dificult: 'Fácil',
  },
  {
    title: 'Pastel de Queijo',
    description:
      'Massa fininha e crocante com recheio de queijo derretido que puxa. Sabor irresistível!',
    image: pastelQueijoImage,
    time: '40 min',
    servings: 10,
    categories: 'pastel',
    dificult: 'Intermediário',
  },
]

const RecipesSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('pastel')

  const { type } = useParams<{ type?: string }>()

  const isFilterType = (v?: string): v is FilterType => v === 'pastel' || v === 'macarrao'

  useEffect(() => {
    setActiveFilter(isFilterType(type) ? type : 'pastel') // default
  }, [type])

  const filteredRecipes = useMemo(() => {
    if (!recipes) return []

    return recipes.filter((recipe) => {
      if (activeFilter === 'macarrao') return recipe.categories === 'macarrao'
      if (activeFilter === 'pastel') return recipe.categories === 'pastel'
    })
  }, [activeFilter])

  return (
    <S.Section id="receitas">
      <S.Container>
        <S.StylesHero>
          <S.MainContent>
            <S.Badge>Nossas Receitas</S.Badge>
            <S.Title>
              Sabores que <S.Highlight>Inspiram</S.Highlight>
            </S.Title>
            <S.Description>
              Explore nossas receitas cuidadosamente selecionadas de macarrão e pastel. Cada prato
              conta uma história de tradição e sabor.
            </S.Description>
          </S.MainContent>
        </S.StylesHero>

        <S.FiltersWrapper>
          <S.BadgeFilter>
            <Filter className="h-4 w-4 mr-2" />
            Filtrar por:
          </S.BadgeFilter>
          <Button
            variant={activeFilter === 'macarrao' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter('macarrao')}
          >
            Macarrão
          </Button>
          <Button
            variant={activeFilter === 'pastel' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter('pastel')}
          >
            Pasteis
          </Button>
        </S.FiltersWrapper>

        <S.Grid>
          {filteredRecipes.map((recipe, index) => (
            <S.CardWrapper key={recipe.title} $delay={index * 100}>
              <CardReceitas
                description={recipe.description}
                dificult={recipe.dificult}
                image={recipe.image}
                servings={recipe.servings}
                time={recipe.time}
                title={recipe.title}
              />
            </S.CardWrapper>
          ))}
        </S.Grid>
      </S.Container>
    </S.Section>
  )
}

export default RecipesSection
