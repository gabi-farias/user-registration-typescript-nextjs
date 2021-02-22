import Footer from '../../../components/template/Footer'
import Logo from '../../../components/template/Logo'
import Nav from '../../../components/template/Nav'

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
