import React, { FC } from 'react'

import { ModuleCardProps } from 'src/interfaces/surfaces'
import { Wrapper } from './styles'

const ModuleCard: FC<ModuleCardProps> = ({
  title,
  content,
  imageSrc,
  backgroundColor,
}) => (
  <Wrapper backgroundColor={backgroundColor} className="h-full w-72 rounded-lg">
    <div className="image-wrapper h-48 rounded-t-lg flex items-center justify-center">
      <img className="w-auto h-20 object-cover" src={imageSrc} alt={title} />
    </div>

    <div className="content-wrapper rounded-b-lg p-5">
      <h3 className="secondary-font text-2xl mb-4">{title}</h3>

      <p className="text-sm">{content}</p>
    </div>
  </Wrapper>
)

export default ModuleCard
