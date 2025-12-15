import { useEffect, useState } from 'react'
import * as S from './styles'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import banner1 from '../../assets//images/banner.png'
import banner1Mobile from '../../assets//images/banner-mobile.png'
import banner2 from '../../assets//images/bannerB.png'
import banner3 from '../../assets//images/bannerC.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 601)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 601)
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slides = [
    {
      image: isMobile ? banner1Mobile : banner1,
      title: 'Conheça as Massas',
      highlight: 'Sabor da Feira!',
      description:
        'Descubra o sabor e a qualidade que só nós podemos oferecer. Feito com cuidado para você.',
    },
    {
      image: banner2,
      title: 'Massa crocante,',
      highlight: 'recheio generoso!',
      description: 'Perfeita para quem ama aquele pastel bem recheado e sequinho.',
    },
    {
      image: banner3,
      title: 'Do freezer',
      highlight: 'direto pra festa!',
      description: 'Praticidade e sabor para os melhores momentos com a família e amigos.',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(interval) // limpa ao desmontar
  }, [slides.length])

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <S.StylesHero>
      <S.BackgroundImage key={currentSlide} $bgImage={slide.image} />
      <S.GradientOverlay />

      <S.MainContent>
        <S.ContentWrapper key={currentSlide}>
          {/* Left content */}
          <S.TextContent>
            <S.Title>
              {slide.title}
              <br />
              <S.HighlightText>{slide.highlight}</S.HighlightText>
            </S.Title>

            <S.Description>{slide.description}</S.Description>

            <S.ButtonsWrapper to="/catalogo" $delay="0.4s">
              Quero Experimentar!
            </S.ButtonsWrapper>

            {/* Carousel indicators */}
            <S.CarouselControls $delay="0.6s">
              <S.CarouselButton onClick={handlePrev}>
                <ChevronLeft />
              </S.CarouselButton>

              {slides.map((_, index) => (
                <S.Dot
                  key={index}
                  $active={index === currentSlide}
                  onClick={() => handleDotClick(index)}
                />
              ))}

              <S.CarouselButton onClick={handleNext}>
                <ChevronRight />
              </S.CarouselButton>
            </S.CarouselControls>
          </S.TextContent>
        </S.ContentWrapper>
      </S.MainContent>
    </S.StylesHero>
  )
}

export default Hero
