import { useState } from 'react'
import { Eye, Send, MessageCircle, X, Truck } from 'lucide-react'
import { OrderDetailsModal } from '../../layout/OrderDetailsModal'
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
  status: 'paid' | 'pending' | 'cancelled'
  items: OrderItem[]
  total: number
  paymentMethod?: string
  address?: string
  shipped?: boolean
}

interface OrdersListProps {
  orders: Order[]
  delay?: number
  onResendPaymentLink?: (orderId: string) => void
  onContactWhatsApp?: (phone: string, customerName: string) => void
  onCancelOrder?: (orderId: string) => void
  onMarkAsShipped?: (orderId: string) => void
}

export function OrdersList({
  orders,
  delay = 0,
  onResendPaymentLink,
  onContactWhatsApp,
  onCancelOrder,
  onMarkAsShipped,
}: OrdersListProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const totalOrders = orders.length
  const cancelledOrders = orders.filter((o) => o.status === 'cancelled').length
  const cancellationRate =
    totalOrders > 0 ? ((cancelledOrders / totalOrders) * 100).toFixed(1) : '0'

  const statusLabels = {
    paid: 'Pago',
    pending: 'Aguardando',
    cancelled: 'Cancelado',
  }

  const handleWhatsAppClick = (phone: string, customerName: string) => {
    if (onContactWhatsApp) {
      onContactWhatsApp(phone, customerName)
    } else {
      const cleanPhone = phone.replace(/\D/g, '')
      const message = encodeURIComponent(`Olá ${customerName}, tudo bem?`)
      window.open(`https://wa.me/55${cleanPhone}?text=${message}`, '_blank')
    }
  }

  return (
    <>
      <S.Container $delay={delay}>
        <S.Header>
          <S.Title>Pedidos e Vendas</S.Title>
          <S.SummaryContainer>
            <S.SummaryItem>
              <S.SummaryLabel>Total de Pedidos:</S.SummaryLabel>
              <S.SummaryValue>{totalOrders}</S.SummaryValue>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryLabel>Taxa de Cancelamento:</S.SummaryLabel>
              <S.CancellationRate $high={Number(cancellationRate) > 10}>
                {cancellationRate}%
              </S.CancellationRate>
            </S.SummaryItem>
          </S.SummaryContainer>
        </S.Header>

        {orders.length === 0 ? (
          <S.EmptyState>Nenhum pedido encontrado</S.EmptyState>
        ) : (
          <S.TableWrapper>
            <S.Table>
              <S.TableHead>
                <tr>
                  <S.TableHeadCell>Horário</S.TableHeadCell>
                  <S.TableHeadCell>Cliente</S.TableHeadCell>
                  <S.TableHeadCell>Detalhes</S.TableHeadCell>
                  <S.TableHeadCell>Status</S.TableHeadCell>
                  <S.TableHeadCell>Ações Rápidas</S.TableHeadCell>
                  <S.TableHeadCell>Controle</S.TableHeadCell>
                </tr>
              </S.TableHead>
              <S.TableBody>
                {orders.map((order, index) => (
                  <S.TableRow key={order.id} $index={index}>
                    <S.TimeCell>{order.time}</S.TimeCell>
                    <S.TableCell>
                      <S.CustomerName>{order.customerName}</S.CustomerName>
                    </S.TableCell>
                    <S.TableCell>
                      <S.DetailsButton onClick={() => setSelectedOrder(order)}>
                        <Eye size={16} />
                      </S.DetailsButton>
                    </S.TableCell>
                    <S.TableCell>
                      <S.StatusBadge $status={order.status}>
                        <S.StatusDot $status={order.status} />
                        {statusLabels[order.status]}
                      </S.StatusBadge>
                    </S.TableCell>
                    <S.TableCell>
                      <S.ActionsContainer>
                        {order.status === 'pending' && (
                          <S.ActionButton
                            $variant="primary"
                            onClick={() => onResendPaymentLink?.(order.id)}
                            title="Reenviar link de pagamento"
                          >
                            <Send size={14} />
                            Link
                          </S.ActionButton>
                        )}
                        <S.ActionButton
                          $variant="success"
                          onClick={() =>
                            handleWhatsAppClick(order.customerPhone, order.customerName)
                          }
                          title="Chamar no WhatsApp"
                        >
                          <MessageCircle size={14} />
                          WhatsApp
                        </S.ActionButton>
                      </S.ActionsContainer>
                    </S.TableCell>
                    <S.TableCell>
                      <S.ActionsContainer>
                        {order.status !== 'cancelled' && (
                          <>
                            {order.status === 'paid' && !order.shipped && (
                              <S.ActionButton
                                $variant="primary"
                                onClick={() => onMarkAsShipped?.(order.id)}
                                title="Marcar como enviado"
                              >
                                <Truck size={14} />
                                Enviado
                              </S.ActionButton>
                            )}
                            <S.ActionButton
                              $variant="danger"
                              onClick={() => onCancelOrder?.(order.id)}
                              title="Cancelar pedido"
                            >
                              <X size={14} />
                              Cancelar
                            </S.ActionButton>
                          </>
                        )}
                      </S.ActionsContainer>
                    </S.TableCell>
                  </S.TableRow>
                ))}
              </S.TableBody>
            </S.Table>
          </S.TableWrapper>
        )}
      </S.Container>

      {selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </>
  )
}
