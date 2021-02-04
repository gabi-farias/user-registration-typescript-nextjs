import { User } from '../../../../util'

type OwnProps = {
  user: User
  updateField: (event: React.ChangeEvent<HTMLInputElement>) => void
  save: () => void
  clear: () => void
}

const UserForm: React.FC<OwnProps> = props => {
  const { user, updateField, save, clear } = props

  return (
    <>
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
            <button className="btn btn-primary" onClick={() => save()}>
              Save
            </button>

            <button className="btn btn-secondary ml-2" onClick={() => clear()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm
