import { User, Mail, Phone, ShoppingBag, Pencil, ChevronRight, Plus, MapPin } from 'lucide-react'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { useDeleteAddressMutation, useGetAddressQuery } from '../../services/address.api'
import Button from '../../components/ui/Button/Index'
import { useMemo, useState } from 'react'
import AddressProfile from '../../components/layout/AddressProfile'
import { useGetProfileDataQuery } from '../../services/profile.api'
import { useGetOrderHistoryQuery } from '../../services/OrderStatus.api'
import { supabase } from '../../services/supabaseClient'

const ConfigProfile = () => {
  const [selectedAddressId, setSelectedAddressId] = useState<string>('')
  const [editData, setEditData] = useState<boolean>(false)
  const [nome, setNome] = useState<string | undefined>('')
  const [email, setEmail] = useState<string | undefined>('')
  const [telefone, setTelefone] = useState<string | undefined>('')
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false)
  const [erroSubmiting, setErroSubmiting] = useState<string | null>('')

  const navigate = useNavigate()

  const { data, isLoading: loadingProfile, error: erroProfile } = useGetProfileDataQuery()
  const { data: orders, isError: erroOrders, isLoading: loadingOrders } = useGetOrderHistoryQuery()
  const {
    data: addresses,
    isLoading,
    error,
  } = useGetAddressQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  const [deleteAddress] = useDeleteAddressMutation()

  const onlyDigits = (v: string) => v.replace(/\D/g, '')

  const phoneE164 = useMemo(() => {
    const digits = onlyDigits(telefone ?? '')
    if (!digits) return ''
    return `+55${digits}`
  }, [telefone])

  if (isLoading || loadingProfile || loadingOrders) return <p>Carregando...</p>
  if (error || erroProfile || erroOrders) return <p>Erro: {String(error)}</p>

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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
  }

  const formatMonthYearPtBr = (date: string | Date): string => {
    const d = typeof date === 'string' ? new Date(date) : date

    return new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
      year: 'numeric',
    }).format(d)
  }

  const maskTelefone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const handleEdit = () => {
    setEditData(true)
    setNome(data?.metadata?.full_name)
    setEmail(data?.metadata?.email)
    setTelefone(data?.metadata?.phone)
  }

  const handleUpDate = async () => {
    setIsSubmiting(true)
    try {
      await supabase.auth.updateUser({
        email: email,
        data: { full_name: nome },
      })

      const { data: authData } = await supabase.auth.getUser()
      const user = authData.user
      if (!user) throw new Error('Não autenticado')

      const { data: current } = await supabase
        .from('profiles')
        .select('metadata')
        .eq('id', user.id)
        .single()

      const merged = { ...(current?.metadata ?? {}), phone: phoneE164 }
      await supabase.from('profiles').update({ metadata: merged }).eq('id', user.id)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setErroSubmiting(`Erro ao atualizar. ${err?.message ?? 'Erro inesperado.'}`)
      console.error('Erro ao cadastar:', erroSubmiting)
    } finally {
      setIsSubmiting(false)
    }
  }

  return (
    <S.Container>
      <S.Modal $isOpen={editData} onClick={() => setEditData(false)}>
        <S.ModalContainer onClick={(e) => e.stopPropagation()}>
          <S.CloseButton onClick={() => setEditData(false)}>X</S.CloseButton>
          <S.ModalContent>
            <S.LabelModal htmlFor="nome">Insira um novo nome</S.LabelModal>
            <S.InputModal id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <S.LabelModal htmlFor="email">Insira um novo email</S.LabelModal>
            <S.InputModal id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <S.LabelModal htmlFor="telefone">Insira um novo telefone</S.LabelModal>
            <S.InputModal
              id="telefone"
              value={maskTelefone(telefone ?? '')}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <S.BtnSalvar onClick={handleUpDate}>
              {isSubmiting ? 'Envidando...' : 'Salvar'}
            </S.BtnSalvar>
          </S.ModalContent>
        </S.ModalContainer>
      </S.Modal>
      <S.ProfileCard>
        <S.Header>
          <S.Avatar>{getInitials(data?.metadata?.full_name ?? '')}</S.Avatar>
          <S.Title>{data?.metadata?.full_name}</S.Title>
          <S.Subtitle>Membro desde {formatMonthYearPtBr(data?.created_at ?? '')}</S.Subtitle>
        </S.Header>

        <S.InfoSection>
          <S.InfoItem>
            <S.IconWrapper>
              <User />
            </S.IconWrapper>
            <S.InfoContent>
              <S.InfoLabel>Nome de Usuário</S.InfoLabel>
              <S.InfoValue>{data?.metadata?.full_name}</S.InfoValue>
            </S.InfoContent>
          </S.InfoItem>

          <S.InfoItem>
            <S.IconWrapper>
              <Mail />
            </S.IconWrapper>
            <S.InfoContent>
              <S.InfoLabel>Email</S.InfoLabel>
              <S.InfoValue>{data?.metadata?.email}</S.InfoValue>
            </S.InfoContent>
          </S.InfoItem>

          <S.InfoItem>
            <S.IconWrapper>
              <Phone />
            </S.IconWrapper>
            <S.InfoContent>
              <S.InfoLabel>Telefone</S.InfoLabel>
              <S.InfoValue>{maskTelefone(data?.metadata?.phone ?? '')}</S.InfoValue>
            </S.InfoContent>
          </S.InfoItem>

          <S.OrdersLink to="/checkout/history">
            <S.IconWrapper>
              <ShoppingBag />
            </S.IconWrapper>
            <S.InfoContent>
              <S.InfoLabel>Total de Pedidos</S.InfoLabel>
              <S.InfoValue>{orders?.length} pedidos</S.InfoValue>
            </S.InfoContent>
            <S.ArrowIcon>
              <ChevronRight size={24} />
            </S.ArrowIcon>
          </S.OrdersLink>
        </S.InfoSection>

        <S.EditButton onClick={handleEdit}>
          <Pencil />
          Editar Informações
        </S.EditButton>
        <S.AddressContainer>
          <S.AddressTitle>Seus Endereços</S.AddressTitle>
          <S.TopAddress>
            <S.AddressCount>Total: 3</S.AddressCount>
            <S.AddressButton to="//address/novo">
              <Plus />
              Adicionar
            </S.AddressButton>
          </S.TopAddress>
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
              <S.AddressList>
                {addresses?.map((address, index) => (
                  <AddressProfile
                    address={address}
                    onRemove={() => handleRemoveAddress(address.id)}
                    key={index}
                  />
                ))}
              </S.AddressList>
            )}
          </S.Content>
        </S.AddressContainer>
      </S.ProfileCard>
    </S.Container>
  )
}

export default ConfigProfile
