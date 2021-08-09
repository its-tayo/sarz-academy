import React, { FC } from 'react'

import { PillWrapper } from './styles'
import { PillProps } from 'src/interfaces/content'

const Pill: FC<PillProps> = ({
  label,
  active = false,
  onClick = () => null,
}) => {
  return (
    <PillWrapper
      type="button"
      active={active}
      onClick={onClick}
      className="py-2.5 px-5 rounded-full uppercase"
    >
      {label}
    </PillWrapper>
  )
}

export default Pill
