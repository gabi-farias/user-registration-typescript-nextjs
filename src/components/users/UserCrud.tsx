import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Content'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration: Include, List, Change and Delete!'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: { name: '', email: '' },
    list: []
}

type User = {
    name: string,
    email: string
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {

    }

    clear() {

    }

    save() {

    }

    getUpdatedList(user: User, add = true) {

    }

    updateField(event: unknown) {

    }

    renderForm() {

    }

    load(user: User) {

    }

    remove(user: User) {

    }

    renderTable() {

    }

    renderRows() {

    }

    // render() {

    // }
}