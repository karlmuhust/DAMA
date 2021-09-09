import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  padding-top: 2vw;

  a {
    font-weight: var(--font-weight);
    color: var(--color-black);
    padding: 1vw;
  }
`

const Logo = styled.a`
  position: fixed;
  top: 1vw;
  left: 1vw;
`

const Header = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <Logo>DAMA</Logo>
      </Link>
      <Link href="/about" passHref>
        About
      </Link>
      <Link href="/history" passHref>
        History
      </Link>
      <Link href="/grant" passHref>
        Grant
      </Link>
    </Wrapper>
  )
}

export default Header
