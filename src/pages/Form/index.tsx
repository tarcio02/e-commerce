import { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { HandCoins } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ModalCart, { type ModalCartRef } from '../../components/layout/ModalCart'
type FormType = {
  nome: string
  telefone: string
}

type ValidationType = {
  nome?: boolean
  telefone?: boolean
}

const Form = () => {
  const [formData, setFormData] = useState<FormType>({
    nome: '',
    telefone: '',
  })
  const [formValidation, setFormValidation] = useState<ValidationType>({
    nome: false,
    telefone: false,
  })

  const navigate = useNavigate()

  const modalRef = useRef<ModalCartRef>(null)

  const formatarWhatsapp = (value: string) => {
    const numeros = value.replace(/\D/g, '')
    if (numeros.length <= 2) return `(${numeros}`
    if (numeros.length <= 7) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`
    if (numeros.length <= 11)
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    const newValue = name === 'telefone' ? formatarWhatsapp(value) : value

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }))
  }
  useEffect(() => {
    if (formData.nome) {
      setFormValidation({ nome: false, telefone: formValidation.telefone })
      if (formData.telefone) {
        setFormValidation({ telefone: false, nome: formValidation.nome })
      }
    }
  }, [formData.nome, formData.telefone, formValidation.nome, formValidation.telefone])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nome = formData.nome.trim()
    const telefone = formData.telefone.trim()

    if (!nome && !telefone) {
      setFormValidation({ nome: true, telefone: true })
      modalRef.current?.show({
        variant: 'warning',
        title: 'Os campos estão vazios',
        message: 'Preencha os campos abaixo com seus dados.',
        durationMs: 5000,
      })
      return
    }

    if (!nome) {
      setFormValidation({ nome: true })
      modalRef.current?.show({
        variant: 'warning',
        title: 'O campo de nome está vazio',
        message: 'Preencha o campo abaixo com seu nome.',
        durationMs: 5000,
      })
      return
    }

    if (!telefone) {
      setFormValidation({ telefone: true })
      modalRef.current?.show({
        variant: 'warning',
        title: 'O campo de telefone está vazio',
        message: 'Preencha o campo abaixo com seu telefone.',
        durationMs: 5000,
      })
      return
    }

    navigate('/cadastro', {
      state: { nome, telefone },
    })
  }

  return (
    <S.StylesForm>
      <S.Top>
        <HandCoins />
        Receba as Melhores Ofertas
      </S.Top>
      <S.Form onSubmit={handleSubmit}>
        <S.Titulo>
          Insira suas informações de<S.Highlight> contato</S.Highlight>
        </S.Titulo>
        <input
          name="nome"
          value={formData.nome}
          type="text"
          onChange={handleChange}
          placeholder="Seu Nome"
          className={formValidation.nome ? 'error' : 'noError'}
        />
        <input
          name="telefone"
          value={formData.telefone}
          type="text"
          onChange={handleChange}
          placeholder="Telefone/Whatsapp"
          className={formValidation.telefone ? 'error' : 'noError'}
        />
        <S.Button type="submit">Eu quero :)</S.Button>
      </S.Form>
      <ModalCart ref={modalRef} offsetPx={120} enterMs={300} exitMs={300} />
    </S.StylesForm>
  )
}

export default Form
