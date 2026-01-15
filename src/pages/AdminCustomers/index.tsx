import { useState } from 'react'
import { Repeat2, HandCoins, Users, DollarSign } from 'lucide-react'
import CustomersList from '../../components/layout/CustomersList'
import CustomerDetailsModal from '../../components/layout/CustomerDetailsModal'
import * as S from './styles'
import InsightIA from '../../components/layout/InsightIA'
import { StatCard } from '../../components/layout/StatCard'

interface Customer {
  id: string
  name: string
  phone: string
  lastOrderDate: string
  totalOrders: number
  averageTicket: number
  status: 'ativo' | 'inativo'
  topProducts?: { name: string; count: number }[]
  aiInsight?: string
}

// Mock data
const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Maria Silva',
    phone: '(11) 99999-1234',
    lastOrderDate: '05/01/2026',
    totalOrders: 24,
    averageTicket: 189.5,
    status: 'ativo',
    aiInsight: 'Cliente fiel que compra a cada 10 dias. Preferência por roupas casuais.',
  },
  {
    id: '2',
    name: 'João Santos',
    phone: '(11) 98888-5678',
    lastOrderDate: '02/01/2026',
    totalOrders: 15,
    averageTicket: 245.0,
    status: 'ativo',
    aiInsight: 'Alto valor de ticket. Costuma comprar itens premium.',
  },
  {
    id: '3',
    name: 'Ana Costa',
    phone: '(11) 97777-9012',
    lastOrderDate: '28/12/2025',
    totalOrders: 8,
    averageTicket: 120.0,
    status: 'ativo',
    aiInsight: 'Cliente nova com potencial de crescimento. Sugestão: oferecer frete grátis.',
  },
  {
    id: '4',
    name: 'Pedro Lima',
    phone: '(11) 96666-3456',
    lastOrderDate: '15/11/2025',
    totalOrders: 3,
    averageTicket: 85.0,
    status: 'inativo',
    aiInsight: 'Inativo há 52 dias. Sugestão: enviar cupom de reativação de 15%.',
  },
  {
    id: '5',
    name: 'Carla Mendes',
    phone: '(11) 95555-7890',
    lastOrderDate: '04/01/2026',
    totalOrders: 42,
    averageTicket: 312.0,
    status: 'ativo',
    aiInsight: 'Top cliente do mês. Compra toda semana. Candidata ao programa VIP.',
  },
  {
    id: '6',
    name: 'Roberto Alves',
    phone: '(11) 94444-1234',
    lastOrderDate: '01/10/2025',
    totalOrders: 2,
    averageTicket: 65.0,
    status: 'inativo',
    aiInsight: 'Abandonou após segunda compra. Verificar experiência de entrega.',
  },
]

// Mock stats - dados da semana
const stats = {
  repurchaseRate: 68,
  repurchaseChange: -8,
  avgCostPerCustomer: 45.8,
  costChange: -12,
  activeCustomers: 4,
  totalCustomers: 6,
  activeChange: 5,
  avgTicket: 186.08,
  ticketChange: 15,
}

function AdminCustomers() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <S.Content>
      <S.Header>
        <S.Title>Clientes</S.Title>
        <S.Subtitle>Gerencie seus clientes e acompanhe insights</S.Subtitle>
      </S.Header>

      <InsightIA insight="Fique por dentro dos insigths para manter e conquistar novos clientes." />

      <S.StatsGrid>
        <StatCard
          title="Taxa de Recompra"
          value={stats.repurchaseRate + '%'}
          comparison={{ value: stats.repurchaseChange, label: 'vs. semana anterior.' }}
          icon={<Repeat2 size={18} />}
          delay={150}
        />
        <StatCard
          title="Custo médio por cliente"
          value={formatCurrency(stats.avgCostPerCustomer)}
          comparison={{ value: stats.avgCostPerCustomer, label: 'vs. semana anterior' }}
          icon={<HandCoins size={18} />}
          delay={200}
        />
        <StatCard
          title="Clientes ativos"
          value={`${stats.activeCustomers}/${stats.totalCustomers}`}
          comparison={{ value: stats.activeChange, label: 'vs. semana anterior' }}
          icon={<Users size={18} />}
          delay={250}
        />
        <StatCard
          title="ticket médio geral"
          value={formatCurrency(stats.avgTicket)}
          comparison={{ value: stats.ticketChange, label: 'vs. semana anterior' }}
          icon={<DollarSign size={18} />}
          delay={300}
        />
      </S.StatsGrid>

      <S.ListSection>
        <CustomersList customers={mockCustomers} onCustomerClick={setSelectedCustomer} />
      </S.ListSection>
      <CustomerDetailsModal customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
    </S.Content>
  )
}
export default AdminCustomers
