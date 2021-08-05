import { createGlobalStyle } from 'styled-components'
import { breakpoint, remCalc } from 'utils/mixins'

const GlobalStyles = createGlobalStyle`
  :root {
    --font-family-body: 'ABC Maxi Plus Variable Trial', serif;
    --font-size-base: 5vw;

    --fz-1: 10vw;
    --font-weight: 400;

    --gutter: 5vw;

    --content-spacing: 8vw;

    --color-red: #F31347;
    --color-blue: #6C6CEB;
    --color-black: #000000;
    --color-white: #F6E8EA;

    ${breakpoint.greaterThan('medium')`
      --fz-1: 6vw;
     --gutter: 2vw;
      --font-size-base: 1.6vw;
    `}
  }

  body {
    cursor: none;
    font-size: var(--font-size-base);
    font-family: var(--font-family-body);
    background-color: var(--color-blue);
    line-height: 150%;
  }

  h1,h2,h3,h4,h5 {
    line-height: 85%;
  }

`

export default GlobalStyles
