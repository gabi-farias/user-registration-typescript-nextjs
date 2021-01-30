import { Router } from 'react-router-dom'

import Footer from '../components/template/Footer'
import Container from '../styles/pages/Container'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/main/Home'

import { createMemoryHistory } from 'history'

const App = () => (
  <Router history={createMemoryHistory()}>
    <Container>
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </Container>
  </Router>
)

export default App