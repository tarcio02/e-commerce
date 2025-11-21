import * as React from 'react'
import * as S from './styles'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ ...props }, ref) => {
  return <S.Label ref={ref} {...props} />
})

Label.displayName = 'Label'
