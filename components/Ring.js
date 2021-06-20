import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useMousePos } from '../hooks/useMousePos'
import { useMediaQueries } from 'hooks/useMediaQueries'

const Wrapper = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: var(--color-red);
  border-radius: 50%;
  position: fixed;
`

const Ring = () => {
  const [left, setLeft] = useState(0)
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

  const { posX, posY } = useMousePos()
  const mq = useMediaQueries()

  useEffect(() => {
    setLeft(random(0, mq.width))
  }, [mq.width])

  return <Wrapper style={{ left: left }}> </Wrapper>
}

export default Ring
