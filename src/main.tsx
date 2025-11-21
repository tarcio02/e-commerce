import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
)
