import { useEffect, useState } from 'react'
import { supabase } from '../services/supabaseClient'
import { useAuth } from './useAuth'

export type Role = 'admin' | 'user'

export function useProfileRole() {
const { user, loading: authLoading } = useAuth()
const [role, setRole] = useState<Role | null>(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchRole = async () => {
    if (!user) {
        setRole(null)
        setLoading(false)
        return
    }

    const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

    if (error) {
        console.error('Erro ao buscar role:', error)
        setRole(null)
    } else {
        setRole(data.role)
    }

    setLoading(false)
    }

    if (!authLoading) {
    fetchRole()
    }
}, [user, authLoading])

return {
    role,
    loading: authLoading || loading
}
}
