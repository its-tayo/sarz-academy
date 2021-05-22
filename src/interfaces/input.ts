import { ButtonHTMLAttributes } from 'react'

export type BtnType = 'solid' | 'outline'
export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btnType?: BtnType
  size?: ButtonSize
  className?: string
  borderColor?: string
  onClick?: () => void
  backgroundColor?: string
}
