import * as React from 'react'
import { createPortal } from 'react-dom'
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'
import {
  Backdrop,
  Wrapper,
  Header,
  Title,
  Description,
  ErrorList,
  Actions,
  CloseBtn,
  IconWrap,
  Body,
} from './styles'
import { useNavigate } from 'react-router-dom'

export type NotifyVariant = 'success' | 'error' | 'warning' | 'info'

export type NotifyShowOptions = {
  /** Título principal */
  title?: string
  /** Mensagem curta (uma linha) */
  message?: string
  /** Lista de erros de campos (ex.: ["Nome é obrigatório", "Email inválido"]) */
  fieldErrors?: string[]
  /** Variante visual */
  variant?: NotifyVariant
  /** Fecha automaticamente em ms (0 = não fecha automaticamente) */
  durationMs?: number
  /** Mostrar botão de fechar (X) */
  dismissible?: boolean
  /** Conteúdo custom (substitui body padrão) */
  content?: React.ReactNode
}

export type NotifyModalRef = {
  show: (opts: NotifyShowOptions) => void
  hide: () => void
}

type InternalState = Required<Omit<NotifyShowOptions, 'content'>> & {
  open: boolean
  content?: React.ReactNode
}

const defaultState: InternalState = {
  open: false,
  title: '',
  message: '',
  fieldErrors: [],
  variant: 'info',
  durationMs: 0,
  dismissible: true,
  content: undefined,
}

const iconByVariant: Record<NotifyVariant, React.ReactNode> = {
  success: <CheckCircle size={22} />,
  error: <XCircle size={22} />,
  warning: <AlertTriangle size={22} />,
  info: <Info size={22} />,
}

const ariaRoleByVariant: Record<NotifyVariant, 'alert' | 'status'> = {
  // erros de validação devem interromper leitores de tela
  error: 'alert',
  // demais são informativos
  success: 'status',
  warning: 'status',
  info: 'status',
}

function useEscToClose(onClose: () => void, enabled: boolean) {
  React.useEffect(() => {
    if (!enabled) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enabled, onClose])
}

const NotifyModal = React.forwardRef<NotifyModalRef, { zIndexBase?: number }>(
  ({ zIndexBase = 1000 }, ref) => {
    const navigate = useNavigate()
    const [state, setState] = React.useState<InternalState>(defaultState)
    const timerRef = React.useRef<number | null>(null)
    const portalRoot = typeof document !== 'undefined' ? document.body : null

    const clearTimer = React.useCallback(() => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }, [])

    const hide = React.useCallback(() => {
      clearTimer()
      setState((s) => ({ ...s, open: false }))
      navigate('/addres')
    }, [clearTimer, navigate])

    const show = React.useCallback(
      (opts: NotifyShowOptions) => {
        clearTimer()
        setState({
          open: true,
          title: opts.title ?? defaultState.title,
          message: opts.message ?? defaultState.message,
          fieldErrors: opts.fieldErrors ?? defaultState.fieldErrors,
          variant: opts.variant ?? defaultState.variant,
          durationMs: opts.durationMs ?? defaultState.durationMs,
          dismissible: opts.dismissible ?? defaultState.dismissible,
          content: opts.content,
        })
        if ((opts.durationMs ?? 0) > 0) {
          timerRef.current = window.setTimeout(() => {
            hide()
          }, opts.durationMs!) as unknown as number
        }
      },
      [hide, clearTimer],
    )

    React.useImperativeHandle(ref, () => ({ show, hide }), [show, hide])

    // Fecha com ESC
    useEscToClose(hide, state.open)

    // Evita scroll do body quando aberto
    React.useEffect(() => {
      if (!state.open) return
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }, [state.open])

    if (!portalRoot) return null
    if (!state.open) return null

    const role = ariaRoleByVariant[state.variant]
    const ariaLive = state.variant === 'error' ? 'assertive' : 'polite'

    return createPortal(
      <>
        <Backdrop data-open onClick={hide} style={{ zIndex: zIndexBase }} />
        <Wrapper
          data-open
          data-variant={state.variant}
          role={role}
          aria-live={ariaLive}
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          style={{ zIndex: zIndexBase + 1 }}
        >
          <Header>
            <IconWrap data-variant={state.variant}>{iconByVariant[state.variant]}</IconWrap>
            <Title>{state.title || defaultTitle(state.variant)}</Title>
            {state.dismissible && (
              <CloseBtn aria-label="Fechar" onClick={hide}>
                <X size={18} />
              </CloseBtn>
            )}
          </Header>

          <Body>
            {state.content ? (
              state.content
            ) : (
              <>
                {state.message && <Description>{state.message}</Description>}
                {!!state.fieldErrors.length && (
                  <ErrorList>
                    {state.fieldErrors.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ErrorList>
                )}
              </>
            )}
          </Body>

          <Actions>
            {/* botão padrão — você pode customizar ou expor via options futuramente */}
            <button type="button" onClick={hide}>
              Ok
            </button>
          </Actions>
        </Wrapper>
      </>,
      portalRoot,
    )
  },
)

NotifyModal.displayName = 'NotifyModal'
export default NotifyModal

function defaultTitle(variant: NotifyVariant) {
  switch (variant) {
    case 'success':
      return 'Tudo certo!'
    case 'error':
      return 'Revise os campos'
    case 'warning':
      return 'Atenção'
    case 'info':
    default:
      return 'Informação'
  }
}

// Exporta tipos úteis
export type { InternalState as NotifyInternalState }
