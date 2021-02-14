import styled from 'styled-components'

const LogoArea = styled('aside')`
  grid-area: logo;
  background-color: ${({ theme }) => theme.colors.bgDark};
  display: flex;
  justify-content: center;
  align-items: center;

  a img {
    padding: 0px 15px;
    width: 100%;
  }

  @media (max-width: 576px) {
    a img {
      width: 325px;
    }
  }
`
export default LogoArea