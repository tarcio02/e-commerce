import { Card, CardHeader, CardContent, CardTitle } from '../../ui/Card'
import { RadioGroup, RadioGroupItem } from '../../ui/RadioGroup'
import { Label } from '../../ui/Label'
import Button from '../../ui/Button/Index'
import { Separator } from '../../ui/Separator'
import { Truck, MapPin } from 'lucide-react'
import {
  CardTitleWrapper,
  RadioWrapper,
  AddressSection,
  AddressContent,
  AddressLabel,
  AddressText,
} from './styles'

interface ShippingMethodProps {
  shippingMethod: 'pickup' | 'delivery'
  setShippingMethod: (method: 'pickup' | 'delivery') => void
  selectedAddress: string | null
  onAddressClick: () => void
  orderStatus: string | null
}

export const ShippingMethod = ({
  shippingMethod,
  setShippingMethod,
  selectedAddress,
  onAddressClick,
  orderStatus,
}: ShippingMethodProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitleWrapper>
          <Truck className="h-5 w-5" />
          <CardTitle>Método de Envio</CardTitle>
        </CardTitleWrapper>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={shippingMethod}
          onValueChange={(value) => setShippingMethod(value as 'pickup' | 'delivery')}
        >
          <RadioWrapper>
            <RadioGroupItem value="pickup" id="pickup" />
            <Label htmlFor="pickup" style={{ cursor: 'pointer' }}>
              Retirada no Local
            </Label>
          </RadioWrapper>
          <RadioWrapper>
            <RadioGroupItem value="delivery" id="delivery" />
            <Label htmlFor="delivery" style={{ cursor: 'pointer' }}>
              Entrega
            </Label>
          </RadioWrapper>
        </RadioGroup>

        {shippingMethod === 'delivery' && (
          <div style={{ marginTop: '1rem' }}>
            <Separator style={{ marginBottom: '0.75rem' }} />
            <AddressSection>
              <MapPin className="h-5 w-5" />
              <AddressContent>
                {selectedAddress ? (
                  <div>
                    <AddressLabel>Endereço de Entrega:</AddressLabel>
                    <AddressText>{selectedAddress}</AddressText>
                  </div>
                ) : (
                  <p>Adicione um endereço para entrega</p>
                )}
              </AddressContent>
            </AddressSection>
            {orderStatus !== 'shipped' && (
              <Button
                variant="outline"
                style={{ width: '100%', marginTop: '0.75rem' }}
                onClick={onAddressClick}
              >
                {selectedAddress ? 'Alterar Endereço' : 'Selecionar Endereço'}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
