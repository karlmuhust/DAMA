import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useMousePos } from '../hooks/useMousePos'
import { useMediaQueries } from 'hooks/useMediaQueries'
import { breakpoint } from 'utils/mixins'

const Wrapper = styled.div`
  --diameter: 3vw;

  width: var(--diameter);
  height: var(--diameter);
  background-color: var(--color-red);
  border-radius: 50%;
  position: absolute;

  ${(props) => props.loaded && '  transition: all 0.3s;'}
  ${(props) => props.flip && 'background-color: var(--color-black);'}
`

const Ring = () => {
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [flip, setFlip] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const [diameter, setDiameter] = useState(0)

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

  const mq = useMediaQueries()

  useEffect(() => {
    const WH = document.documentElement.offsetHeight
    setLeft(random(0, mq.width))
    setTop(random(0, WH))
    setDiameter(random(1, mq.width < 1000 ? 100 : 300))
  }, [mq.width])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 100)
  }, [])

  const changePos = () => {
    setLeft(random(left - 200, left + 200))
    setTop(random(top - 200, top + 200))
    setDiameter(random(10, mq.width < 1000 ? 50 : 100))
    setFlip(!flip)
  }

  return (
    <Wrapper
      loaded={loaded}
      flip={flip}
      onMouseEnter={() => changePos()}
      style={{ left: left, top: top, '--diameter': diameter + 'px' }}></Wrapper>
  )
}

export default Ring
