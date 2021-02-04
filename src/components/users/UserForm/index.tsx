import { User } from '../../../../util'
import FormGroup from './FormGroup'
import FormButton from './FormButton'

type OwnProps = {
  user: User
  updateField: (e: React.ChangeEvent<HTMLInputElement>) => void
  save: () => void
  clear: () => void
}

const UserForm: React.FC<OwnProps> = props => {
  const { user, updateField, save, clear } = props

  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={e => updateField(e)}
              placeholder="Type the user's name..."
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={user.email}
              onChange={e => updateField(e)}
              placeholder="Type the user's email..."
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <FormButton color="primary" click={save} label="Save" />
          <FormButton color="secondary" click={clear} label="Cancel" />
        </div>
      </div>
    </div>
  )
}

export default UserForm
