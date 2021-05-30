import React, { FC } from 'react'

import { ImageWrapper } from './styles'
import { ImageProps } from 'src/interfaces/content'

const Image: FC<ImageProps> = ({ src }) => {
  return (
    <ImageWrapper
      src={src}
      className="h-full w-full rounded-t-full bg-center bg-no-repeat bg-cover"
    />
  )
}

export default Image
