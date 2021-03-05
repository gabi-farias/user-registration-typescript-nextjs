import styled from 'styled-components'

const Container = styled('aside')`
  background-color: ${({ theme }) => theme.colors.bgDark};
  box-shadow: ${({ theme }) => theme.effects.shadow};
  grid-area: menu;

  nav a {
    display: block;
    text-decoration: none;
    color: #fff;
    font-weight: 300;
    padding: 15px;

    :hover {
      background: linear-gradient(135deg, #07a7e3 0%, #32dac3 100%);
    }
  }

  @media (max-width: 768px) {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    nav a {
      display: inline;
      padding: 10px;
      margin: 0px;
    }
  }
`
export default Container
