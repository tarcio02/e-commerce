import React from 'react'
import { StyledButton, LeftIcon, RightIcon } from './styles'
import type { ButtonVariant, ButtonSize } from './styles'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  iconOnly?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth,
      iconOnly,
      isLoading,
      leftIcon,
      rightIcon,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const content =
      iconOnly && !children ? (
        leftIcon || rightIcon || children
      ) : (
        <>
          {leftIcon && <LeftIcon aria-hidden>{leftIcon}</LeftIcon>}
          <span>{children}</span>
          {rightIcon && <RightIcon aria-hidden>{rightIcon}</RightIcon>}
        </>
      )

    return (
      <StyledButton
        ref={ref}
        type="button"
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $iconOnly={!!iconOnly}
        aria-busy={isLoading || undefined}
        disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
export default Button
