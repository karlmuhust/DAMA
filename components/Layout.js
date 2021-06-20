import styled from 'styled-components'
import { breakpoint } from 'utils/mixins'
import { useEffect } from 'react'

const Main = styled.main`
  position: relative;
  min-height: calc(100vh - var(--header-height)); // Fallback
  min-height: calc(var(--vh, 1vh) * 100 - var(--header-height));
`

const Layout = ({ children }) => {
  useEffect(() => {
    function handleResize() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <Main>{children}</Main>
}

export default Layout
