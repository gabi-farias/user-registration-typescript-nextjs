import { useState } from 'react'
import axios from 'axios'

import { User } from '../../../util'

import Content from '../../template/Content'
import UserTable from '../UserTable'
import UserForm from '../UserForm'

const icon = 'users'
const title = icon.replace(icon[0], icon[0].toUpperCase())

const headerProps = { icon, title }

const initialUser = { name: '', email: '' }

const baseUrl = 'http://localhost:3001/users'

const user = { ...initialUser }

const UserCrud: React.FC<{ users: User[] }> = ({ users }) => {
  const [state, setState] = useState<{
    user: User
    users: User[]
  }>({
    user,
    users: [...users]
  })

  const clear = () => setState({ ...state, user })

  const save = () => {
    const user = state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user).then(resp => {
      const users = getUpdatedList(resp.data)
      setState({ user, users })
    })
  }

  const getUpdatedList = (user: User, add = true) => {
    const { id } = user
    const users = state.users.filter(user => user.id !== id)
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
      <UserTable
        users={state.users}
        load={load}
        remove={remove} />
    </Content>
  )
}

export default UserCrud
