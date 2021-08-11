import { FC, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { ClientOnPortalProps } from 'src/interfaces/content'

const ClientOnlyPortal: FC<ClientOnPortalProps> = ({ children, selector }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ;(ref.current as any) = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted
    ? createPortal(children, ref.current as unknown as Element)
    : null
}

export default ClientOnlyPortal
