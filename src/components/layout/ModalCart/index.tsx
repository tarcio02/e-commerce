import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react'

import * as S from './styles'

type ShowOptions = {
  title?: string
  message?: string
  durationMs?: number // 3000 por padrão
  variant?: 'success' | 'warning'
  productName?: string
}

export type ModalCartRef = {
  show: (opts?: ShowOptions) => void
  hide: () => void
}

type Props = {
  offsetPx?: number
  enterMs?: number
  exitMs?: number
  children?: React.ReactNode
}

let activeHide: (() => void) | null = null
let zSeed = 9999

const ModalCart = forwardRef<ModalCartRef, Props>(function ModalCart(
  { offsetPx = 120, enterMs = 300, exitMs = 300, children },
  ref,
) {
  const hideTimer = useRef<number | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [title, setTitle] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [variant, setVariant] = useState<'success' | 'warning'>('success')
  const [addedList, setAddedList] = useState<string[]>([])
  const [zIndex, setZIndex] = useState<number>(zSeed)
  const lastTimeRef = useRef(0)

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }, [])

  const hide = useCallback(() => {
    clearHideTimer()
    setIsExiting(true)

    window.setTimeout(() => {
      setIsOpen(false)
      setIsExiting(false)
      if (activeHide === hide) activeHide = null
    }, exitMs)
  }, [clearHideTimer, exitMs])

  const show = useCallback(
    (opts?: ShowOptions) => {
      // Fecha qualquer notificação aberta (global)
      if (activeHide) activeHide()
      clearHideTimer()

      // z-index do mais recente
      zSeed += 1
      setZIndex(zSeed)

      // Define variant/título/mensagem base
      const nextVariant: 'success' | 'warning' = opts?.variant ?? 'success'
      setVariant(nextVariant)

      let nextTitle = opts?.title
      let nextMessage = opts?.message

      // Agrupamento inteligente (sem fila): janela curta
      const now = Date.now()
      const isQuick = now - lastTimeRef.current < 1500 // ~1,5s
      if (nextVariant === 'success') {
        if (isOpen && variant === 'success' && isQuick && opts?.productName) {
          const next = Array.from(new Set([...addedList, opts.productName]))
          setAddedList(next)
          nextTitle = 'Itens adicionados ao carrinho'
          nextMessage = next.join(', ')
        } else {
          setAddedList(opts?.productName ? [opts.productName] : [])
        }
      } else {
        // "já existe no carrinho" não acumula com sucesso
        setAddedList([])
      }
      lastTimeRef.current = now

      setTitle(nextTitle)
      setMessage(nextMessage)

      // Abre
      setIsOpen(true)
      setIsExiting(false)

      // Registra este hide como ativo
      activeHide = hide

      // Autohide
      hideTimer.current = window.setTimeout(hide, opts?.durationMs ?? 3000)
    },
    [clearHideTimer, hide, isOpen, variant, addedList],
  )

  useImperativeHandle(ref, () => ({ show, hide }), [show, hide])

  useEffect(() => {
    return () => clearHideTimer()
  }, [clearHideTimer])

  return (
    <S.Wrapper
      isOpen={isOpen}
      isExiting={isExiting}
      offsetPx={offsetPx}
      enterMs={enterMs}
      exitMs={exitMs}
      role="dialog"
      aria-live="polite"
      data-variant={variant}
      style={{ zIndex }}
    >
      {children ?? (
        <>
          {title && <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>}
          {message && <div style={{ opacity: 0.95 }}>{message}</div>}
          {!title && !message && <div>Alerta</div>}
        </>
      )}
    </S.Wrapper>
  )
})

export default ModalCart
