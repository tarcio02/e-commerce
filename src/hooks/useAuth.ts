import { useState, useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import type { User, Session } from "@supabase/supabase-js";
import { initCartForAuthenticatedUser } from "../features/cart/cart.thunks";
import { clearCart } from "../features/cart/cart.slices";
import { setUserSlice } from "../features/user/user.slice";
import { useAppDispatch } from "../app/hooks";

interface UseAuthReturn {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let ranForUserId: string | null = null;

    const initAuth = async () => {
      try {
        // Tenta recuperar sessão ativa ao montar o app
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        const currentSession = data.session;
        setSession(currentSession);
        setUser(currentSession?.user ?? null);

        // Se já tem usuário, inicializa carrinho
        if (currentSession?.user) {
          ranForUserId = currentSession.user.id;
          dispatch(setUserSlice(currentSession.user));
          await dispatch(initCartForAuthenticatedUser());
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    initAuth();

    // Escuta eventos de login/logout em tempo real
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          if ((event === "SIGNED_IN" || event === "TOKEN_REFRESHED") && session?.user) {
            const currentUserId = session.user.id;

            // se for um novo usuário logado ou primeira vez
            if (ranForUserId !== currentUserId) {
              dispatch(clearCart()); // limpa o carrinho atual antes
              ranForUserId = currentUserId;
            }

            // seta usuário na store e estados locais
            setSession(session);
            setUser(session.user);
            dispatch(setUserSlice(session.user));

            // busca/cria o carrinho ativo do usuário autenticado
            await dispatch(initCartForAuthenticatedUser());
          }

          if (event === "SIGNED_OUT") {
            ranForUserId = null;
            setSession(null);
            setUser(null);
            dispatch(clearCart());
            dispatch(setUserSlice(null));
          }
        } catch (err) {
          console.error("Erro no listener de auth:", err);
        }
      }
  );


    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch]);

  return { user, session, loading, error };
}
