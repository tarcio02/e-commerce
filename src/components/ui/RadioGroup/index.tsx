import * as React from 'react'
import {
  RadioGroupContainer,
  RadioItemWrapper,
  HiddenRadioInput,
  CustomRadioCircle,
  RadioIndicator,
} from './styles'

type RadioGroupContextType = {
  value?: string
  onChange?: (value: string) => void
  name?: string
  disabled?: boolean
}

const RadioGroupContext = React.createContext<RadioGroupContextType | null>(null)

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  name?: string
  disabled?: boolean
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, defaultValue, onValueChange, name, disabled, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const isControlled = value !== undefined
    const currentValue = isControlled ? value : internalValue

    const handleChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    return (
      <RadioGroupContext.Provider
        value={{ value: currentValue, onChange: handleChange, name, disabled }}
      >
        <RadioGroupContainer ref={ref} {...props}>
          {children}
        </RadioGroupContainer>
      </RadioGroupContext.Provider>
    )
  },
)

RadioGroup.displayName = 'RadioGroup'

export interface RadioGroupItemProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value: string
  disabled?: boolean
}

const RadioGroupItem = React.forwardRef<HTMLLabelElement, RadioGroupItemProps>(
  ({ value, disabled: disabledProp, children, ...props }, ref) => {
    const ctx = React.useContext(RadioGroupContext)

    if (!ctx) {
      console.warn('RadioGroupItem deve ser usado dentro de <RadioGroup />')
    }

    const checked = ctx?.value === value
    const disabled = disabledProp ?? ctx?.disabled
    const name = ctx?.name

    const handleChange = () => {
      if (disabled) return
      ctx?.onChange?.(value)
    }

    return (
      <RadioItemWrapper ref={ref} $disabled={!!disabled} {...props}>
        <HiddenRadioInput
          type="radio"
          name={name}
          value={value}
          checked={!!checked}
          onChange={handleChange}
          disabled={disabled}
        />
        <CustomRadioCircle aria-checked={checked} $checked={!!checked} $disabled={!!disabled}>
          {checked && <RadioIndicator />}
        </CustomRadioCircle>
        {children && <span>{children}</span>}
      </RadioItemWrapper>
    )
  },
)

RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
