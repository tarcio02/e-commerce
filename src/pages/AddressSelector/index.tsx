import { useState } from 'react'
import { CircleCheckBig, MapPin, Plus } from 'lucide-react'
import AddressCard from '../../components/layout/AddressCard'
import Button from '../../components/ui/Button/Index'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { useGetAddressQuery } from '../../services/address.api'
// import { supabase } from '../../services/supabaseClient'

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

  const [selectedAddressId, setSelectedAddressId] = useState<string>()

  const {
    data: addresses,
    isLoading,
    error,
  } = useGetAddressQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {String(error)}</p>

  const handleSelectAddress = (id: string) => {
    setSelectedAddressId(id)
  }

  const handleRemoveAddress = () => {
    // setAddresses((prev) => prev?.filter((addr) => addr.id !== id))
    // if (selectedAddressId === id) {
    //   setSelectedAddressId(addresses?[0]?.id || '') id: string = parâmetro
    // }
  }

  // const handleAddress = async () => {
  //   try {
  //     const {
  //       data: { user },
  //       error: sessErr,
  //     } = await supabase.auth.getUser()
  //     if (sessErr || !user)
  //       throw new Error('É necessário estar autenticado para salvar o endereço.')

  //   } catch {
  //   } finally {
  //   }
  // }

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
                  onRemove={handleRemoveAddress}
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
                onClick={() => navigate('/pedido')}
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<CircleCheckBig size={20} />}
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
