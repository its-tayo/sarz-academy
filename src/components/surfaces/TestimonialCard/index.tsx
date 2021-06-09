import React, { FC } from 'react'

import { Wrapper } from './styles'
import { TestimonialCardProps } from 'src/interfaces/surfaces'

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  content,
  imageSrc,
  designation,
}) => (
  <Wrapper className="w-full text-center mb-6 relative">
    <div className="image-wrapper h-32 md:h-20 w-32 md:w-20 mx-auto mb-8 rounded-2xl p-0.5">
      <img
        src={imageSrc}
        alt={name}
        className="h-full w-full object-cover rounded-2xl"
      />
    </div>

    <h3 className="secondary-font text-3xl mb-12">{content}</h3>

    <h5 className="text-2xl">{name}</h5>
    <p className="text-xs">{designation}</p>
  </Wrapper>
)

export default TestimonialCard
