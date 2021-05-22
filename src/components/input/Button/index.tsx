import React, { FC } from 'react'

import { ButtonWrapper } from './styles'
import { ButtonProps } from 'src/interfaces/input'

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  size = 'medium',
  btnType = 'solid',
  onClick = () => null,
  borderColor = '#fff',
  backgroundColor = '#fff',
}) => (
  <ButtonWrapper
    size={size}
    onClick={onClick}
    btnType={btnType}
    className={className}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
  >
    {children}
  </ButtonWrapper>
)

export default Button
