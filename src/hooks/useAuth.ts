import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import type { User, Session } from "@supabase/supabase-js";

interface UseAuthReturn {
  user: User | null
  session: Session |  null
  loading: boolean
  error: string | null
}

export function useAuth(): UseAuthReturn {
    const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Recupera seção ativa 
      const { data, error } = await supabase.auth.getSession()

      if(error) throw error
      setSession(data.session)
      setUser(data.session?.user ?? null)
    } catch (err: unknown){
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Erro desconhecido')
      }
    } finally{ 
      setLoading(false)
    }
  } 

initAuth()

// Escuta mudanças na autenticação 
const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
  setSession(session)
  setUser(session?.user ?? null)
  setLoading(false)
})

return () => {
  listener.subscription.unsubscribe()
}

  }, [])

  return { user, session, loading, error }

}
