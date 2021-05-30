import styled from 'styled-components'

import { ImageProps } from 'src/interfaces/content'

export const ImageWrapper = styled.div<ImageProps>`
  background-image: ${({ src }) => `url(${src})`};
`
