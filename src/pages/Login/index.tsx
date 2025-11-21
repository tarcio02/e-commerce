import { type FormEvent, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'
import { supabase } from '../../services/supabaseClient'

const Login = () => {
  const [email, setEmail] = useState(() => localStorage.getItem('remember_email') || '')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(!!localStorage.getItem('remember_email'))
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const navigate = useNavigate()
  const location = useLocation()

  const { cameFromCart, intended } = (location.state || {}) as {
    cameFromCart?: boolean
    intended: string
  }

  const afterLogin = cameFromCart ? '/' : intended || '/'

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate('/', { replace: true }) // já logado? manda pra /addres
    })
  }, [navigate])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setSuccessMsg(null)

    if (!email || !password) {
      setErrorMsg('Preencha e-mail e senha.')
      return
    }

    try {
      setLoading(true)

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        // mensagens comuns do Supabase
        if (error.message.toLowerCase().includes('invalid login')) {
          setErrorMsg('E-mail ou senha inválidos.')
        } else if (error.message.toLowerCase().includes('email not confirmed')) {
          setErrorMsg('Confirme seu e-mail antes de entrar.')
        } else {
          setErrorMsg(error.message)
        }
        return
      }

      // lembrar e-mail (opcional)
      if (remember) {
        localStorage.setItem('remember_email', email)
      } else {
        localStorage.removeItem('remember_email')
      }

      // ok, logado
      if (data.user) {
        setSuccessMsg('Login realizado com sucesso!')
        navigate(afterLogin, { replace: true })
      }
    } catch (err: unknown) {
      setErrorMsg(`Ocorreu um erro inesperado ao entrar: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.StylesLogin>
      <S.Form onSubmit={onSubmit}>
        <S.Titulo>Sabor da Feira</S.Titulo>
        <h3>Login</h3>
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
        <input
          className="input"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <S.Button type="submit" disabled={loading}>
          {loading ? 'Entrando…' : 'Entrar'}
        </S.Button>
        <div className="check">
          <input
            type="checkbox"
            id="lembrar-senha"
            name="lembrar"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="lembrar-senha">Lembrar a senha</label>
        </div>
        <S.ToCadastro to="/cadastro">Não tenho uma conta!</S.ToCadastro>
        {errorMsg && <p style={{ color: 'crimson', marginTop: 8 }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green', marginTop: 8 }}>{successMsg}</p>}
      </S.Form>
    </S.StylesLogin>
  )
}

export default Login
