import { DollarSign, ShoppingBag, TrendingUp, MessageCircle, Users } from 'lucide-react'
import { StatCard } from '../../components/layout/StatCard'
import { BusinessStatus } from '../../components/layout/BusinessStatus'
import { MiniChart } from '../../components/layout/MiniChart/Index'
import * as S from './styles'
import InsightIA from '../../components/layout/InsightIA'

// Dados mockados para demonstração
const mockData = {
  faturamento: {
    value: 'R$ 4.850,00',
    comparison: { value: 12.5, label: 'vs. ontem' },
  },
  pedidos: {
    value: '47',
    comparison: { value: 8, label: 'vs. ontem' },
  },
  ticketMedio: {
    value: 'R$ 103,19',
    comparison: { value: -3.2, label: 'vs. ontem' },
  },
  conversao: {
    value: '24%',
    comparison: { value: 5.1, label: 'vs. ontem' },
  },
  clientesAtivos: {
    value: '1.284',
    comparison: { value: 2.3, label: 'últimos 30 dias' },
  },
  status: 'healthy' as const,
  statusMessage: 'Vendas acima da média, continue assim!',
  ultimosDias: [
    { day: 'Seg', value: 3200 },
    { day: 'Ter', value: 4100 },
    { day: 'Qua', value: 3800 },
    { day: 'Qui', value: 4500 },
    { day: 'Sex', value: 5200 },
    { day: 'Sáb', value: 6100 },
    { day: 'Dom', value: 4850 },
  ],
}

function AdminVisaoGeral() {
  const insight =
    'Aqui tem os principais insights que você precisa saber sobre seu delivery. Fique atento aos insights pois ele ajuda você a evitar gargalos em seu delivery.'

  return (
    <S.Content>
      <S.Header>
        <S.Title>Visão Geral</S.Title>
        <S.Subtitle>Acompanhe a situação atual do seu Delivery</S.Subtitle>
      </S.Header>

      <InsightIA insight={insight} />
      <S.StatsGrid>
        <BusinessStatus status={mockData.status} message={mockData.statusMessage} delay={350} />

        <StatCard
          title="Faturamento do Dia"
          value={mockData.pedidos.value}
          comparison={mockData.pedidos.comparison}
          icon={<DollarSign size={20} />}
          delay={150}
        />

        <StatCard
          title="Taxa de Conversão"
          value={mockData.conversao.value}
          comparison={mockData.conversao.comparison}
          icon={<MessageCircle size={20} />}
          delay={250}
        />

        <StatCard
          title="Pedidos do Dia"
          value={mockData.pedidos.value}
          comparison={mockData.pedidos.comparison}
          icon={<ShoppingBag size={20} />}
          delay={150}
        />

        <StatCard
          title="Ticket Médio"
          value={mockData.ticketMedio.value}
          comparison={mockData.ticketMedio.comparison}
          icon={<TrendingUp size={20} />}
          delay={200}
        />

        <StatCard
          title="Clientes Ativos"
          value={mockData.clientesAtivos.value}
          comparison={mockData.clientesAtivos.comparison}
          icon={<Users size={20} />}
          delay={300}
        />
      </S.StatsGrid>

      <MiniChart data={mockData.ultimosDias} delay={400} />
    </S.Content>
  )
}

export default AdminVisaoGeral
