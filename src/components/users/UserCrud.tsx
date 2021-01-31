import React, { Component, useState } from 'react'

import Content from '../template/Content'
import { User } from '../../../util'
import api from '../../server/api'


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

export default class UserCrud extends Component<OwnProps, OwnSate> {
  state = { ...initialState }

  componentWillMount() {
    api().then(resp => {
      this.setState({ usersList: resp.data })
    })
  }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {}

  getUpdatedList(user: User, add = true) {}

  updateField(event: unknown) {}

  renderForm() {}

  load(user: User) {}

  remove(user: User) {}

  renderTable() {}

  renderRows() {}

  render() {
    return (
      <Content {...headerProps}>
        <div>
          {this.state.usersList.map(user => (
            <h1 className="d-flex justify-content-center" key={user.id}>
              {user.name}
            </h1>
          ))}
        </div>
      </Content>
    )
  }
}
