import { useState } from 'react'
import { Eye, MessageCircle, X, Truck, DollarSign } from 'lucide-react'
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
  status: 'paid' | 'pending' | 'cancelled' | 'shipped' | 'delivered'
  items: OrderItem[]
  total: number
  paymentMethod?: string
  address?: string
  shipped?: boolean
  createdAt: string
}

interface OrdersListProps {
  orders: Order[]
  delay?: number
  onContactWhatsApp?: (
    idCustomer: string,
    customerPhone: string,
    customerName: string,
    titulo: string,
  ) => void
  onControl?: (orderId: string, label: 'shipped' | 'canceled') => void
}

export function OrdersList({ orders, delay = 0, onContactWhatsApp, onControl }: OrdersListProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const LabelBlockAction = 'Este botão está desabilitado.'
  const totalOrders = orders.length
  const cancelledOrders = orders.filter((o) => o.status === 'cancelled').length
  const cancellationRate =
    totalOrders > 0 ? ((cancelledOrders / totalOrders) * 100).toFixed(1) : '0'

  const isButtonBlocked = (status: string) =>
    ['cancelled', 'shipped', 'delivered', 'pending'].includes(status)

  const statusLabels = {
    paid: 'Pago',
    pending: 'Aguardando',
    cancelled: 'Cancelado',
    shipped: 'Enviado',
    delivered: 'Entregue',
  }

  const isDateToday = (createdAt: string | Date): boolean => {
    const date = new Date(createdAt)
    const now = new Date()

    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    )
  }

  const formatDate = (createdAt: string | Date): string => {
    const date = new Date(createdAt)

    const formatted = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
    })

    // remove ponto do mês (jan.)
    return formatted.replace('.', '')
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
                  <S.TableHeadCell>Data/Hora</S.TableHeadCell>
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
                    <S.TimeCell>
                      {order.time} - {isDateToday(order.createdAt) || formatDate(order.createdAt)}
                    </S.TimeCell>
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
                        <S.ActionButton
                          $variant={order.status === 'pending' ? 'primary' : 'disable'}
                          onClick={() =>
                            order.status === 'pending' &&
                            onContactWhatsApp?.(
                              order.id,
                              order.customerName,
                              order.customerPhone,
                              'Resgate de pagamento',
                            )
                          }
                          title={
                            order.status === 'pending'
                              ? 'Reenviar link de pagamento'
                              : LabelBlockAction
                          }
                        >
                          <DollarSign size={14} />
                        </S.ActionButton>
                        <S.ActionButton
                          $variant="success"
                          onClick={() =>
                            onContactWhatsApp?.(
                              order.id,
                              order.customerName,
                              order.customerPhone,
                              'Contatar Cliente',
                            )
                          }
                          title="Chamar no WhatsApp"
                        >
                          <MessageCircle size={14} />
                        </S.ActionButton>
                      </S.ActionsContainer>
                    </S.TableCell>
                    <S.TableCell>
                      <S.ActionsContainer>
                        <S.ActionButton
                          $variant={isButtonBlocked(order.status) ? 'disable' : 'primary'}
                          onClick={() =>
                            isButtonBlocked(order.status) == false &&
                            onControl?.(order.id, 'shipped')
                          }
                          title={
                            isButtonBlocked(order.status)
                              ? LabelBlockAction
                              : 'Marcar como enviado.'
                          }
                        >
                          <Truck size={14} />
                        </S.ActionButton>

                        <S.ActionButton
                          $variant={
                            ['pending', 'paid'].includes(order.status) ? 'danger' : 'disable'
                          }
                          onClick={() =>
                            ['pending', 'paid'].includes(order.status) &&
                            onControl?.(order.id, 'canceled')
                          }
                          title={
                            ['cancelled', 'shipped', 'delivered'].includes(order.status)
                              ? LabelBlockAction
                              : 'Cancelar pedido.'
                          }
                        >
                          <X size={14} />
                        </S.ActionButton>
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
