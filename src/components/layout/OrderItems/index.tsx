import { Card, CardHeader, CardContent, CardTitle } from '../../ui/Card'
import {
  ItemRow,
  ItemInfo,
  ItemName,
  ItemQuantity,
  ItemPrice,
  ItemPriceContainer,
  ItemUnitPrice,
  ItemImagem,
  CardTitleWrapper,
} from './styles'
import { formatPrice } from '../../../utils/formatPrice'
import { ListChecks } from 'lucide-react'

interface OrderItem {
  id: string
  imagem?: string
  nome: string
  quantidade: number
  preco: number
  preco_total: number
}

interface OrderItemsProps {
  items: OrderItem[]
}

export const OrderItems = ({ items }: OrderItemsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitleWrapper>
          <ListChecks />
          <CardTitle>Itens do Pedido</CardTitle>
        </CardTitleWrapper>
      </CardHeader>
      <CardContent>
        <div>
          {items.map((item) => (
            <ItemRow key={item.id}>
              <ItemInfo>
                <ItemImagem src={item.imagem} />
                <div>
                  <ItemName>{item.nome}</ItemName>
                  <ItemQuantity>Quantidade: {item.quantidade}</ItemQuantity>
                </div>
              </ItemInfo>
              <ItemPriceContainer>
                <ItemPrice>{formatPrice(item.preco_total)}</ItemPrice>
                <ItemUnitPrice>{formatPrice(item.preco)} cada</ItemUnitPrice>
              </ItemPriceContainer>
            </ItemRow>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
