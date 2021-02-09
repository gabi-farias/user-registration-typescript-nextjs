import { User } from '../../../../../util'

type OwnProps = {
  user: User
  onClick: (user: User) => void
  color: string
  icon: string
}

const TableButtons: React.FC<OwnProps> = props => {
  const { user, onClick, color, icon } = props

  return (
    <button
      className={`btn btn-${color} ml-2`}
      onClick={() => onClick(user)}>
      <i className={`fa fa-${icon}`} />
    </button>
  )
}

export default TableButtons
