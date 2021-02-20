import { User } from '../../../../util'

type OwnProps = {
  user: User
  onClick: (user: User) => void
  color: string
  icon: string
}

const Button: React.FC<OwnProps> = ({ user, onClick, color, icon }) => (
  <button 
    className={`btn btn-${color} ml-2`}
    onClick={() => onClick(user)}>
    <i className={`fa fa-${icon}`} />
  </button>
)

export default Button
