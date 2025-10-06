import * as S from './styles'

type FreeShipingBarProps = {
  total: number
}

const THRESHOLD = 200

const ShippingBar = ({ total }: FreeShipingBarProps) => {
  const formatBRL = (value: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  const progress = Math.max(0, Math.min(1, total / THRESHOLD))
  const progressPct = Math.round(progress * 100)
  const remaining = Math.max(0, THRESHOLD - total)

  const label =
    total >= THRESHOLD
      ? `Frete grátis desbloaqueado`
      : `Faltam ${formatBRL(remaining)} para frete grátis`

  return (
    <S.StylesShippingBar>
      <S.Track
        role="progressbar"
        aria-label={`Progresso parafrete grátis: ${progressPct}%`}
        aria-valuemin={0}
        aria-valuemax={THRESHOLD}
        aria-valuenow={Math.min(total, THRESHOLD)}
      >
        <S.Label>{label}</S.Label>
        <S.Fill $progressPct={progress * 100} />
      </S.Track>
    </S.StylesShippingBar>
  )
}

export default ShippingBar
