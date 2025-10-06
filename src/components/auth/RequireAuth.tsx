import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <div>Carregando...</div>

  if (!user) {
    // manda para /login lembrando de onde veio
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}
