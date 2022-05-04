import styled from 'styled-components'
import Ring from 'components/Ring'
import { breakpoint } from 'utils/mixins'
import { useMediaQueries } from 'hooks/useMediaQueries'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  overflow: hidden;

  ${breakpoint.lessThan('medium')`
    z-index; -1;
  `}
`

const Balls = ({ vh }) => {
  const amount = Math.floor(vh / 200)

  console.log(amount)
  const mq = useMediaQueries()
  const n = mq.width < 1000 ? 20 : amount

  return (
    <Wrapper>
      {[...Array(n)].map((e, i) => (
        <Ring key={i} />
      ))}
    </Wrapper>
  )
}

export default Balls
