import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './styles'
import { supabase } from '../../services/supabaseClient'

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [okMsg, setOkMsg] = useState<string | null>(null)

  const navigate = useNavigate()

  // util: remover máscara pra salvar só dígitos no banco
  const onlyDigits = (v: string) => v.replace(/\D/g, '')

  // Máscara telefone (DDD) 99999-9999
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

  // Máscara CPF 123.456.789-00
  const maskCpf = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    let result = digits
    if (digits.length > 3) result = digits.slice(0, 3) + '.' + digits.slice(3)
    if (digits.length > 6) result = result.slice(0, 7) + '.' + result.slice(7)
    if (digits.length > 9) result = result.slice(0, 11) + '-' + digits.slice(9, 11)
    return result
  }
  const onCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(maskCpf(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro(null)
    setOkMsg(null)

    const form = e.target as HTMLFormElement
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    if (senha !== confirmaSenha) {
      alert('As senhas não conferem. Verifique e tente novamente.')
      return
    }
    if (!consent) {
      alert('Você precisa aceitar os Termos e Políticas para continuar.')
      return
    }

    try {
      setLoading(true)
      const emailTrimmed = email.trim()

      // 1) Cadastra (a trigger no banco criará o profile)
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: emailTrimmed,
        password: senha,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: nome,
            phone: onlyDigits(telefone),
            document: onlyDigits(cpf),
            terms_consent: consent,
          },
        },
      })
      if (signUpError) {
        console.error('signUp error:', signUpError)
        throw signUpError
      }

      // 2) Se o projeto NÃO exige confirmação de e-mail, já teremos sessão aqui
      if (signUpData.session) {
        // opcional: aguardar o profile existir (geralmente já existe pela trigger)
        setOkMsg('Cadastro concluído! Você já está logado.')
        navigate('/addres')
        return
      }

      // 3) Caso não tenha sessão (geralmente pq a confirmação de e-mail está ligada),
      // tentamos logar imediatamente com email/senha:
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: emailTrimmed,
        password: senha,
      })

      if (signInError) {
        // Se ainda falhar, muito provavelmente a confirmação de e-mail está habilitada,
        // então o login só será possível após clicar no link do e-mail.
        setOkMsg('Cadastro realizado! Confirme seu e-mail para acessar.')
        return
      }

      if (signInData.session) {
        setOkMsg('Cadastro concluído! Você já está logado.')
        navigate('/addres')
        return
      }

      // fallback raro
      setOkMsg('Cadastro realizado. Se necessário, confirme seu e-mail para entrar.')
    } catch (err: unknown) {
      console.error('Cadastro/Login - erro:', err)
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === 'object' && err !== null && 'message' in err
            ? String((err as { message?: unknown }).message)
            : typeof err === 'string'
              ? err
              : 'Erro inesperado.'
      setErro(`Erro ao cadastrar/logar. ${msg}`)
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
              className="input"
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              placeholder="Seu Email"
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              title="Informe um e-mail válido"
              autoComplete="email"
            />

            <input
              placeholder="Telefone (ex.: (77) 99999-9999)"
              className="input"
              type="tel"
              name="telefone"
              value={telefone}
              onChange={onTelefoneChange}
              required
              // pattern="^\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}$"
              title="Use o formato (77) 99999-9999"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>

          <div className="container">
            <input
              placeholder="CPF (ex.: 123.456.789-00)"
              className="input"
              type="text"
              name="cpf"
              value={cpf}
              onChange={onCpfChange}
              required
              // pattern="^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$"
              title="Use o formato 000.000.000-00"
              inputMode="numeric"
            />

            <S.InputSenha>
              <input
                placeholder="Digite uma Senha Forte"
                className="input"
                type={mostrarSenha ? 'text' : 'password'}
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                minLength={8}
                title="A senha deve ter no mínimo 8 caracteres"
                autoComplete="new-password"
              />

              <input
                placeholder="Confirme a Senha"
                className="input"
                type={mostrarSenha ? 'text' : 'password'}
                name="confirmarSenha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
              />

              <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
              </button>
            </S.InputSenha>
          </div>
        </div>

        <div className="check">
          <input
            type="checkbox"
            id="concordo"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
          />
          <label htmlFor="concordo">
            Li e concordo com os <Link to="/termos">Termos</Link> e{' '}
            <Link to="/politicas">Políticas</Link>.
          </label>
        </div>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {okMsg && <p style={{ color: 'green' }}>{okMsg}</p>}

        <S.Button type="submit" disabled={loading}>
          {loading ? 'Cadastrando…' : 'Cadastrar'}
        </S.Button>
      </S.Form>
    </S.StylesCadastro>
  )
}

export default Cadastro
