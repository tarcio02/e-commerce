import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme.ts'
import { ScrollToTop } from './hooks/ScrollTop.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <StrictMode>
        <ThemeProvider theme={lightTheme}>
          <App />
        </ThemeProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
)
