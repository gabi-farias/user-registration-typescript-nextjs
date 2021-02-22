import Footer from '../Footer'
import Logo from '../Logo'
import Nav from '../Nav'

import Container from './styles'

type OwnProps = {
  Component: React.FC
}

const Users: React.FC<OwnProps> = ({ Component }) => (
  <Container>
    <Logo />
    <Nav />
    <Component />
    <Footer />
  </Container>
)

export default Users
