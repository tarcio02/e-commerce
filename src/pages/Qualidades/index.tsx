import { Clock, ThumbsUp, Truck, Award, CheckCircle, Handshake, ShieldCheck } from 'lucide-react'
import * as S from './styles'

const stats = [
  { value: '99.8%', label: 'Taxa de Entrega no Prazo', icon: Clock },
  { value: '5/5', label: 'Avaliação dos Clientes', icon: ThumbsUp },
  { value: '+50mil', label: 'Entregas Realizadas', icon: Truck },
  { value: '100%', label: 'Satisfação Garantida', icon: Award },
]

const qualityPillars = [
  {
    icon: ShieldCheck,
    title: 'Segurança Total',
    description: 'Monitoramento em tempo real e rastreamento completo de todas as entregas.',
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    description: 'Compromisso com prazos rigorosos e entregas sempre no horário combinado.',
  },
  {
    icon: CheckCircle,
    title: 'Cuidado Extremo',
    description:
      'Manuseio especializado para garantir que seus produtos cheguem em perfeito estado.',
  },
]

const QualitySection = () => {
  return (
    <S.Section>
      <S.Container>
        {/* Header */}
        <S.Header>
          <S.Badge>
            <Handshake /> Nosso Compromisso
          </S.Badge>
          <S.Title>
            Qualidade no Atendimento
            <S.TitleAccent> e Entrega</S.TitleAccent>
          </S.Title>
          <S.Subtitle>
            Excelência em cada etapa do processo, desde o primeiro contato até a entrega final.
          </S.Subtitle>
        </S.Header>

        {/* Stats Grid */}
        <S.StatsGrid>
          {stats.map((stat, index) => (
            <S.StatCard key={index} $delay={index * 100}>
              <S.StatIconWrapper>
                <S.StatIcon>
                  <stat.icon size={24} />
                </S.StatIcon>
              </S.StatIconWrapper>
              <S.StatValue>{stat.value}</S.StatValue>
              <S.StatLabel>{stat.label}</S.StatLabel>
            </S.StatCard>
          ))}
        </S.StatsGrid>

        {/* Quality Pillars */}
        <S.PillarsGrid>
          {qualityPillars.map((pillar, index) => (
            <S.PillarCard key={index} $delay={index * 150}>
              <S.PillarIconWrapper>
                <S.PillarIcon>
                  <pillar.icon size={32} />
                </S.PillarIcon>
              </S.PillarIconWrapper>
              <S.PillarTitle>{pillar.title}</S.PillarTitle>
              <S.PillarDescription>{pillar.description}</S.PillarDescription>
            </S.PillarCard>
          ))}
        </S.PillarsGrid>

        {/* Trust Badge */}
        <S.TrustBadgeWrapper>
          <S.TrustBadge>
            <S.TrustIcon>
              <ShieldCheck />
            </S.TrustIcon>
            <S.TrustText>Empresa certificada com selo de qualidade ISO 9001</S.TrustText>
          </S.TrustBadge>
        </S.TrustBadgeWrapper>
      </S.Container>
    </S.Section>
  )
}

export default QualitySection
