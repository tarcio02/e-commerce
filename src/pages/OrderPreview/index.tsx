import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderHeader } from '../../components/layout/OrderHeader'
import { OrderStatus } from '../../components/layout/OrderStatus'
import { OrderItems } from '../../components/layout/OrderItems'
import { ShippingMethod } from '../../components/layout/ShippingMethods'
import { OrderSummary } from '../../components/layout/OrderSummary'
import { MainContent, ContentGrid, LeftColumn, RightColumn, StylesOrderPreview } from './styles'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  selectOrderStatus,
  selectEnderecoView,
} from '../../features/orderPreview/orderPreview.selectors'
import { selectCartLineItemsForRender, selectCartTotals } from '../../features/cart/cart.selectors'
import { setOrderMetodoEnvio } from '../../features/orderPreview/orderPreview.slice'

// Mock data - você substituirá isso com dados reais

const OrderPreview = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const mockOrderItems = useAppSelector(selectCartLineItemsForRender)

  const [shippingMethod, setShippingMethod] = useState<'pickup' | 'delivery'>('delivery')

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null)

  const address = useAppSelector(selectEnderecoView)

  useEffect(() => {
    setSelectedAddress(address)
  }, [address])

  useEffect(() => {
    dispatch(setOrderMetodoEnvio(shippingMethod))
  }, [dispatch, shippingMethod])

  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)

  const orderStatus = useAppSelector(selectOrderStatus)
  const shippingCost = shippingMethod === 'delivery' ? 10.0 : 0
  const discount = appliedCoupon ? 20.0 : 0

  const { subtotal } = useAppSelector(selectCartTotals)
  const total = subtotal + shippingCost - discount

  // const handleApplyCoupon = () => {
  //   if (couponCode.trim()) {
  //     setAppliedCoupon(couponCode)
  //     setCouponCode('')
  //   }
  // }

  const getStatusLabel = (status: string | null) => {
    const labels = {
      pending: 'Pagamento Pendente',
      confirmed: 'Em Preparação',
      shipped: 'A Caminho',
      delivered: 'Entregue',
    }
    return labels[status as keyof typeof labels] || status
  }

  const getStatusVariant = (status: string | null) => {
    const variants = {
      pending: 'secondary' as const,
      confirmed: 'default' as const,
      shipped: 'default' as const,
      delivered: 'default' as const,
    }
    return variants[status as keyof typeof variants] || ('secondary' as const)
  }

  return (
    <StylesOrderPreview>
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
    </StylesOrderPreview>
  )
}

export default OrderPreview
