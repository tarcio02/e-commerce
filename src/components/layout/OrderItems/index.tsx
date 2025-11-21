import { Card, CardHeader, CardContent, CardTitle } from '../../ui/Card'
import {
  ItemRow,
  ItemInfo,
  ItemName,
  ItemQuantity,
  ItemPrice,
  ItemPriceContainer,
  ItemUnitPrice,
} from './styles'

interface OrderItem {
  id: number
  name: string
  quantity: number
  price: number
}

interface OrderItemsProps {
  items: OrderItem[]
}

export const OrderItems = ({ items }: OrderItemsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Itens do Pedido</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {items.map((item) => (
            <ItemRow key={item.id}>
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemQuantity>Quantidade: {item.quantity}</ItemQuantity>
              </ItemInfo>
              <ItemPriceContainer>
                <ItemPrice>R$ {(item.price * item.quantity).toFixed(2)}</ItemPrice>
                <ItemUnitPrice>R$ {item.price.toFixed(2)} cada</ItemUnitPrice>
              </ItemPriceContainer>
            </ItemRow>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
