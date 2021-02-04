import { User } from "../../../../../util"

type OwnProps = {
    color: string
    click: (user: User) => void
    icon: string
  }
  
  const FormButton: React.FC<OwnProps> = ({ color, click, icon }) => (
    <button className={`btn btn-${color} ml-2`} onClick={() => click}>
      <i className={`fa fa-${icon}`}/>
    </button>
  )
  
  export default FormButton
  