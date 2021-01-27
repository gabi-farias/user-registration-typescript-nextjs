import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { Router } from 'react-router-dom'

import Container from '../styles/main/Container'
import Footer from '../components/template/Footer'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/main/Main'

import { createMemoryHistory } from 'history'

const App = () => (
  <Router history={createMemoryHistory()}>
    <Container>
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </Container>
  </Router>
)

export default App