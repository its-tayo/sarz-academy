import styled from 'styled-components'

import { ModuleCardProps } from 'src/interfaces/surfaces'

export const Wrapper = styled.div<Pick<ModuleCardProps, 'backgroundColor'>>`
  background-color: red;

  .image-wrapper {
    background-color: ${({ backgroundColor }) => backgroundColor};
  }

  .content-wrapper {
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
  }
`
