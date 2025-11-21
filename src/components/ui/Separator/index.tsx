// index.tsx
import * as React from 'react'
import { SeparatorRoot } from './styles'

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  /**
   * Se for decorativo, usamos `role="none"`.
   * Se não for, usamos `role="separator"` para acessibilidade.
   */
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <SeparatorRoot
        ref={ref}
        $orientation={orientation}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={orientation}
        {...props}
      />
    )
  },
)

Separator.displayName = 'Separator'

export { Separator }
