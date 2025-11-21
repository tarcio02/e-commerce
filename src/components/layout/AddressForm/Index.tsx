import NotifyModal, { type NotifyModalRef } from '../../ui/NotifyModal/Index'
import * as S from './styles'
import Button from '../../ui/Button/Index'
import { MapPin, Plus } from 'lucide-react'
import { supabase } from '../../../services/supabaseClient'
// import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

export type TypeAddressForm = {
  street: string
  number: string
  complement: string
  neighborhood: string
  ref: string
  zipCode: string
}

const AddressForm = () => {
  // const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const notifyRef = useRef<NotifyModalRef>(null)

  const [formData, setFormData] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    ref: '',
    zipCode: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) {
      console.log('BLOQUEADO POR isSubmitting === true')
      return
    }

    // 🔍 1) VALIDAÇÃO PRIMEIRO (sem ligar modo "enviando")
    const missing = [
      !formData.street && 'Rua é obrigatória',
      !formData.number && 'Número é obrigatório',
      !formData.neighborhood && 'Bairro é obrigatório',
      !formData.complement &&
        'Adicione um complemento (ex: "Residencial Morada - apartamento 101")',
      !formData.zipCode && 'CEP é obrigatório',
    ].filter(Boolean) as string[]

    if (missing.length) {
      notifyRef.current?.show({
        variant: 'error',
        title: 'Campos obrigatórios',
        message: 'Por favor, corrija os campos abaixo:',
        fieldErrors: missing,
        dismissible: true,
      })
      // 👇 não mexe em isSubmitting aqui
      return
    }

    // 🟢 2) Se passou da validação, agora sim entra no fluxo "enviando"
    setIsSubmitting(true)

    try {
      // usuário autenticado
      const {
        data: { user },
        error: sessErr,
      } = await supabase.auth.getUser()
      if (sessErr || !user)
        throw new Error('É necessário estar autenticado para salvar o endereço.')

      // normaliza CEP (apenas números)
      const cep = (formData.zipCode || '').replace(/\D/g, '')

      // payload com os MESMOS nomes da sua tabela
      const payload: TypeAddressForm & {
        id_profile?: string
        created_at?: string
        updated_at?: string
      } = {
        street: formData.street.trim(),
        number: String(formData.number).trim(),
        complement: formData.complement.trim(),
        neighborhood: formData.neighborhood.trim(),
        ref: formData.ref.trim(),
        zipCode: cep,
        id_profile: user.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }

      const { error: dbErr } = await supabase.from('enderecos').insert(payload).single()
      if (dbErr) throw dbErr

      notifyRef.current?.show({
        variant: 'success',
        title: 'Endereço adicionado com sucesso!',
        message: 'Seu novo endereço foi salvo.',
        dismissible: true,
      })

      setFormData({
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        ref: '',
        zipCode: '',
      })

      // se quiser navegar, beleza:
      // navigate('/addres')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      let msg = 'Não foi possível salvar o endereço.'
      if (err?.code === '42501') msg = 'Permissão negada. Verifique as policies (RLS) da tabela.'
      if (err?.code === '23505') msg = 'Endereço já cadastrado.'
      if (err?.message) msg = err.message

      notifyRef.current?.show({
        variant: 'error',
        title: 'Erro ao salvar',
        message: msg,
        dismissible: true,
      })
    } finally {
      console.log('FINALIZANDO SUBMIT, setIsSubmitting(false)')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <S.Container>
        {/* <S.Title>Adicionar Endereço</S.Title> */}
        <S.Header>
          <S.HeaderContent>
            <MapPin size={24} />
            <S.Title>Adicione um novo endereço</S.Title>
          </S.HeaderContent>
          <S.Subtitle>Preencha os campos abaixo para adicionar um endereço.</S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          {/* Grid de 2 colunas no desktop */}
          <S.Row>
            <S.Input
              name="street"
              placeholder="Rua"
              value={formData.street}
              onChange={handleChange}
            />

            <S.Input
              name="number"
              placeholder="Número"
              value={formData.number}
              onChange={handleChange}
            />
          </S.Row>

          <S.Row>
            <S.Input
              name="complement"
              placeholder="Complemento"
              value={formData.complement}
              onChange={handleChange}
            />

            <S.Input
              name="ref"
              placeholder="Ponto de referência"
              value={formData.ref}
              onChange={handleChange}
            />
          </S.Row>

          <S.Row>
            <S.Input
              name="zipCode"
              placeholder="CEP"
              value={formData.zipCode}
              onChange={handleChange}
              maxLength={9}
            />

            <S.Input
              name="neighborhood"
              placeholder="Bairro"
              value={formData.neighborhood}
              onChange={handleChange}
            />
          </S.Row>

          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            leftIcon={<Plus size={20} />}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Salvando...' : 'Adicionar Novo Endereço'}
          </Button>
        </S.Form>
      </S.Container>

      <NotifyModal ref={notifyRef} />
    </>
  )
}

export default AddressForm
