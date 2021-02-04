import React from 'react'
import { User } from '../../../../util'
import TableButton from './TableButton'

type OwnProps = {
  usersList: User[]
  load: (user: User) => void
  remove: (user: User) => void
}

const UserTable: React.FC<OwnProps> = props => {
  const { usersList, load, remove } = props

  const renderRows = () =>
    usersList.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <TableButton
              user={user}
              color="warning"
              click={load}
              icon="pencil"
            />
            <TableButton
              user={user}
              color="danger"
              click={remove}
              icon="trash"
            />
          </td>
        </tr>
      )
    })

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

export default UserTable
