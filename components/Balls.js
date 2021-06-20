import styled from 'styled-components'
import Ring from 'components/Ring'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const Balls = () => {
  const n = 80 // Or something else

  return (
    <Wrapper>
      {[...Array(n)].map((e, i) => (
        <Ring key={i} />
      ))}
    </Wrapper>
  )
}

export default Balls
