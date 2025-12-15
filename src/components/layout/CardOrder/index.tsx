import { Package, ChevronRight, Truck, CheckCircle, Clock, XCircle } from 'lucide-react'
import {
  CardContainer,
  CardHeader,
  HeaderInfo,
  InfoBlock,
  InfoLabel,
  InfoValue,
  CardContent,
  ItemsList,
  ItemRow,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemQuantity,
  ItemPrice,
  Button,
  MoreItems,
  CardFooter,
  TotalLabel,
  TotalValue,
  BagdeStatus,
} from './styles'
import { Card } from '../../ui/Card'
import { useNavigate } from 'react-router-dom'
import type { Order } from '../../../services/OrderStatus.api'

interface OrderCardProps {
  order: Order
  index: number
}

const statusConfig = {
  pending: {
    label: 'Aguardando Pagamento',
    icon: Clock,
    styles: {
      color: '#f59f0a',
      bg: 'rgba(245, 159, 10, 0.1)',
      border: 'rgba(245, 159, 10, 0.3)',
    },
  },
  confirmed: {
    label: 'Em Preparação',
    icon: Package,
    styles: {
      color: '#0da2e7',
      bg: 'rgba(13, 162, 231, 0.1)',
      border: 'rgba(13, 162, 231, 0.3)',
    },
  },
  shipped: {
    label: 'Em Transporte',
    icon: Truck,
    styles: {
      color: '#0da2e7',
      bg: 'rgba(13, 162, 231, 0.1)',
      border: 'rgba(13, 162, 231, 0.3)',
    },
  },
  delivered: {
    label: 'Entregue',
    icon: CheckCircle,
    styles: {
      color: '#16a249',
      bg: 'rgba(22, 162, 73, 0.1)',
      border: 'rgba(22, 162, 73, 0.3)',
    },
  },
  cancelled: {
    label: 'Cancelado',
    icon: XCircle,
    styles: {
      color: '#ef4343',
      bg: 'rgba(239, 67, 67, 0.1)',
      border: 'rgba(239, 67, 67, 0.3)',
    },
  },
}

const OrderCard = ({ order, index }: OrderCardProps) => {
  const navigate = useNavigate()

  const status = statusConfig[order.status]
  const StatusIcon = status.icon

  const formatDate = (data: string) => {
    const dataTratada = new Date(data)

    const dataFormatada = dataTratada.toLocaleDateString('pt-BR')
    const horaFormatada = dataTratada.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
    return `${dataFormatada} às ${horaFormatada}`
  }

  return (
    <Card>
      <CardContainer $delay={index * 100}>
        <CardHeader>
          <HeaderInfo>
            <InfoBlock $hideOnMobile>
              <InfoLabel>Data</InfoLabel>
              <InfoValue>#{formatDate(order.created_at)}</InfoValue>
            </InfoBlock>
            <InfoBlock>
              <InfoLabel>Pedido</InfoLabel>
              <InfoValue $bold>#{order.id}</InfoValue>
            </InfoBlock>
          </HeaderInfo>

          <BagdeStatus styles={status.styles}>
            <StatusIcon />
            {status.label}
          </BagdeStatus>
        </CardHeader>

        <CardContent>
          <ItemsList>
            {order.items.slice(0, 2).map((item) => (
              <ItemRow key={item.produto_id}>
                <ItemImage>
                  <img src={item.imagem || undefined} alt={item.nome} />
                </ItemImage>
                <ItemInfo>
                  <ItemName>{item.nome}</ItemName>
                  <ItemQuantity>Qtd: {item.quantidade}</ItemQuantity>
                </ItemInfo>
                <ItemPrice>R$ {item.total_item.toFixed(2).replace('.', ',')}</ItemPrice>
              </ItemRow>
            ))}

            {order.items.length > 2 && <MoreItems>+ {order.items.length - 2} item(ns)</MoreItems>}
          </ItemsList>

          <CardFooter>
            <div>
              <TotalLabel>Total do Pedido</TotalLabel>
              <TotalValue>R$ {order.total.toFixed(2).replace('.', ',')}</TotalValue>
            </div>

            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              onClick={() => navigate(`/checkout/status?pedido_id=${order.id}`)}
            >
              Ver Detalhes
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        </CardContent>
      </CardContainer>
    </Card>
  )
}

export default OrderCard
