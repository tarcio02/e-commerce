import { Card, CardHeader, CardContent, CardTitle } from '../../ui/Card'
import { Input } from '../../ui/Input'
// import { Label } from "../../ui/label";
import Button from '../../ui/Button/Index'
import { Separator } from '../../ui/Separator'
import { Tag } from 'lucide-react'
import {
  LabelWrapper,
  CouponApplied,
  CouponCode,
  PricingRow,
  PricingLabel,
  PricingValue,
  DiscountRow,
  TotalRow,
  CouponInputWrapper,
} from './styles'
import ModalCart, { type ModalCartRef } from '../ModalCart'
import { useRef } from 'react'

interface OrderSummaryProps {
  couponCode: string
  setCouponCode: (code: string) => void
  appliedCoupon: string | null
  setAppliedCoupon: (code: string | null) => void
  subtotal: number
  shippingMethod: 'pickup' | 'delivery'
  shippingCost: number
  discount: number
  total: number
  // handleApplyCoupon: () => void
}

export const OrderSummary = ({
  couponCode,
  setCouponCode,
  appliedCoupon,
  setAppliedCoupon,
  subtotal,
  shippingMethod,
  shippingCost,
  discount,
  total,
  // handleApplyCoupon,
}: OrderSummaryProps) => {
  const modalRef = useRef<ModalCartRef>(null)

  const handleApplyCoupon = () => {
    modalRef.current?.show({
      variant: 'warning',
      title: 'O cupom não é válido ',
      message: 'Este cupom não pode ser usado.',
      durationMs: 5000,
    })
    setCouponCode('')
    return
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo do Pedido</CardTitle>
      </CardHeader>
      <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Coupon */}
        <div>
          <LabelWrapper htmlFor="coupon">
            <Tag className="h-4 w-4" />
            Cupom de Desconto
          </LabelWrapper>
          {appliedCoupon ? (
            <CouponApplied>
              <CouponCode>{appliedCoupon}</CouponCode>
              <Button variant="ghost" size="sm" onClick={() => setAppliedCoupon(null)}>
                Remover
              </Button>
            </CouponApplied>
          ) : (
            <CouponInputWrapper>
              <Input
                id="coupon"
                placeholder="Digite o código"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button onClick={handleApplyCoupon} variant="primary">
                Aplicar
              </Button>
            </CouponInputWrapper>
          )}
        </div>

        <Separator />

        {/* Pricing */}
        <div>
          <PricingRow>
            <PricingLabel>Subtotal</PricingLabel>
            <PricingValue>R$ {subtotal.toFixed(2)}</PricingValue>
          </PricingRow>
          <PricingRow>
            <PricingLabel>Frete</PricingLabel>
            <PricingValue>
              {shippingMethod === 'pickup' ? 'Grátis' : `R$ ${shippingCost.toFixed(2)}`}
            </PricingValue>
          </PricingRow>
          {appliedCoupon && (
            <DiscountRow>
              <span>Desconto</span>
              <span>- R$ {discount.toFixed(2)}</span>
            </DiscountRow>
          )}
          <Separator />
          <TotalRow>
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </TotalRow>
        </div>

        <Button variant="primary">Finalizar Pedido</Button>
        <ModalCart ref={modalRef} offsetPx={120} enterMs={300} exitMs={300} />
      </CardContent>
    </Card>
  )
}
