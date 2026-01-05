    import { Navigate } from 'react-router-dom'
    import type { ReactNode } from 'react'
    import { useAuth } from '../../hooks/useAuth'
    import { useProfileRole } from '../../hooks/useProfileRole'

    interface Props {
    children: ReactNode
    }

    const RequireAdmin = ({ children }: Props) => {
    const { user, loading: authLoading } = useAuth()
    const { role, loading: roleLoading } = useProfileRole()

    if (authLoading || roleLoading) {
        return <div>Carregando...</div>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (role !== 'admin') {
        return <Navigate to="/" replace />
    }

    return <>{children}</>
    }

    export default RequireAdmin
