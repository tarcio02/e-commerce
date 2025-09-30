import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './app/store'
import AppRoutes from './routes'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
