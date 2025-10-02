import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GlobalStyles } from '../../../styles/GlobalStyles'

// import Ofertas from '../Ofertas'
import Header from '../Header'
import MenuLateral from '../MenuLateral'
import Carrinho from '../Carrinho'
import Footer from '../Footer'

const RootLayout = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [stateHeader, setStateHeader] = useState(false)

const toggleUi = (tipo: 'menu'  | 'carrinho') => {
  if (tipo === 'menu') {
    setMenuAberto((prev) => {
      const novoEstado = !prev
      if (novoEstado) setCarrinhoAberto(false)
      return novoEstado
    })
  }

  if (tipo === 'carrinho') {
    setCarrinhoAberto((prev) => {
      const novoEstado = !prev
      if (novoEstado) setMenuAberto(false)
      return novoEstado
    })
  }
}

const fecharTudo = () => {
  setMenuAberto(false)
  setCarrinhoAberto(false)
}

  useEffect(() => {
    if (typeof window === 'undefined') return

    const THRESHOLD = 32
    let ticking = false

    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0
      // só atualiza o estado quando mudar de fato
      setStateHeader((prev) => {
        const next = y >= THRESHOLD
        return prev !== next ? next : prev
      })
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    // inicializa levando em conta posição atual (caso já carregue rolado)
    update()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <GlobalStyles />
      {/* <Ofertas /> */}
      <Header
        menuAberto={menuAberto}
        toggleMenu={() => toggleUi('menu')}
        stateHeader={stateHeader}
        toogleHeader={() => toggleUi('carrinho')}
      />
      <MenuLateral aberto={menuAberto} fechar={() => toggleUi('menu')} />
      <Carrinho fechar={() => toggleUi('carrinho')} carrinhoAberto={carrinhoAberto} />

      <main onClick={fecharTudo}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default RootLayout
