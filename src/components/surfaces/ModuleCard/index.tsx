import React, { FC } from 'react'

import { Wrapper } from './styles'
import Button from '../../input/Button'
import { theme } from 'src/styles/theme'
import { ModuleCardProps } from 'src/interfaces/surfaces'

const { colors } = theme

const ModuleCard: FC<ModuleCardProps> = ({
  title,
  content,
  imageSrc,
  bgImageSrc,
  onClick = null,
  backgroundColor,
}) => (
  <Wrapper
    className="rounded-lg"
    bgImageSrc={bgImageSrc}
    backgroundColor={backgroundColor}
  >
    <div className="image-wrapper h-48 rounded-t-lg flex items-center justify-center">
      {!!imageSrc && (
        <img className="w-auto h-20 object-cover" src={imageSrc} alt={title} />
      )}
    </div>

    <div className="content-wrapper rounded-b-lg p-5">
      <h3 className="secondary-font text-2xl mb-4">{title}</h3>

      <p className="text-sm">{content}</p>

      {!!onClick && (
        <div className="mt-4 md:mt-6 mb-2 w-56 md:w-40 mx-auto md:ml-0">
          <Button
            onClick={onClick}
            borderColor="#315C5C"
            textColor={colors.light}
            backgroundColor="#315C5C"
          >
            <span className="secondary-font">Register</span>
          </Button>
        </div>
      )}
    </div>
  </Wrapper>
)

export default ModuleCard
