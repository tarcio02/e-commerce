import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { JSX } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectCartLineItemsForRender } from '../../features/cart/cart.selectors'
import { selectOrderStatus } from '../../features/orderPreview/orderPreview.selectors'

type Props = { children: JSX.Element }

export default function RequireItemsCart({ children }: Props) {
  const { user, loading } = useAuth()
  const location = useLocation()
  const items = useAppSelector(selectCartLineItemsForRender)
  const status = useAppSelector(selectOrderStatus)

  if (loading) return <div>Carregando</div>

  if (!user) {
    const fallbackState = { intended: location.pathname, cameFromCart: false }

    return <Navigate to="/login" replace state={{ ...(location.state ?? fallbackState) }} />
  }

  if (items.length === 0 || !status) {
    return <Navigate to="/" replace />
  }

  return children
}
