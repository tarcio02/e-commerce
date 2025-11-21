import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderHeader } from '../../components/layout/OrderHeader'
import { OrderStatus } from '../../components/layout/OrderStatus'
import { OrderItems } from '../../components/layout/OrderItems'
import { ShippingMethod } from '../../components/layout/ShippingMethods'
import { OrderSummary } from '../../components/layout/OrderSummary'
import { MainContent, ContentGrid, LeftColumn, RightColumn } from './styles'

// Mock data - você substituirá isso com dados reais
const mockOrderItems = [
  { id: 1, name: 'Produto Example 1', quantity: 2, price: 99.9 },
  { id: 2, name: 'Produto Example 2', quantity: 1, price: 149.9 },
  { id: 3, name: 'Produto Example 3', quantity: 3, price: 49.9 },
]

const OrderPreview = () => {
  const navigate = useNavigate()
  const [shippingMethod, setShippingMethod] = useState<'pickup' | 'delivery'>('delivery')

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  useEffect(() => {
    setSelectedAddress('rua ana pires - residencial olivia - apto 101')
  }, [])

  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  const orderStatus = 'shipped' // pending, confirmed, shipped, delivered
  const shippingCost = shippingMethod === 'delivery' ? 15.0 : 0
  const discount = appliedCoupon ? 20.0 : 0

  const subtotal = mockOrderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const total = subtotal + shippingCost - discount

  // const handleApplyCoupon = () => {
  //   if (couponCode.trim()) {
  //     setAppliedCoupon(couponCode)
  //     setCouponCode('')
  //   }
  // }

  const getStatusLabel = (status: string) => {
    const labels = {
      pending: 'Pagamento Pendente',
      confirmed: 'Em Preparação',
      shipped: 'A Caminho',
      delivered: 'Entregue',
    }
    return labels[status as keyof typeof labels] || status
  }

  const getStatusVariant = (status: string) => {
    const variants = {
      pending: 'secondary' as const,
      confirmed: 'default' as const,
      shipped: 'default' as const,
      delivered: 'default' as const,
    }
    return variants[status as keyof typeof variants] || ('secondary' as const)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'hsl(var(--background))' }}>
      <OrderHeader title="Preview do Pedido" />

      <MainContent>
        <ContentGrid>
          <LeftColumn>
            <OrderStatus
              status={orderStatus}
              getStatusLabel={getStatusLabel}
              getStatusVariant={getStatusVariant}
            />

            <OrderItems items={mockOrderItems} />

            <ShippingMethod
              shippingMethod={shippingMethod}
              setShippingMethod={setShippingMethod}
              selectedAddress={selectedAddress}
              onAddressClick={() => navigate('/address')}
              orderStatus={orderStatus}
            />
          </LeftColumn>

          <RightColumn>
            <OrderSummary
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              appliedCoupon={appliedCoupon}
              setAppliedCoupon={setAppliedCoupon}
              subtotal={subtotal}
              shippingMethod={shippingMethod}
              shippingCost={shippingCost}
              discount={discount}
              total={total}
              // handleApplyCoupon={handleApplyCoupon}
            />
          </RightColumn>
        </ContentGrid>
      </MainContent>
    </div>
  )
}

export default OrderPreview
