import { User } from '../../../../util'

import FormButton from './FormButton'
import FormGroup from './FormGroup'

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
        <FormGroup
          label={'Name'}
          name={'name'}
          value={user.name}
          onChange={updateField}
          placeholder={"Type the user's name..."}
        />

        <FormGroup
          label={'E-mail'}
          name={'email'}
          value={user.email}
          onChange={updateField}
          placeholder={"Type the user's email..."}
        />
      </div>

      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <FormButton
            onCick={save}
            color="primary"
            label="Save" />

          <FormButton
            onCick={clear}
            color="secondary"
            label="Cancel" />
        </div>
      </div>
    </div>
  )
}

export default UserForm
