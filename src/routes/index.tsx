import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from '../pages/NotFound'

const Home = lazy(() => import('../pages/Home'))
const Aviso = lazy(() => import('../pages/Aviso'))
const RootLayout = lazy(() => import('../components/layout/RootLayout/RootLayout'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Rota principal */}
          <Route path="/" element={<Home />} />

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
