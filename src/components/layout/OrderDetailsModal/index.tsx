import { X } from 'lucide-react'
import * as S from './styles'

interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
}

interface Order {
  id: string
  time: string
  customerName: string
  customerPhone: string
  status: 'paid' | 'pending' | 'cancelled' | 'shipped' | 'delivered'
  items: OrderItem[]
  total: number
  paymentMethod?: string
  address?: string
}

interface OrderDetailsModalProps {
  order: Order
  onClose: () => void
}

export function OrderDetailsModal({ order, onClose }: OrderDetailsModalProps) {
  const statusLabels = {
    paid: 'Pago',
    pending: 'Aguardando Pagamento',
    cancelled: 'Cancelado',
    shipped: 'Enviado',
    delivered: 'Entregue',
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.Modal>
        <S.Header>
          <S.Title>Pedido #{order.id}</S.Title>
          <S.CloseButton onClick={onClose}>
            <X size={18} />
          </S.CloseButton>
        </S.Header>

        <S.Content>
          <S.Section>
            <S.SectionTitle>Informações do Pedido</S.SectionTitle>
            <S.InfoGrid>
              <S.InfoItem>
                <S.InfoLabel>Horário</S.InfoLabel>
                <S.InfoValue>{order.time}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel>Status</S.InfoLabel>
                <S.InfoValue>{statusLabels[order.status]}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel>Cliente</S.InfoLabel>
                <S.InfoValue>{order.customerName}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel>Telefone</S.InfoLabel>
                <S.InfoValue>{order.customerPhone}</S.InfoValue>
              </S.InfoItem>
              {order.paymentMethod && (
                <S.InfoItem>
                  <S.InfoLabel>Pagamento</S.InfoLabel>
                  <S.InfoValue>{order.paymentMethod}</S.InfoValue>
                </S.InfoItem>
              )}
              {order.address && (
                <S.InfoItem>
                  <S.InfoLabel>Endereço</S.InfoLabel>
                  <S.InfoValue>{order.address}</S.InfoValue>
                </S.InfoItem>
              )}
            </S.InfoGrid>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Itens do Pedido</S.SectionTitle>
            <S.ItemsList>
              {order.items.map((item) => (
                <S.Item key={item.id}>
                  <S.ItemInfo>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemQuantity>Qtd: {item.quantity}</S.ItemQuantity>
                  </S.ItemInfo>
                  <S.ItemPrice>{formatCurrency(item.price * item.quantity)}</S.ItemPrice>
                </S.Item>
              ))}
            </S.ItemsList>

            <S.TotalRow>
              <S.TotalLabel>Total</S.TotalLabel>
              <S.TotalValue>{formatCurrency(order.total)}</S.TotalValue>
            </S.TotalRow>
          </S.Section>
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}
