import React, { useState, useEffect } from 'react'

import Content from '../../template/Content'
import axios from 'axios'
import UserTable from '../UserTable'

// import { User } from '../../../../util'

// import UseRow from '../UserRow'

type User = {
  id?: number
  name: string
  email: string
}

type OwnState = {
  user: User
  usersList: User[]
}

const icon = 'users',
  title = icon.replace(icon[0], icon[0].toUpperCase())
const headerProps = { icon, title }

const initialState = {
  user: { name: '', email: '' },
  usersList: []
}

const baseUrl = 'http://localhost:3001/users'

const UserCrud: React.FC = () => {
  const [state, setState] = useState<OwnState>({ ...initialState })

  useEffect(() => {
    axios(baseUrl).then(resp => {
      setState({ ...state, usersList: resp.data })
    })
  }, [])

  const clear = () => setState({ ...state, user: initialState.user })

  const save = () => {
    const user = state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user).then(resp => {
      const usersList = getUpdatedList(resp.data)
      setState({ ...state, user: initialState.user, usersList })
    })
  }

  const getUpdatedList = (user: User, add = true) => {
    const usersList = state.usersList.filter(u => u.id !== user.id)
    if (add) usersList.unshift(user)
    return usersList
  }

  const updateField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const user = { ...state.user }
    user[event.target.name] = event.target.value
    setState({ ...state, user })
  }

  const renderForm = () => {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={state.user.name}
                onChange={e => updateField(e)}
                placeholder="Type the user's name..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={state.user.email}
                onChange={e => updateField(e)}
                placeholder="Type the user's email..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => save()}>
              Save
            </button>

            <button className="btn btn-secondary ml-2" onClick={() => clear()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  const load = (user: User) => setState({ ...state, user })

  const remove = (user: User) => {
    axios.delete(`${baseUrl}/${user.id}`).then(() => {
      const usersList = getUpdatedList(user, false)
      setState({ ...state, usersList })
    })
  }

  const renderRows = () =>
    state.usersList.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })

  console.log(state.usersList)

  return (
    <Content {...headerProps}>
      {renderForm()}
      <UserTable renderRows={renderRows} />
    </Content>
  )
}

export default UserCrud
