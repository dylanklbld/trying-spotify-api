import { useEffect, useRef, useState } from 'react'

import { throttle } from 'lodash'

export function useIsInView<T extends HTMLElement>():[React.RefObject<T>, boolean]{
  const ref = useRef<T>(null)
  const [inView, setInView] = useState<boolean>(true)

  useEffect(() => {
    const scrollParent = window
    const handleScroll = throttle(() => {
      if (ref.current) {
        setInView(ref?.current.getBoundingClientRect()?.top > 0)
      }
    }, 200)

    scrollParent.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => scrollParent.removeEventListener('scroll', handleScroll)
  })

  return [ref, inView]
}