import React, { FC } from 'react'

import Image from '../../content/Image'
import { SessionCardProps } from 'src/interfaces/surfaces'

const SessionCard: FC<SessionCardProps> = ({ src }) => {
  return (
    <div className="session-card w-44 h-48 pr-6">
      <Image src={src} />
    </div>
  )
}

export default SessionCard
