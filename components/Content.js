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

  h6 {
    padding-top: calc(var(--content-spacing) / 2);
    padding-bottom: var(--content-spacing);
    font-size: 8vw;
    color: var(--color-red);
  }

  a {
    color: var(--color-red);
    font-weight: var(--font-weight);
    position: relative;
    z-index: 1000;

    &:hover {
      color: var(--color-black);
    }
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
