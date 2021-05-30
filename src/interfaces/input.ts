import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  className?: string
  textColor?: string
  borderColor?: string
  onClick?: () => void
  backgroundColor?: string
}

export type TextFieldProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>
