import styled from 'styled-components'

const HeaderArea = styled('header')`
  grid-area: header;
  background-color: #fff;
  padding: 0px 15px;
  box-shadow: ${props => props.theme.effects.shadow};

  h1 {
    font-size: 1.8em;
  }
`
export default HeaderArea
