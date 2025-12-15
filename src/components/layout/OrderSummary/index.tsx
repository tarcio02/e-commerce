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
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
  selectEnderecoId,
  selectMetodoEnvio,
  selectCarrinhoId,
  selectIsLoading,
} from '../../../features/orderPreview/orderPreview.selectors'
import { setOrderIsLoading } from '../../../features/orderPreview/orderPreview.slice'
import { paymentPreference } from '../../../services/paymentPreference'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const modalRef = useRef<ModalCartRef>(null)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsLoading)

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

  const endereco_id = useAppSelector(selectEnderecoId)
  const metodo_envio = useAppSelector(selectMetodoEnvio)
  const carrinho_id = useAppSelector(selectCarrinhoId)

  const handleOrder = async () => {
    if (metodo_envio === 'delivery') {
      if (!endereco_id) {
        modalRef.current?.show({
          variant: 'warning',
          title: 'Endereço vazio!',
          message: 'Selecione um Endereço de entrega.',
          durationMs: 5000,
        })
        return
      }
    }

    // Chama edge function de preferência de pagamento
    try {
      dispatch(setOrderIsLoading(true))
      const resp = await paymentPreference({
        carrinho_id,
        metodo_envio,
        endereco_id,
      })

      const url = resp.initPoint ?? resp.checkoutUrl
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer')
      }

      navigate('/checkout/history', {
        state: {
          fromPreview: true,
        },
      })

      dispatch(setOrderIsLoading(false))
    } catch (e: unknown) {
      dispatch(setOrderIsLoading(false))
      console.log('Erro:' + e)
      alert('Não foi possível iniciar o pagamento.')

      modalRef.current?.show({
        variant: 'warning',
        title: 'Erro em gerar Pagamento!',
        message: 'Não foi possível iniciar o pagamento.',
        durationMs: 5000,
      })
    }
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
            <PricingValue>{formatPrice(subtotal)}</PricingValue>
          </PricingRow>
          <PricingRow>
            <PricingLabel>Frete</PricingLabel>
            <PricingValue>
              {shippingMethod === 'pickup' ? 'Grátis' : `${formatPrice(shippingCost)}`}
            </PricingValue>
          </PricingRow>
          {appliedCoupon && (
            <DiscountRow>
              <span>Desconto</span>
              <span>- R$ {formatPrice(discount)}</span>
            </DiscountRow>
          )}
          <Separator />
          <TotalRow>
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </TotalRow>
        </div>

        <Button variant="primary" onClick={handleOrder}>
          {isLoading ? 'Gerando Pagamento' : 'Gerar Pedido'}
        </Button>
        <ModalCart ref={modalRef} offsetPx={120} enterMs={300} exitMs={300} />
      </CardContent>
    </Card>
  )
}
