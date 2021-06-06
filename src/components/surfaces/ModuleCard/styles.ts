import styled from 'styled-components'
import tw from 'twin.macro'

import { ModuleCardProps } from 'src/interfaces/surfaces'

export const Wrapper = styled.div<
  Pick<ModuleCardProps, 'backgroundColor' | 'bgImageSrc'>
>`
  .image-wrapper {
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: ${({ bgImageSrc }) => `url(${bgImageSrc})`};
    ${({ bgImageSrc }) => !!bgImageSrc && tw`bg-center bg-no-repeat bg-cover`};
  }

  .content-wrapper {
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
  }
`
