import { useAppSelector } from './app/hooks'
import { selectIsLoading } from './features/orderPreview/orderPreview.selectors'
import AppRoutes from './routes'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <GlobalStyles $isLoading={isLoading} />
      <AppRoutes />
    </>
  )
}

export default App
