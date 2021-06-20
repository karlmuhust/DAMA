import styled from 'styled-components'
import Content from 'components/Content'

const Title = styled.h2`
  display: block;
  text-align: right;
  font-size: var(--fz-1);
  grid-column-start: 3;
  grid-column-end: 10;
  padding-top: var(--content-spacing);
  margin-bottom: calc(var(--content-spacing) / 2);
  font-weight: var(--font-weight);
`

const BlockItem = ({ data }) => {
  return (
    <>
      <Title>{data.title}</Title>
      <Content data={data.content.html} />
    </>
  )
}

export default BlockItem
