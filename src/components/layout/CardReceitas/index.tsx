import { ChefHat, Clock, Users } from 'lucide-react'
import * as S from './styles'

interface RecipeCardProps {
  title: string
  description: string
  image: string
  time: string
  servings: number
  dificult: string
}

const CardReceitas = ({ title, description, image, time, servings, dificult }: RecipeCardProps) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image src={image} alt={title} />
        <S.ImageOverlay />
        <S.DificultBadge>
          <ChefHat />
          {dificult}
        </S.DificultBadge>
      </S.ImageContainer>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.MetaInfo>
          <S.MetaItem>
            <Clock size={16} />
            <span>{time}</span>
          </S.MetaItem>
          <S.MetaItem>
            <Users size={16} />
            <span>{servings} porções</span>
          </S.MetaItem>
        </S.MetaInfo>

        <S.Button>Ver Receita Completa</S.Button>
      </S.Content>
    </S.Card>
  )
}

export default CardReceitas
