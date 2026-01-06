import { OrdersList } from '../../components/layout/OrdersList'
import { toast } from 'sonner'
import * as S from './styles'

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
    address: 'Rua das Flores, 123 - São Paulo/SP',
  },
  {
    id: '002',
    time: '13:45',
    customerName: 'João Santos',
    customerPhone: '(11) 91234-5678',
    status: 'pending' as const,
    items: [{ id: '3', name: 'Tênis Esportivo 42', quantity: 1, price: 299.9 }],
    total: 299.9,
    paymentMethod: 'Cartão de Crédito',
    address: 'Av. Brasil, 456 - Rio de Janeiro/RJ',
  },
  {
    id: '003',
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
    address: 'Rua do Comércio, 789 - Belo Horizonte/MG',
  },
  {
    id: '004',
    time: '11:15',
    customerName: 'Pedro Oliveira',
    customerPhone: '(31) 98765-1234',
    status: 'cancelled' as const,
    items: [{ id: '6', name: 'Jaqueta de Couro M', quantity: 1, price: 450.0 }],
    total: 450.0,
  },
  {
    id: '005',
    time: '10:30',
    customerName: 'Carla Mendes',
    customerPhone: '(11) 94567-8901',
    status: 'paid' as const,
    items: [{ id: '7', name: 'Blusa de Lã P', quantity: 3, price: 79.9 }],
    total: 239.7,
    paymentMethod: 'Pix',
    address: 'Rua Augusta, 1000 - São Paulo/SP',
    shipped: true,
  },
]

function AdminPedidos() {
  const handleResendPaymentLink = (orderId: string) => {
    toast.success(`Link de pagamento reenviado para o pedido #${orderId}`)
  }

  const handleCancelOrder = (orderId: string) => {
    toast.info(`Pedido #${orderId} cancelado`)
  }

  const handleMarkAsShipped = (orderId: string) => {
    toast.success(`Pedido #${orderId} marcado como enviado`)
  }

  return (
    <S.Container>
      <S.Main>
        <S.Content>
          <S.Header>
            <S.Title>Pedidos e Vendas</S.Title>
            <S.Subtitle>Acompanhe seus pedidos em tempo real</S.Subtitle>
          </S.Header>

          <OrdersList
            orders={mockOrders}
            delay={100}
            onResendPaymentLink={handleResendPaymentLink}
            onCancelOrder={handleCancelOrder}
            onMarkAsShipped={handleMarkAsShipped}
          />
        </S.Content>
      </S.Main>
    </S.Container>
  )
}

export default AdminPedidos
