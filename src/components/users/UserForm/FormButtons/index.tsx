type OwnProps = {
  save: () => void
  clear: () => void
}

const FormButtons: React.FC<OwnProps> = ({ save, clear }) => (
  <div className="col-12 d-flex justify-content-end">
    <button 
      className="btn btn-primary"
      onClick={() => save()}>
      Save
    </button>
    <button 
      className="btn btn-secondary ml-2"
      onClick={() => clear()}>
      Cancel
    </button>
  </div>
)

export default FormButtons