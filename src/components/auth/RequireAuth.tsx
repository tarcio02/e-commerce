import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { JSX } from 'react'

type Props = { children: JSX.Element }

export default function RequireAuth({ children }: Props) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <div>Carregando</div>

  if (!user) {
    const fallbackState = { intended: '/', cameFromCart: false }

    return <Navigate to="/login" replace state={{ ...(location.state ?? fallbackState) }} />
  }

  return children
}
