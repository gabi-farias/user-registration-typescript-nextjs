import { User } from "../../../../../util"

type OwnProps = {
  user: User
  load: (user: User) => void
  remove: (user: User) => void
}

const TableButtons: React.FC<OwnProps> = ({ user, load, remove }) => (
  <>
    <button
      className="btn btn-warning ml-2"
      onClick={() => load(user)}>
      <i className="fa fa-pencil" />
    </button>
    <button
      className="btn btn-danger ml-2"
      onClick={() => remove(user)}>
      <i className="fa fa-trash" />
    </button>
  </>
)

export default TableButtons