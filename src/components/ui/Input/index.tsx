import * as React from 'react'
import * as S from './styles'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ type, ...props }, ref) => {
    return <S.Input ref={ref} type={type} {...props} />
  },
)

Input.displayName = 'Input'
