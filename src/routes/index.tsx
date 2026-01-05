import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import RequireAdmin from '../components/auth/RequireAdmin'
import RequireAuth from '../components/auth/RequireAuth'
import RequireItemsCart from '../components/auth/RequireItemsCart'
import PaymentStatus from '../pages/PaymentStatus'
import OrdersList from '../pages/OrdersList'
import RecipesSection from '../pages/RecipesSection'
import Produtos from '../pages/Produtos'
import TermosDeUso from '../pages/Termos'
import PoliticaDePrivacidade from '../pages/Politicas'
import ConfigProfile from '../pages/ConfigProfiles'
import AdminLayout from '../components/AdminLayout'

const NotFound = lazy(() => import('../pages/NotFound'))
const Home = lazy(() => import('../pages/Home'))
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
        {/* Usuários */}
        <Route element={<RootLayout />}>
          {/* Rota principal */}
          <Route path="/" element={<Home />} />

          {/* Rota de login */}
          <Route path="/login" element={<Login />} />

          {/* Rota de cadastro */}
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rota protegida para selecionar endereço de entrega */}
          <Route
            path="/address"
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
              <RequireItemsCart>
                <OrderPreview />
              </RequireItemsCart>
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

          {/* Rota protegida para cadastrar endereço de entrega */}
          <Route
            path="/checkout/status"
            element={
              <RequireAuth>
                <PaymentStatus />
              </RequireAuth>
            }
          />

          {/* Rota protegida para cadastrar endereço de entrega */}
          <Route
            path="/checkout/history"
            element={
              <RequireAuth>
                <OrdersList />
              </RequireAuth>
            }
          />

          <Route path="/recipes/:type" element={<RecipesSection />} />
          <Route path="/recipes" element={<RecipesSection />} />

          {/* Rota para  Catálogo*/}
          <Route path="/catalogo/:type" element={<Produtos />} />
          <Route path="/catalogo" element={<Produtos />} />

          {/* Rota para informações de perfil */}
          <Route path="/perfil" element={
            <RequireAuth>
            <ConfigProfile />
            </RequireAuth>
            } />

          {/* Termos de uso*/}
          <Route path="/termos-de-uso" element={<TermosDeUso />} />

          {/* Políticas de privacidade */}
          <Route path="/politicas-de-privacidade" element={<PoliticaDePrivacidade />} />

          {/* Rota para caminhos desconhecidos */}
          <Route path="/*" element={<NotFound />} />
        </Route>

        {/* Administrador */}
          <Route path='/admin' element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>}>
            
          </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
