import styled from 'styled-components'

const Container = styled('header')`
  grid-area: header;
  background-color: #fff;
  padding: 0px 15px;
  justify-content: center;
  font-size: 1.6em;
  box-shadow: ${props => props.theme.effects.shadow};

  h1 {
    font-size: 1.8em;
  }
`
export default Container
