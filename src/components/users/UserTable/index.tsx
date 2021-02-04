import React from 'react'
import { User } from '../../../../util'
import UserRow from '../UserRow'

type OwnProps = {
  usersList: User[]
  load: (user: User) => void
  remove: (user: User) => void
}

const UserTable: React.FC<OwnProps> = ({ usersList, load, remove }) => {
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
      <tbody>
        <UserRow usersList={usersList} load={load} remove={remove} />
      </tbody>
    </table>
  )
}

export default UserTable
