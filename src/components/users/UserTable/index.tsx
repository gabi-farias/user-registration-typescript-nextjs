import React from 'react'

import { UserTableProps as OwnProps } from '../../../../util'

const UserTable: React.FC<OwnProps> = ({ usersList, load, remove }) => {
  const renderRows = () =>
  usersList.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-warning ml-2"
            onClick={() => load(user)}>
            <i className="fa fa-pencil" />
          </button>
          <button className="btn btn-danger ml-2"
            onClick={() => remove(user)}>
            <i className="fa fa-trash" />
          </button>
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
