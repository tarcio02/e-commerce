import { useState } from 'react'
import { CircleCheckBig, MapPin, Plus } from 'lucide-react'
import AddressCard from '../../components/layout/AddressCard'
import Button from '../../components/ui/Button/Index'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { useGetAddressQuery, useDeleteAddressMutation } from '../../services/address.api'
import {
  setOrderEnderecoId,
  setOrderEnderecoView,
} from '../../features/orderPreview/orderPreview.slice'
import { useAppDispatch } from '../../app/hooks'

export interface Address {
  id: string
  street: string
  neighborhood: string
  number: string
  zipCode: string
  complement?: string
  ref: string
  active?: boolean
}

const AddressSelector = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [selectedAddressId, setSelectedAddressId] = useState<string>('')

  const {
    data: addresses,
    isLoading,
    error,
  } = useGetAddressQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  const [deleteAddress, { isLoading: isDeleting }] = useDeleteAddressMutation()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {String(error)}</p>

  const handleSelectAddress = (id: string) => {
    setSelectedAddressId(id)
  }

  const handleRemoveAddress = async (id: string) => {
    try {
      await deleteAddress(id).unwrap()

      if (selectedAddressId === id) {
        const remaining = addresses?.filter((addr) => addr.id !== id) ?? []
        setSelectedAddressId(remaining[0]?.id)
      }
    } catch (err) {
      console.error('Erro ao remover endereço:', err)
    }
  }

  const handleAddress = async (addr_id: string) => {
    const address = addresses?.find((addr) => addr.id === addr_id)

    dispatch(setOrderEnderecoId(address?.id ?? null))
    dispatch(
      setOrderEnderecoView(
        `Rua ${address?.street}, ${address?.number} - ${address?.complement} - ${address?.neighborhood} `,
      ),
    )
    navigate('/preview-pedido')
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <MapPin size={24} />
          <S.Title>Selecione o Endereço de Entrega</S.Title>
        </S.HeaderContent>
        <S.Subtitle>Escolha onde deseja receber seu pedido</S.Subtitle>
      </S.Header>

      <S.Content>
        {addresses?.length === 0 ? (
          <S.EmptyState>
            <S.EmptyStateIcon>
              <MapPin size={64} />
            </S.EmptyStateIcon>
            <S.EmptyStateText>Nenhum endereço cadastrado</S.EmptyStateText>
            <Button
              onClick={() => navigate('/address/novo')}
              variant="primary"
              size="md"
              leftIcon={<Plus size={20} />}
            >
              Adicionar Primeiro Endereço
            </Button>
          </S.EmptyState>
        ) : (
          <>
            <S.AddressList>
              {addresses?.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  isSelected={selectedAddressId === address.id}
                  onSelect={handleSelectAddress}
                  onRemove={() => handleRemoveAddress(address.id)}
                />
              ))}
            </S.AddressList>

            <S.AddButtonContainer>
              <Button
                onClick={() => navigate('/address/novo')}
                variant="outline"
                size="md"
                fullWidth
                leftIcon={<Plus size={20} />}
              >
                Adicionar Novo Endereço
              </Button>
              <Button
                onClick={() => handleAddress(selectedAddressId)}
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<CircleCheckBig size={20} />}
                disabled={!selectedAddressId || isDeleting}
              >
                Realizar Pedido
              </Button>
            </S.AddButtonContainer>
          </>
        )}
      </S.Content>
    </S.Container>
  )
}

export default AddressSelector
