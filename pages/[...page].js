import styled from 'styled-components'
import { useMousePos } from '../hooks/useMousePos'
import { fetchPageData } from 'utils/api'
import { useMediaQueries } from 'hooks/useMediaQueries'
import { useEffect } from 'react'
import BlockItem from 'components/BlockItem'
import Content from 'components/Content'

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

const About = ({ data }) => {
  const { posX, posY } = useMousePos()
  const mq = useMediaQueries()

  const weight = (Math.floor((posX / mq.width) * 100) / 100) * 600 + 100
  useEffect(() => {
    document.documentElement.style.setProperty('--font-weight', weight)
  })

  return (
    <Wrapper>
      <Ring style={{ '--mouseX': posX + 'px', '--mouseY': posY + 'px' }} />

      <Title>
        {data?.contentFields?.mainTitle}
        {data?.contentFields?.number && (
          <span>{data.contentFields.number}</span>
        )}
      </Title>

      <Grid>
        {data?.contentFields?.flexibleContent.map((item, index) => {
          return <BlockItem key={index} data={item} />
        })}
      </Grid>

      <Title>
        {data?.contentFields?.mainTitle}
        {data?.contentFields?.number && (
          <span>{data.contentFields.number}</span>
        )}
      </Title>
    </Wrapper>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  const slug = params.page
  const data = await fetchPageData({ slug })

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

export default About
