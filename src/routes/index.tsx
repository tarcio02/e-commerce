import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import RequireAuth from '../components/auth/RequireAuth'

const NotFound = lazy(() => import('../pages/NotFound'))
const Home = lazy(() => import('../pages/Home'))
const Aviso = lazy(() => import('../pages/Aviso'))
const RootLayout = lazy(() => import('../components/layout/RootLayout/RootLayout'))
const Login = lazy(() => import('../pages/Login'))
const AddressSelector = lazy(() => import('../pages/AddressSelector'))
const Cadastro = lazy(() => import('../pages/Cadastro'))
const AddressForm = lazy(() => import('../components/layout/AddressForm/Index'))
const OrderPreview = lazy(() => import('../pages/OrderPreview'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Rota principal */}
          <Route path="/" element={<Home />} />

          {/* Rota de login */}
          <Route path="/login" element={<Login />} />

          {/* Rota de cadastro */}
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rota protegida para selecionar endereço de entrega */}
          <Route
            path="/addres"
            element={
              <RequireAuth>
                <AddressSelector />
              </RequireAuth>
            }
          />

          {/* Rota protegida de preview do pedido */}
          <Route
            path="/preview-pedido"
            element={
              <RequireAuth>
                <OrderPreview />
              </RequireAuth>
            }
          />

          {/* Rota protegida para cadastrar endereço de entrega */}
          <Route
            path="/address/novo"
            element={
              <RequireAuth>
                <AddressForm />
              </RequireAuth>
            }
          />

          {/* Rota para  Catálogo*/}
          <Route path="/catalogo" element={<Aviso />} />

          {/* Página sobre */}
          <Route path="/sobre" element={<Aviso />} />

          {/* Informações de qualidade */}
          <Route path="/qualidade" element={<Aviso />} />

          {/* Receitas */}
          <Route path="/receitas" element={<Aviso />} />

          {/* Rota para informações de perfil */}
          <Route path="/perfil" element={<Aviso />} />

          {/* Dados de envio */}
          <Route path="/envio" element={<Aviso />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Aviso />} />

          {/* Termos de uso*/}
          <Route path="/termos-de-uso" element={<Aviso />} />

          {/* Políticas de privacidade */}
          <Route path="/politicas-de-privacidade" element={<Aviso />} />

          {/* Rota para caminhos desconhecidos */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
