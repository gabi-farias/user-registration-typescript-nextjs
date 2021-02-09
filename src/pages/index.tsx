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

import { User } from '../../util'

// import axios from 'axios'
// import { GetServerSideProps } from 'next'
// import { useEffect, useState } from 'react'

// const baseUrl = 'http://localhost:3001/users'

// const initialState = {
//   user: { name: '', email: '' },
//   users: []
// }

// const Home: React.FC<{ users: User[] }> = ({ users }) => {
//   const [user, setUser] = useState<{
//     user: User
//     users: User[]
// }>({ ...initialState })

//   setUser({ ...user, users })

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {user.users.map(user => (
//           <li key={user.name}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Home

// export const getServerSideProps: GetServerSideProps = async () => {
//   const resp = await axios(baseUrl)
//   const users: User[] = resp.data

//   return {
//     props: {
//       users
//     }
//   }
// }
