import TableButtons from './TableButtons'

import { UserTableProps as OwnProps } from '../../../../util'

const UserTable: React.FC<OwnProps> = ({ usersList, load, remove }) => {
  const renderUserRows = () =>
    usersList.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <TableButtons user={user} load={load} remove={remove} />
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
          <th>E-mail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderUserRows()}</tbody>
    </table>
  )
}

export default UserTable
