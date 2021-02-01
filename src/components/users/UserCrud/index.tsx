import React, { Component, useState } from 'react'

import Content from '../../template/Content'
import { User } from '../../../../util'
import axios from 'axios'

type OwnProps = {
  icon: string
  title: string
}

type OwnSate = {
  user: User
  usersList: User[]
}

const icon = 'users'
const title = icon.replace(icon[0], icon[0].toUpperCase())

const headerProps: OwnProps = { icon, title }

const initialState: OwnSate = {
  user: { name: '', email: '' },
  usersList: []
}

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Component {
  state = { ...initialState }

  componentWillMount() {
    axios(baseUrl).then(resp => {
      this.setState({ usersList: resp.data })
    })
  }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user).then(resp => {
      const usersList = this.getUpdatedList(resp.data)
      this.setState({ user: initialState.user, usersList })
    })
  }

  getUpdatedList(user: User, add = true) {
    const usersList = this.state.usersList.filter(u => u.id !== user.id)
    if (add) usersList.unshift(user)
    return usersList
  }

  updateField(event: React.ChangeEvent<HTMLInputElement>) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  renderForm() {
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
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
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
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Type the user's email..."
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => this.save()}>
              Save
            </button>

            <button
              className="btn btn-secondary ml-2"
              onClick={() => this.clear()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }

  load(user: User) {
    this.setState({ user })
  }

  remove(user: User) {
    axios.delete(`${baseUrl}/${user.id}`).then(() => {
      const usersList = this.getUpdatedList(user, false)
      this.setState({ usersList })
    })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.usersList.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-2"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Content {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Content>
    )
  }
}

// const UserCrudHooks: React.FC<OwnProps> = props => {
//   const [state, setState] = useState<OwnSate>({ ...initialState })

//   const componentWillMount = () => {
//     axios(baseUrl).then(resp => {
//       setState({ ...state, usersList: resp.data })
//     })
//   }

//   const clear = () => setState({ ...state, user: initialState.user })

//   const save = () => {
//     const user = state.user
//     const method = user.id ? 'put' : 'post'
//     const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
//     axios[method](url, user).then(resp => {
//       const usersList = getUpdatedList(resp.data)
//       setState({ ...state, user: initialState.user, usersList })
//     })
//   }

//   const getUpdatedList = (user: User, add = true) => {
//     const usersList = state.usersList.filter(u => u.id !== user.id)
//     if (add) usersList.unshift(user)
//     return usersList
//   }

//   const updateField = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const user = { ...state.user }
//     user[event.target.name] = event.target.value
//     setState({ ...state, user })
//   }

//   const renderForm = () => {
//     return (
//       <div className="form">
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <label>Nome</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={state.user.name}
//                 onChange={e => updateField(e)}
//                 placeholder="Type the user's name..."
//               />
//             </div>
//           </div>

//           <div className="col-12 col-md-6">
//             <div className="form-group">
//               <label>E-mail</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="email"
//                 value={state.user.email}
//                 onChange={e => updateField(e)}
//                 placeholder="Type the user's email..."
//               />
//             </div>
//           </div>
//         </div>

//         <hr />
//         <div className="row">
//           <div className="col-12 d-flex justify-content-end">
//             <button className="btn btn-primary" onClick={() => save()}>
//               Save
//             </button>

//             <button className="btn btn-secondary ml-2" onClick={() => clear()}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const load = (user: User) => setState({ ...state, user })

//   const remove = (user: User) => {
//     axios.delete(`${baseUrl}/${user.id}`).then(() => {
//       const usersList = getUpdatedList(user, false)
//       setState({ ...state, usersList })
//     })
//   }

//   const renderTable = () => {
//     return (
//       <table className="table mt-4">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Nome</th>
//             <th>Email</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>{renderRows()}</tbody>
//       </table>
//     )
//   }

//   const renderRows = () =>
//     state.usersList.map(user => {
//       return (
//         <tr key={user.id}>
//           <td>{user.id}</td>
//           <td>{user.name}</td>
//           <td>{user.email}</td>
//           <td>
//             <button className="btn btn-warning" onClick={() => load(user)}>
//               <i className="fa fa-pencil"></i>
//             </button>
//             <button
//               className="btn btn-danger ml-2"
//               onClick={() => remove(user)}
//             >
//               <i className="fa fa-trash"></i>
//             </button>
//           </td>
//         </tr>
//       )
//     })

//   console.log(state.usersList)

//   return (
//     <Content {...headerProps}>
//       {renderForm()}
//       {renderTable()}
//     </Content>
//   )
// }

// export default UserCrudHooks
