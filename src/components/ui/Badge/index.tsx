import * as React from 'react'
import * as S from './styles'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return <S.Badge variant={variant} className={className} {...props} />
}
