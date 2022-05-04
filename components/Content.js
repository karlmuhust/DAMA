import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'
import { breakpoint } from 'utils/mixins'

const Wrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 8;

  p {
    margin-bottom: 2vw;
  }

  h5 {
    font-size: var(--font-size-base);
    margin-bottom: 1.3vw;
  }

  h3 {
    padding-top: calc(var(--content-spacing) / 2);
    padding-bottom: var(--content-spacing);
    font-size: 8vw;
    color: var(--color-red);
    text-shadow: 5px 5px 0px var(--color-blue);
  }

  a {
    color: var(--color-black);
    font-weight: var(--font-weight);
    position: relative;
    z-index: 1000;

    &:hover {
      color: var(--color-black);
    }
  }

  img {
    width: 100%;
    margin: 0 auto 4vw;
    height: auto;
  }

  ${breakpoint.lessThan('medium')`
    grid-column-start: 1;
    grid-column-end: 11;
  `}
`

const Content = ({ data }) => {
  return <Wrapper>{ReactHtmlParser(data)}</Wrapper>
}

export default Content
