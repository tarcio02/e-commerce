import { ArrowRight, Sparkles } from 'lucide-react'
import * as S from './styles'

type InsigthProps = {
  isAction?: boolean
  insight: string
  toAction?: string
}

const InsightIA = ({ insight, isAction, toAction }: InsigthProps) => {
  return (
    <S.AIInsightsCard>
      <S.AIInsightsHeader>
        <S.AIIconWrapper>
          <Sparkles size={20} />
        </S.AIIconWrapper>
        <S.AITitle>Insights Geral</S.AITitle>
      </S.AIInsightsHeader>
      <S.AIInsightText>
        {insight && (
          <p>
            Aqui fica os insight gerados por IA com base em seus dados. Tudo isso para você
            enconomizar tempo de leitura, a IA já prepara tudo para você, trazendo mais velocidade
            nas tomadas de decisão.
          </p>
        )}
      </S.AIInsightText>
      {isAction ?? (
        <S.AIActionButton to={toAction ?? '/'}>
          <ArrowRight size={16} />
          Executar Ação
        </S.AIActionButton>
      )}
    </S.AIInsightsCard>
  )
}

export default InsightIA
