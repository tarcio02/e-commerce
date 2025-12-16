import { ArrowRight, ChefHat } from 'lucide-react'
import * as S from './styes'
import pastel from '../../assets/images/receitas/pastel.png'
import macarrao from '../../assets/images/receitas/fettuccine.jpg'

type Category = {
  name: string
  image: string
  link: string
}

const Receitas = () => {
  const categories: Category[] = [
    {
      name: 'Macarrão e Espaguetes',
      image: macarrao,
      link: '/recipes/macarrao',
    },
    {
      name: 'Pasteis',
      image: pastel,
      link: '/recipes/pastel',
    },
  ]

  return (
    <S.CategoriesSection>
      <S.Badge>
        Para Fazer em Casa
        <ChefHat />
      </S.Badge>
      <S.SectionHeader>
        Inpire-se em <S.HighlightText>Nossas Receitas</S.HighlightText>
      </S.SectionHeader>
      <S.SectionDescription>
        Explore receitas selecionadas de macarrão e pastel para fazer sozinha ou acompanhada. Cada
        prato reflete um momento de tradição e sabor.
      </S.SectionDescription>

      <S.CategoriesGrid>
        {categories.map((category, index) => (
          <S.CategoryCard
            to={category.link}
            key={category.name}
            delay={index * 100}
            aria-label={`Ver coleção ${category.name}`}
          >
            <S.CategoryImage src={category.image} alt={category.name} />
            <S.GradientOverlay />
            <S.CategoryInfo>
              <S.CategoryTitle>{category.name}</S.CategoryTitle>
              <S.CategoryAction>
                <span>Ver coleção</span>
                <ArrowRight />
              </S.CategoryAction>
            </S.CategoryInfo>
          </S.CategoryCard>
        ))}
      </S.CategoriesGrid>
    </S.CategoriesSection>
  )
}

export default Receitas
