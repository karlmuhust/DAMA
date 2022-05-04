import { useState, useEffect } from 'react'

function getWindowDimensions() {
  if (window && window !== undefined) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }
  return
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
