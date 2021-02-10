type OwnProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const FormGroup: React.FC<OwnProps> = props => {
  const { label, name, value, onChange, placeholder } = props

  return (
    <div className="col-12 col-md-6">
      <div className="form-group">
        <label>{label}</label>
        <input
          type="text"
          className="form-control"
          name={name}
          value={value}
          onChange={e => onChange(e)}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default FormGroup
