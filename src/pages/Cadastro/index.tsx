import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './styles'
import { supabase } from '../../services/supabaseClient'
import ModalCart, { type ModalCartRef } from '../../components/layout/ModalCart'
import NotifyModal, { type NotifyModalRef } from '../../components/ui/NotifyModal/Index'
import { ExternalLink } from 'lucide-react'

type NavState = {
  nome?: string
  telefone?: string
}

const Cadastro = () => {
  const location = useLocation()

  const navState = (location.state as NavState | null) ?? null
  const modalRef = useRef<ModalCartRef>(null)
  const notifyRef = useRef<NotifyModalRef>(null)

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [consent, setConsent] = useState(false)

  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [okMsg, setOkMsg] = useState<string | null>(null)

  const onlyDigits = (v: string) => v.replace(/\D/g, '')

  const maskTelefone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const onTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(maskTelefone(e.target.value))
  }

  // Preencher nome/telefone vindos do navigate(state)
  useEffect(() => {
    if (navState?.nome) setNome(navState.nome)
    if (navState?.telefone) setTelefone(maskTelefone(navState.telefone))
    // roda só quando mudar o state (ex: veio do formulário anterior)
  }, [navState?.nome, navState?.telefone])

  // telefone no formato internacional e será enviado ao banco
  const phoneE164 = useMemo(() => {
    const digits = onlyDigits(telefone)
    if (!digits) return ''
    return `+55${digits}`
  }, [telefone])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)
    setOkMsg(null)

    // validações básicas
    const nomeTrim = nome.trim()
    const emailTrim = email.trim()
    const senhaTrim = senha.trim()
    const telDigits = onlyDigits(telefone)

    if (!nomeTrim) {
      setErro('nome')
      modalRef.current?.show({
        variant: 'warning',
        title: 'O campo nome está vazio',
        message: 'Preencha o campo abaixo com seu nome.',
        durationMs: 5000,
      })
      return
    }

    if (!telDigits || telDigits.length < 10) {
      setErro('telefone')
      modalRef.current?.show({
        variant: 'warning',
        title: 'O campo telefone está vazio',
        message: 'Preencha o campo abaixo com seu telefone.',
        durationMs: 5000,
      })
      return
    }

    if (!emailTrim) {
      setErro('email')
      modalRef.current?.show({
        variant: 'warning',
        title: 'O campo e-mail está vazio',
        message: 'Preencha o campo abaixo com seu e-mail.',
        durationMs: 5000,
      })
    }

    if (!senhaTrim || senhaTrim.length < 6) {
      setErro('senha')
      modalRef.current?.show({
        variant: 'warning',
        title: 'O campo senha está vazio',
        message: 'Preencha o campo abaixo com sua senha.',
        durationMs: 5000,
      })
    }

    if (!consent) {
      setErro('consent')
      modalRef.current?.show({
        variant: 'warning',
        title: 'Precisa confirmar os termos e políticas!',
        message: 'Confirme que está de acordo com os termos e políticas da empresa.',
        durationMs: 5000,
      })
      return
    }

    try {
      setLoading(true)

      const { error } = await supabase.auth.signUp({
        email,
        password: senha,
        options: {
          // emailRedirectTo: 'http://localhost:5173/',
          data: {
            full_name: nome,
            phone: phoneE164,
            terms_consent: true,
          },
        },
      })

      if (error) {
        modalRef.current?.show({
          variant: 'warning',
          title: 'Erro ao cadastrar',
          message: error.message,
          durationMs: 5000,
        })
        return
      }

      notifyRef.current?.show({
        variant: 'success',
        title: 'Cofirme seu cadastro no e-mail!',
        message: 'Enviamos um e-mail para você confirmar seu cadastro.',
        dismissible: true,
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error('Erro ao cadastar:', err)
      setErro(`Erro ao cadastrar. ${err?.message ?? 'Erro inesperado.'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.StylesCadastro>
      <S.Form onSubmit={handleSubmit} noValidate>
        <S.Titulo>Sabor da Feira</S.Titulo>
        <h3>Cadastro</h3>

        <div className="section">
          <div className="container">
            <input
              placeholder="Nome Completo"
              className={`input ${erro === 'nome' ? 'erro' : ''}`}
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              placeholder="Seu Email"
              className={`input ${erro === 'email' ? 'erro' : ''}`}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="container">
            <input
              placeholder="Telefone (ex.: (77) 99999-9999)"
              className={`input ${erro === 'telefone' ? 'erro' : ''}`}
              type="tel"
              name="telefone"
              value={telefone}
              onChange={onTelefoneChange}
              required
              autoComplete="tel"
              inputMode="tel"
            />
            <input
              placeholder="Digite uma Senha"
              className={`input ${erro === 'senha' ? 'erro' : ''}`}
              type="password"
              name="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={`check ${erro === 'consent' ? 'erro' : ''}`}>
          <input
            type="checkbox"
            id="concordo"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
          />
          <label htmlFor="concordo">
            Li e concordo com os <S.HighlightLink to="/termos">Termos</S.HighlightLink> e{' '}
            <S.HighlightLink to="/politicas">Políticas</S.HighlightLink>.
          </label>
        </div>

        {okMsg && <p style={{ color: 'green' }}>{okMsg}</p>}

        <S.Button type="submit" disabled={loading}>
          {loading ? 'Processando…' : 'Enviar'}
        </S.Button>
        <S.LinkTo to="/login">
          <ExternalLink />
          Já sou cadastrado!
        </S.LinkTo>
      </S.Form>
      <ModalCart ref={modalRef} offsetPx={120} enterMs={300} exitMs={300} />
      <NotifyModal ref={notifyRef} redirectTo="/" />
    </S.StylesCadastro>
  )
}

export default Cadastro
