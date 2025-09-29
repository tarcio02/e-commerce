import { useState, useEffect } from 'react'
import { store } from './app/store'
import { GlobalStyles } from './styles/GlobalStyles'

import Ofertas from './components/layout/Ofertas'
import Header from './components/layout/Header'
import MenuLateral from './components/layout/MenuLateral'
import Hero from './pages/Hero'
import Catalogo from './components/layout/Catalogo'
import Sobre from './pages/Sobre'
import Receitas from './pages/Receitas'
import Qualidades from './pages/Qualidades'
import Form from './pages/Form'
import Footer from './components/layout/Footer'

import raviole from './assets/images/ravioli.png'
import preparo from './assets/images/preparo-pastel.png'
import Carrinho from './components/layout/Carrinho'
import { Provider } from 'react-redux'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [downScroll, setDownScroll] = useState(false)

  const itens = [
    {
      id: '1',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
    {
      id: '2',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
    {
      id: '3',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
    {
      id: '4',
      foto: raviole,
      nome: 'Massa de pastel',
      descricao: 'Massa de pastel com 500 gramas.',
      preco: 14.97,
    },
  ]

  const receitas = [
    {
      id: 1,
      imagem: preparo,
      receita: 'Pastel de queijo',
    },
    {
      id: 2,
      imagem: preparo,
      receita: 'Pastel de frango',
    },
    {
      id: 3,
      imagem: preparo,
      receita: 'Pastel de carne',
    },
    {
      id: 3,
      imagem: preparo,
      receita: 'Pastel de carne',
    },
  ]

  const menuToggle = () => {
    setMenuAberto((prev) => !prev)
  }

  const carrinhoToggle = () => {
    setCarrinhoAberto((prev) => !prev)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const THRESHOLD = 32
    let ticking = false

    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0
      // só atualiza o estado quando mudar de fato
      setDownScroll((prev) => {
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
      <Provider store={store}>
        <GlobalStyles />
        <Ofertas />
        <Header
          menuAberto={menuAberto}
          toggleMenu={menuToggle}
          downScroll={downScroll}
          toogleHeader={carrinhoToggle}
        />
        <MenuLateral aberto={menuAberto} fechar={menuToggle} />
        <Carrinho fechar={carrinhoToggle} carrinhoAberto={carrinhoAberto} />
        <Hero />
        <Catalogo data={itens} titulo="Mais vendidos:" />
        <Sobre />
        <Catalogo data={itens} titulo="Com Frete Grátis:" />
        <Receitas data={receitas} titulo="Melhores Receitas" />
        <Qualidades />
        <Form />
        <Footer />
      </Provider>
    </>
  )
}

export default App
