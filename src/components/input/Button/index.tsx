import React, { FC } from 'react'

import { theme } from 'src/styles/theme'
import { ButtonWrapper } from './styles'
import { ButtonProps } from 'src/interfaces/input'

const { colors } = theme

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  size = 'medium',
  type = 'button',
  onClick = () => null,
  textColor = colors.primary,
  borderColor = colors.light,
  backgroundColor = colors.light,
}) => (
  <ButtonWrapper
    size={size}
    type={type}
    onClick={onClick}
    className={className}
    textColor={textColor}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
  >
    {children}
  </ButtonWrapper>
)

export default Button
