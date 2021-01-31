import { Router } from 'react-router-dom'

import Footer from '../components/template/Footer'
import Container from '../styles/pages/Container'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/main/Main'

import { createMemoryHistory } from 'history'

const Home = () => (
  <Router history={createMemoryHistory()}>
    <Container>
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </Container>
  </Router>
)

export default Home