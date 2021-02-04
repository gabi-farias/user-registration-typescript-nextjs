import { User } from '../../../../../util'
import TableButton from '../TableButton'

type OwnProps = {
  usersList: User[]
  load: (user: User) => void
  remove: (user: User) => void
}

const UserRow: React.FC<OwnProps> = ({ usersList, load, remove }) => {
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

  return <>{renderRows()}</>
}

export default UserRow