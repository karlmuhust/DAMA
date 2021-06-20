import { generateMedia } from 'styled-media-query'

export function remCalc(value, baseValue = 16) {
  return `${value / baseValue}rem`
}

export function grid(ratio) {
  const percentage = ratio * 100

  return `
    width: 100%;
    flex: 0 0 ${percentage}%;
    max-width: ${percentage}%;
  `
}

export const flexRow = `
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

export const absoluteCenter = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const breakpoint = generateMedia({
  medium: '520px',
  large: '900px',
  xlarge: '1200px',
})
