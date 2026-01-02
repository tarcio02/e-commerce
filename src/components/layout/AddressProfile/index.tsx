import { MapPin, Trash2 } from 'lucide-react'
import type { Address } from '../../../pages/AddressSelector'
import * as S from './styles'

interface AddressCardProps {
  address: Address
  onRemove: () => void
}

const AddressProfile = ({ address, onRemove }: AddressCardProps) => {
  return (
    <S.CardContainer>
      <S.CardContent>
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
        </S.AddressInfo>

        <S.DeleteButton onClick={onRemove}>
          <Trash2 size={20} />
        </S.DeleteButton>
      </S.CardContent>
    </S.CardContainer>
  )
}

export default AddressProfile
