// Carousel.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

type CarouselProps = {
  children: React.ReactNode[] | React.ReactNode
  intervalMs?: number // tempo entre trocas automáticas
  startIndex?: number
  className?: string
}

const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`

const Track = styled.div<{ index: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${({ index }) => `-${index * 100}%`});
`

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`

export function Carousel({
  children,
  intervalMs = 3500,
  startIndex = 0,
  className,
}: CarouselProps) {
  const items = useMemo(() => React.Children.toArray(children), [children])
  const [index, setIndex] = useState(startIndex % items.length)
  const timerRef = useRef<number | null>(null)

  const next = () => setIndex((i) => (i + 1) % items.length)

  // autoplay contínuo
  useEffect(() => {
    if (items.length <= 1) return
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(next, intervalMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [items.length, intervalMs, next])

  return (
    <Viewport className={className}>
      <Track index={index}>
        {items.map((node, i) => (
          <Slide key={i}>{node}</Slide>
        ))}
      </Track>
    </Viewport>
  )
}
