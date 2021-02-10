type OwnProps = {
  onCick: () => void
  color: string
  label: string
}

const Button: React.FC<OwnProps> = ({ onCick, color, label }) => (
  <button className={`btn btn-${color} ml-2`} onClick={() => onCick()}>
    {label}
  </button>
)

export default Button