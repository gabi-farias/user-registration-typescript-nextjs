import { Router } from 'react-router-dom'

// import { useRouter } from 'next/router'

import Footer from '../components/template/Footer'
import Container from '../styles/pages/Container'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'

import { createMemoryHistory } from 'history'
import Routes from '../components/main/Routes'

// const router = useRouter()

const Home = () => (
  <Router history={createMemoryHistory()}>
    <Container>
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </Container>
  </Router>
)

export default Home
