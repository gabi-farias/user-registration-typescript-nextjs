import { Router } from 'react-router-dom'

import UserCrud from '../../../components/users/UserCrud'
import Footer from '../../../components/template/Footer'
import Logo from '../../../components/template/Logo'
import Nav from '../../../components/template/Nav'

import { createMemoryHistory } from 'history'

import Container from './styles'

type OwnProps = {
  Component: React.FC
}

const Users: React.FC<OwnProps> = ({Component}) => (
  <Router history={createMemoryHistory()}>
    <Container>
      <Logo />
      <Nav />
      <Component />
      <Footer />
    </Container>
  </Router>
)

export default Users
