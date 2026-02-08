import { useAppSelector } from './app/hooks'
import { selectIsLoading } from './features/orderPreview/orderPreview.selectors'
import AppRoutes from './routes'
import { GlobalStyles } from './styles/GlobalStyles'
import { hasSupabaseEnv } from './services/supabaseClient'

function App() {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <GlobalStyles $isLoading={isLoading} />
      {!hasSupabaseEnv && (
        <div style={{ padding: 16, background: '#fff3cd', color: '#664d03', fontWeight: 600 }}>
          Configuração ausente: defina `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no ambiente.
        </div>
      )}
      <AppRoutes />
    </>
  )
}

export default App
