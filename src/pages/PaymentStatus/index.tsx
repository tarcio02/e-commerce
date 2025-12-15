import * as S from './styles'
import { OrderStatus } from '../../components/layout/OrderStatus'
import { OrderItems } from '../../components/layout/OrderItems'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { MapPin, Truck } from 'lucide-react'
import { Separator } from '../../components/ui/Separator'
import { useGetOrderStatusQuery } from '../../services/OrderStatus.api'
import { formatPrice } from '../../utils/formatPrice'

const PaymentStatus = () => {
  const pedidoId = new URLSearchParams(window.location.search).get('pedido_id') ?? ''

  const { data, isLoading, isError, error, refetch } = useGetOrderStatusQuery(pedidoId, {
    skip: !pedidoId,
  })

  if (isLoading) return <div>Carregando</div>

  if (isError) {
    console.error(error)
    return (
      <div>
        Ocorreu um erro ao carregar o pedido.
        <button onClick={() => refetch()}>Tentar novamente</button>
      </div>
    )
  }

  if (!data) return <div>Pedido não encontrado.</div>

  const { pedido, itens, endereco } = data

  const shippingCost = pedido.metodo_envio === 'delivery' ? 10.0 : 0
  const discount = pedido.desconto ? 20.0 : 0

  const getStatusLabel = (status: string | null) => {
    const labels = {
      pending: 'Pagamento Pendente',
      confirmed: 'Confirmado, em Preparação',
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
    <S.StylesOrderStatus>
      <S.Content>
        {/* Status de pagamento do pedido*/}
        <OrderStatus
          status={pedido.status}
          getStatusLabel={getStatusLabel}
          getStatusVariant={getStatusVariant}
        />

        {/* Lista de intems do pedido */}
        <OrderItems items={itens} />

        {/* Endereço de entrega ou método de envio  */}
        <Card>
          <CardHeader>
            <S.CardTitleWrapper>
              <MapPin className="h-5 w-5" />
              <CardTitle>Informações de Envio</CardTitle>
            </S.CardTitleWrapper>
          </CardHeader>
          <CardContent>
            <S.AddressSection>
              {pedido.metodo_envio === 'delivery' ? (
                <S.AddressContent>
                  <S.AddressContent>
                    {endereco?.street}, {endereco?.number}
                  </S.AddressContent>
                  <S.AddressContent>{endereco?.complement}</S.AddressContent>
                  <S.AddressContent>
                    {endereco?.ref}, {endereco?.neighborhood}
                  </S.AddressContent>
                  <S.AddressContent>{endereco?.zipCode}</S.AddressContent>
                </S.AddressContent>
              ) : (
                <S.AddressContent>
                  O cliente irá retirar o pedido no estabelecimento.
                </S.AddressContent>
              )}
            </S.AddressSection>
          </CardContent>
        </Card>

        {/* Sumário final com valor e descontos do pedido */}
        <Card>
          <CardHeader>
            <S.CardTitleWrapper>
              <Truck className="h-5 w-5" />
              <CardTitle>Informações do Pagamento</CardTitle>
            </S.CardTitleWrapper>
          </CardHeader>
          <CardContent>
            <S.PricingRow>
              <S.PricingLabel>Subtotal</S.PricingLabel>
              <S.PricingValue>{formatPrice(pedido.subtotal)}</S.PricingValue>
            </S.PricingRow>
            <S.PricingRow>
              <S.PricingLabel>Frete</S.PricingLabel>
              <S.PricingValue>
                {pedido.metodo_envio === 'pickup' ? 'Grátis' : `${formatPrice(shippingCost)}`}
              </S.PricingValue>
            </S.PricingRow>
            {pedido.desconto !== 0 && (
              <S.DiscountRow>
                <span>Desconto</span>
                <span>-{formatPrice(discount)}</span>
              </S.DiscountRow>
            )}
            <Separator />
            <S.TotalRow>
              <span>Total</span>
              <span>{formatPrice(pedido.total)}</span>
            </S.TotalRow>
          </CardContent>
        </Card>
      </S.Content>
    </S.StylesOrderStatus>
  )
}

export default PaymentStatus
