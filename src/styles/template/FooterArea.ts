import styled from 'styled-components'

const FooterArea = styled('footer')`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  margin-bottom: 1px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.effects.shadow};
`

export default FooterArea
