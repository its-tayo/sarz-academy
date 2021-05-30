import styled from 'styled-components'
import tw from 'twin.macro'

import { ButtonSize } from 'src/interfaces/input'

export const ButtonWrapper = styled.button<{
  size: ButtonSize
  textColor: string
  borderColor: string
  backgroundColor: string
}>`
  ${tw`border w-full`};
  color: ${({ textColor }) => textColor};
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ size }) => size === 'small' && tw``}
  ${({ size }) => size === 'medium' && tw`rounded-full text-lg p-2`}
  ${({ size }) => size === 'large' && tw`rounded-full text-2xl p-3.5`}
`

// font size, padding, border radius