import { MapPin, Trash2, Check } from 'lucide-react'
import type { Address } from '../../../pages/AddressSelector'
import * as S from './styles'

interface AddressCardProps {
  address: Address
  isSelected: boolean
  onSelect: (id: string) => void
  onRemove: (id: string) => void
}

const AddressCard = ({ address, isSelected, onSelect, onRemove }: AddressCardProps) => {
  return (
    <S.CardContainer $isSelected={isSelected} onClick={() => onSelect(address.id)}>
      <S.CardContent>
        <S.Checkbox $isSelected={isSelected}>
          {isSelected && <Check size={16} color="white" />}
        </S.Checkbox>

        <S.AddressInfo>
          <S.AddressHeader>
            <S.IconWrapper>
              <MapPin size={20} />
            </S.IconWrapper>
            <S.AddressDetails>
              <S.StreetAddress>
                {address.street}, {address.number}
              </S.StreetAddress>
              {address.complement && <S.Complement>{address.complement}</S.Complement>}
            </S.AddressDetails>
          </S.AddressHeader>

          <S.LocationInfo>
            <S.LocationText>
              {address.neighborhood} - {address.ref}
            </S.LocationText>
            <S.ZipCode>CEP: {address.zipCode}</S.ZipCode>
          </S.LocationInfo>

          {address.active && (
            <S.DefaultBadge>
              <S.Badge>Endereço Padrão</S.Badge>
            </S.DefaultBadge>
          )}
        </S.AddressInfo>

        <S.DeleteButton
          onClick={(e) => {
            e.stopPropagation()
            onRemove(address.id)
          }}
        >
          <Trash2 size={20} />
        </S.DeleteButton>
      </S.CardContent>
    </S.CardContainer>
  )
}

export default AddressCard
