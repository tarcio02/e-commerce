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
  durationMs?: number // 5000 por padrão
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

const ModalCart = forwardRef<ModalCartRef, Props>(function ModalCart(
  { offsetPx = 120, enterMs = 300, exitMs = 300, children },
  ref,
) {
  const hideTimer = useRef<number | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [title, setTitle] = useState<string>()
  const [message, setMessage] = useState<string>()

  // 🔧 antes era função simples; agora é memorizada
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
    }, exitMs)
  }, [clearHideTimer, exitMs])

  const show = useCallback(
    (opts?: ShowOptions) => {
      clearHideTimer()
      setTitle(opts?.title)
      setMessage(opts?.message)

      setIsOpen(true)
      setIsExiting(false)

      // agenda o fechamento (default 5000ms)
      hideTimer.current = window.setTimeout(hide, opts?.durationMs ?? 5000)
    },
    [clearHideTimer, hide],
  )

  // ✅ agora com deps corretas
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
