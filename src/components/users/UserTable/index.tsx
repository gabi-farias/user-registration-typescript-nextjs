import { User } from '../../../../util'

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
