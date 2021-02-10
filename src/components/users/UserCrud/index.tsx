import { useState, useEffect } from 'react'
import axios from 'axios'

import { User } from '../../../interfaces/user'
import Content from '../../template/Content'
import UserTable from '../UserTable'
import UserForm from '../UserForm'


const icon = 'users'
const title = icon.replace(icon[0], icon[0].toUpperCase())
const headerProps = { icon, title }

const initialState = {
  user: { name: '', email: '' },
  users: []
}

const baseUrl = 'http://localhost:3001/users'

const UserCrud: React.FC = () => {
  const [state, setState] = useState<{
    user: User
    users: User[]
  }>({ ...initialState })

  useEffect(() => {
    axios(baseUrl).then(resp => {
      setState({ ...state, users: resp.data })
    })
  }, [])

  const clear = () => setState({ ...state, user: initialState.user })

  const save = () => {
    const user = state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user).then(resp => {
      const users = getUpdatedList(resp.data)
      setState({ ...state, user: initialState.user, users })
    })
  }

  const getUpdatedList = (user: User, add = true) => {
    const users = state.users.filter(u => u.id !== user.id)
    if (add) users.unshift(user)
    return users
  }

  const updateField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const user = { ...state.user }
    user[event.target.name] = event.target.value
    setState({ ...state, user })
  }

  const load = (user: User) => setState({ ...state, user })

  const remove = (user: User) => {
    axios.delete(`${baseUrl}/${user.id}`).then(() => {
      const users = getUpdatedList(user, false)
      setState({ ...state, users })
    })
  }

  return (
    <Content {...headerProps}>
      <UserForm
        user={state.user}
        updateField={updateField}
        save={save}
        clear={clear}
      />
      <UserTable users={state.users} load={load} remove={remove} />
    </Content>
  )
}

export default UserCrud

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
