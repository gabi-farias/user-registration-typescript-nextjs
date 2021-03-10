import { User } from '../../../util'
import Button from './Button'

type OwnProps = {
  users: User[]
  load: (user: User) => void
  remove: (user: User) => void
}

const UserTable: React.FC<OwnProps> = ({ users, load, remove }) => (
  <table className="table mt-4">
    <thead>
      <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th style={{ transform: 'translateX(5%)' }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button
                user={user}
                onClick={load}
                color="warning"
                icon="pencil"
              />
              <Button
                user={user}
                onClick={remove}
                color="danger"
                icon="trash"
              />
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default UserTable
