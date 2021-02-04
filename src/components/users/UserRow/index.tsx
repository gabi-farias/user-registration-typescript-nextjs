import { UserTableProps as OwnProps } from '../../../../util'

const UserRow: React.FC<OwnProps> = ({ usersList, load, remove }) => {
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

  return <>{renderRows()}</>
}

export default UserRow
