import styled from 'styled-components'

import { BtnType, ButtonSize } from 'src/interfaces/input'

export const ButtonWrapper = styled.button<{
  btnType: BtnType
  size: ButtonSize
  borderColor: string
  backgroundColor: string
}>``
