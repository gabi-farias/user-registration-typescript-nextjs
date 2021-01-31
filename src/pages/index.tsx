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

// Home.getInitialProps = api

export default Home

// type OwnProps = {
//   users: [
//     user: {
//       id: number
//       name: string
//       email: string
//     }
//   ]
// }

// Home.getInitialProps = async () => {
//   const resp = await axios(baseUrl)
//   const users = resp.data

//   return { users }
// }

// <div>
//   {users.map(user => (
//     <h1 className="d-flex justify-content-center" key={user.id}>
//       {user.email}
//     </h1>
//   ))}
// </div>
