const UserTable: React.FC<{ renderRows: () => JSX.Element[] }> = props => (
  <table className="table mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>{props.renderRows()}</tbody>
  </table>
)

export default UserTable
