import { User } from '../../../../util'

type OwnProps = {
  usersList: User[]
  load: (user: User) => void
  remove: (user: User) => void
}

const UserRow = (props: OwnProps) => {
  const { usersList, load, remove } = props

  return usersList.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-warning" onClick={() => load(user)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    )
  })
}

export default UserRow
