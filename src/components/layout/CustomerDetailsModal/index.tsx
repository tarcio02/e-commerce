import { X, Package, Sparkles } from 'lucide-react'
import * as S from './styles'

interface Product {
  name: string
  count: number
}

interface Customer {
  id: string
  name: string
  phone: string
  lastOrderDate: string
  totalOrders: number
  averageTicket: number
  status: 'ativo' | 'inativo'
  topProducts?: Product[]
  aiInsight?: string
}

interface CustomerDetailsModalProps {
  customer: Customer | null
  onClose: () => void
}

function CustomerDetailsModal({ customer, onClose }: CustomerDetailsModalProps) {
  if (!customer) return null

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  // Mock data for demonstration
  const topProducts: Product[] = customer.topProducts || [
    { name: 'Camiseta Básica', count: 8 },
    { name: 'Calça Jeans', count: 5 },
    { name: 'Tênis Esportivo', count: 3 },
    { name: 'Jaqueta Couro', count: 2 },
  ]

  const aiInsight =
    customer.aiInsight ||
    'Cliente fiel que compra a cada 10 dias. Preferência por produtos casuais. Sugestão: oferecer desconto em lançamentos de camisetas.'

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.CustomerInfo>
            <S.Avatar>{getInitials(customer.name)}</S.Avatar>
            <S.CustomerDetails>
              <S.CustomerName>{customer.name}</S.CustomerName>
              <S.CustomerPhone>{customer.phone}</S.CustomerPhone>
            </S.CustomerDetails>
          </S.CustomerInfo>
          <S.CloseButton onClick={onClose}>
            <X size={20} />
          </S.CloseButton>
        </S.Header>

        <S.Content>
          <S.Section>
            <S.SectionTitle>Histórico Resumido</S.SectionTitle>
            <S.StatsGrid>
              <S.StatItem>
                <S.StatValue>{customer.totalOrders}</S.StatValue>
                <S.StatLabel>Pedidos</S.StatLabel>
              </S.StatItem>
              <S.StatItem>
                <S.StatValue>{formatCurrency(customer.averageTicket)}</S.StatValue>
                <S.StatLabel>Ticket Médio</S.StatLabel>
              </S.StatItem>
              <S.StatItem>
                <S.StatValue>
                  {formatCurrency(customer.averageTicket * customer.totalOrders)}
                </S.StatValue>
                <S.StatLabel>Total Gasto</S.StatLabel>
              </S.StatItem>
            </S.StatsGrid>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Produtos Mais Comprados</S.SectionTitle>
            <S.ProductsGrid>
              {topProducts.slice(0, 4).map((product, index) => (
                <S.ProductItem key={index}>
                  <S.ProductImage>
                    <Package size={16} />
                  </S.ProductImage>
                  <S.ProductInfo>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.ProductCount>{product.count}x comprado</S.ProductCount>
                  </S.ProductInfo>
                </S.ProductItem>
              ))}
            </S.ProductsGrid>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Insight de IA</S.SectionTitle>
            <S.AIInsightBox>
              <S.AIIcon>
                <Sparkles size={16} />
              </S.AIIcon>
              <S.AIContent>
                <S.AILabel>Análise Inteligente</S.AILabel>
                <S.AIText>{aiInsight}</S.AIText>
              </S.AIContent>
            </S.AIInsightBox>
          </S.Section>
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default CustomerDetailsModal
