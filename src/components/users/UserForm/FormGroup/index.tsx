import { User } from '../../../../../util'

type OwnProps = {
  label: string
  value: string
  updateField: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const FormGroup: React.FC<OwnProps> = props => {
  const { label, value, updateField, placeholder } = props

  return (
    <div className="col-12 col-md-6">
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          className="form-control"
          name={label}
          value={value}
          onChange={e => updateField(e)}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default FormGroup
