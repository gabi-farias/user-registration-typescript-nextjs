import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { Router } from 'react-router-dom'

import Container from '../styles/pages/Container'
import Footer from '../components/template/Footer'
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