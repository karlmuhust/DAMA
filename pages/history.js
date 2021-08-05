import styled from 'styled-components'
import { useMousePos } from '../hooks/useMousePos'
import { fetchHistoryPageData } from 'utils/api'
import { useMediaQueries } from 'hooks/useMediaQueries'
import { useEffect } from 'react'
import BlockItem from 'components/BlockItem'
import Content from 'components/Content'
import Balls from 'components/Balls'
import { breakpoint } from 'utils/mixins'

const Wrapper = styled.div`
  width: 100%;
`

const Ring = styled.div`
  --mouseX: -500;
  width: 30vw;
  height: 30vw;
  background-color: var(--color-red);
  border-radius: 50%;
  position: fixed;
  left: var(--mouseX);
  top: var(--mouseY);
  transform: translate(-50%, -50%);
  z-index: -1;
`

const Title = styled.h1`
  height: 100vh;
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 20vw;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: var(--font-weight);
  z-index: 10;
  pointer-events: none;

  span {
    font-size: var(--fz-1);
    top: -5.5vw;
    position: relative;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  padding-left: var(--gutter);
  padding-right: var(--gutter);
`

const Subtitle = styled.h2`
  text-align: right;
  font-size: var(--fz-1);
  grid-column-start: 3;
  grid-column-end: 10;
  margin-bottom: var(--content-spacing);
  font-weight: var(--font-weight);
  z-index: 10;
  pointer-events: none;

  ${breakpoint.lessThan('medium')`
    grid-column-start: 1;
    grid-column-end: 11;
  `}
`

const History = ({ data }) => {
  const { posX, posY } = useMousePos()
  const mq = useMediaQueries()

  const weight = (Math.floor((posX / mq.width) * 100) / 100) * 600 + 100
  useEffect(() => {
    document.documentElement.style.setProperty('--font-weight', weight)
  })

  return (
    <Wrapper>
      <Balls />
      <Ring style={{ '--mouseX': posX + 'px', '--mouseY': posY + 'px' }} />
      <Title>History</Title>

      <Grid>
        <Subtitle> {data.page.title} </Subtitle>
        <Content data={data.page.content.html} />

        {data.page.block.map((item, index) => {
          return <BlockItem key={index} data={item} />
        })}
      </Grid>

      <Title>
        DAMA <span>30</span>
      </Title>
    </Wrapper>
  )
}

export async function getStaticProps() {
  const data = await fetchHistoryPageData()

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default History
