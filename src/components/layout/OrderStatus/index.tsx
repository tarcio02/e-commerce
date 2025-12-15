import { Card, CardHeader } from '../../ui/Card'
import { Badge } from '../../ui/Badge'
import { Package } from 'lucide-react'
import { CardHeaderContent, CardTitleWrapper, StyledCardTitle } from './styles'

interface OrderStatusProps {
  status: string | null
  getStatusLabel: (status: string | null) => string | null
  getStatusVariant: (status: string | null) => 'secondary' | 'default'
}

export const OrderStatus = ({ status, getStatusLabel, getStatusVariant }: OrderStatusProps) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderContent>
          <CardTitleWrapper>
            <Package className="h-5 w-5" />
            <StyledCardTitle>Status do Pedido</StyledCardTitle>
          </CardTitleWrapper>
          <Badge variant={getStatusVariant(status)}>{getStatusLabel(status)}</Badge>
        </CardHeaderContent>
      </CardHeader>
    </Card>
  )
}
