import React, { Component } from 'react'
import { User } from '../../../util'

import api from '../../server/api'

import Content from '../template/Content'

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

  componentWillMount() {}

  clear() {}

  save() {}

  getUpdatedList(user: User, add = true) {}

  updateField(event: unknown) {}

  renderForm() {}

  load(user: User) {}

  remove(user: User) {}

  renderTable() {}

  renderRows() {}

  render() {
    return <Content {...headerProps}>User Registration</Content>
  }
}
