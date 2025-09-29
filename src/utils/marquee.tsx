import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

type MarqueeProps = {
  children: React.ReactNode
  speed?: number
  gap?: number
  className?: string
}

const Wrapper = styled.div<{ gap: number }>`
  position: relative;
  overflow: hidden;
  width: 100vw;
  --gap: ${({ gap }) => `${gap}px`};
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Track = styled.div<{ duration: number }>`
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: max-content;
  animation: marquee-ltr linear infinite;
  animation-duration: ${({ duration }) => `${duration}s`};
  will-change: transform;

  @keyframes marquee-ltr {
    /* para rolar da ESQUERDA → DIREITA, movemos de -50% até 0% */
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap);
  flex: 0 0 auto;
`

const Item = styled.div`
  flex: 0 0 auto; /* cada filho mantém sua largura natural */
`

export function Marquee({
  children,
  speed = 80, // px/s
  gap = 24,
  className,
}: MarqueeProps) {
  const items = useMemo(() => React.Children.toArray(children), [children])
  const groupRef = useRef<HTMLDivElement | null>(null)
  const [duration, setDuration] = useState(20) // fallback

  useEffect(() => {
    const calc = () => {
      if (!groupRef.current) return
      const width = groupRef.current.scrollWidth // largura do 1º grupo
      const s = Math.max(4, width / speed) // tempo = distância / velocidade
      setDuration(s)
    }

    calc()

    // Recalcula ao redimensionar
    const ro = new ResizeObserver(calc)
    if (groupRef.current) ro.observe(groupRef.current)
    window.addEventListener('resize', calc)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', calc)
    }
  }, [speed, items.length])

  // Duplicamos os itens para criar o loop contínuo
  return (
    <Wrapper className={className} gap={gap} aria-roledescription="marquee">
      <Track duration={duration}>
        <Group ref={groupRef}>
          {items.map((child, i) => (
            <Item key={`a-${i}`}>{child}</Item>
          ))}
        </Group>
        <Group aria-hidden="true">
          {items.map((child, i) => (
            <Item key={`b-${i}`}>{child}</Item>
          ))}
        </Group>
      </Track>
    </Wrapper>
  )
}
