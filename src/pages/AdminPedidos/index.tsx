import { OrdersList } from '../../components/layout/OrdersList'
import { toast } from 'sonner'
import * as S from './styles'
import InsightIA from '../../components/layout/InsightIA'
import { Filter } from 'lucide-react'
import { useMemo, useState } from 'react'

type FilterType = 'hoje' | 'ontem' | '7d' | '30d'

// Dados mockados de pedidos
const mockOrders = [
  {
    id: '001',
    time: '14:32',
    customerName: 'Maria Silva',
    customerPhone: '(11) 98765-4321',
    status: 'paid' as const,
    items: [
      { id: '1', name: 'Camiseta Básica P', quantity: 2, price: 59.9 },
      { id: '2', name: 'Calça Jeans M', quantity: 1, price: 129.9 },
    ],
    total: 249.7,
    paymentMethod: 'Pix',
    createdAt: '2026-01-09T10:15:00-03:00',
    address: 'Rua das Flores, 123 - São Paulo/SP',
  },
  {
    id: '002',
    time: '11:32',
    customerName: 'Fernando',
    customerPhone: '(11) 98765-4321',
    status: 'shipped' as const,
    items: [
      { id: '1', name: 'Camiseta Básica P', quantity: 2, price: 59.9 },
      { id: '2', name: 'Calça Jeans M', quantity: 1, price: 129.9 },
    ],
    total: 249.7,
    paymentMethod: 'Pix',
    createdAt: '2026-01-09T10:15:00-03:00',
    address: 'Rua das Flores, 123 - São Paulo/SP',
  },
  {
    id: '003',
    time: '13:45',
    customerName: 'João Santos',
    customerPhone: '(11) 91234-5678',
    status: 'pending' as const,
    items: [{ id: '3', name: 'Tênis Esportivo 42', quantity: 1, price: 299.9 }],
    total: 299.9,
    paymentMethod: 'Cartão de Crédito',
    createdAt: '2026-01-08T10:15:00-03:00',
    address: 'Av. Brasil, 456 - Rio de Janeiro/RJ',
  },
  {
    id: '004',
    time: '14:45',
    customerName: 'Lucas',
    customerPhone: '(11) 91234-5678',
    status: 'delivered' as const,
    items: [{ id: '3', name: 'Tênis Esportivo 42', quantity: 1, price: 299.9 }],
    total: 299.9,
    paymentMethod: 'Cartão de Crédito',
    createdAt: '2026-01-08T10:15:00-03:00',
    address: 'Av. Brasil, 456 - Rio de Janeiro/RJ',
  },
  {
    id: '005',
    time: '12:20',
    customerName: 'Ana Costa',
    customerPhone: '(21) 99876-5432',
    status: 'paid' as const,
    items: [
      { id: '4', name: 'Vestido Floral G', quantity: 1, price: 189.9 },
      { id: '5', name: 'Sandália 37', quantity: 1, price: 99.9 },
    ],
    total: 289.8,
    paymentMethod: 'Pix',
    createdAt: '2026-01-01T10:15:00-03:00',
    address: 'Rua do Comércio, 789 - Belo Horizonte/MG',
  },
  {
    id: '006',
    time: '12:20',
    customerName: 'José',
    customerPhone: '(21) 99876-5432',
    status: 'paid' as const,
    items: [
      { id: '4', name: 'Vestido Floral G', quantity: 1, price: 189.9 },
      { id: '5', name: 'Sandália 37', quantity: 1, price: 99.9 },
    ],
    total: 289.8,
    paymentMethod: 'Pix',
    createdAt: '2026-01-01T10:15:00-03:00',
    address: 'Rua do Comércio, 789 - Belo Horizonte/MG',
  },
  {
    id: '007',
    time: '11:15',
    customerName: 'Pedro Oliveira',
    customerPhone: '(31) 98765-1234',
    status: 'cancelled' as const,
    items: [{ id: '6', name: 'Jaqueta de Couro M', quantity: 1, price: 450.0 }],
    createdAt: '2026-01-01T10:15:00-03:00',
    total: 450.0,
  },
  {
    id: '008',
    time: '10:30',
    customerName: 'Carla Mendes',
    customerPhone: '(11) 94567-8901',
    status: 'paid' as const,
    items: [{ id: '7', name: 'Blusa de Lã P', quantity: 3, price: 79.9 }],
    total: 239.7,
    paymentMethod: 'Pix',
    createdAt: '2025-12-09T10:15:00-03:00',
    address: 'Rua Augusta, 1000 - São Paulo/SP',
    shipped: true,
  },
]

function AdminPedidos() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('hoje')

  const handleResendPaymentLink = (orderId: string) => {
    toast.success(`Link de pagamento reenviado para o pedido #${orderId}`)
  }

  const handleCancelOrder = (orderId: string) => {
    toast.info(`Pedido #${orderId} cancelado`)
  }

  const handleMarkAsShipped = (orderId: string) => {
    toast.success(`Pedido #${orderId} marcado como enviado`)
  }

  const filteredOrders = useMemo(() => {
    if (!mockOrders) return []

    const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

    const isSameDay = (a: Date, b: Date) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()

    const isToday = (date: Date, now = new Date()) => isSameDay(date, now)

    const isYesterday = (date: Date, now = new Date()) => {
      const y = startOfDay(now)
      y.setDate(y.getDate() - 1)
      return isSameDay(date, y)
    }

    const daysAgo = (date: Date, now = new Date()) => {
      const diffMs = startOfDay(now).getTime() - startOfDay(date).getTime()
      return Math.floor(diffMs / (1000 * 60 * 60 * 24))
    }

    const isWithinLastDays = (date: Date, days: number, now = new Date()) => {
      const d = daysAgo(date, now)
      return d >= 0 && d < days
    }

    const now = new Date()

    return mockOrders.filter((order) => {
      if (!order.createdAt) return false
      const dt = new Date(order.createdAt)

      if (activeFilter === 'hoje') return isToday(dt, now)
      if (activeFilter === 'ontem') return isYesterday(dt, now)
      if (activeFilter === '7d') return isWithinLastDays(dt, 7, now)
      if (activeFilter === '30d') return isWithinLastDays(dt, 30, now)

      return true
    })
  }, [activeFilter])

  return (
    <S.Content>
      <S.Header>
        <S.Title>Pedidos e Vendas</S.Title>
        <S.Subtitle>Acompanhe seus pedidos em tempo real</S.Subtitle>
      </S.Header>

      <InsightIA insight="Atente-se a análise da IA, pois ela sabe o que melhor indicar no momento atual para melhorar seus pedidos." />

      <S.FiltersWrapper>
        <S.BadgeFilter>
          <Filter className="h-4 w-4 mr-2" />
          Filtrar por:
        </S.BadgeFilter>
        <S.ButtonFilter $isActive={activeFilter === 'hoje'} onClick={() => setActiveFilter('hoje')}>
          Hoje
        </S.ButtonFilter>
        <S.ButtonFilter
          $isActive={activeFilter === 'ontem'}
          onClick={() => setActiveFilter('ontem')}
        >
          Ontem
        </S.ButtonFilter>
        <S.ButtonFilter $isActive={activeFilter === '7d'} onClick={() => setActiveFilter('7d')}>
          Últimos 7 Dias
        </S.ButtonFilter>
        <S.ButtonFilter $isActive={activeFilter === '30d'} onClick={() => setActiveFilter('30d')}>
          Últimos 30 Dias
        </S.ButtonFilter>
      </S.FiltersWrapper>

      <OrdersList
        orders={filteredOrders}
        delay={100}
        onResendPaymentLink={handleResendPaymentLink}
        onCancelOrder={handleCancelOrder}
        onMarkAsShipped={handleMarkAsShipped}
      />
    </S.Content>
  )
}

export default AdminPedidos
