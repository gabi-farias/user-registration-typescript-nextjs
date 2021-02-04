type OwnProps = {
  color: string
  click: () => void
  label: string
}

const FormButton: React.FC<OwnProps> = ({ color, click, label }) => (
  <button className={`btn btn-${color} ml-2`} onClick={() => click && click()}>
    {label}
  </button>
)

export default FormButton
