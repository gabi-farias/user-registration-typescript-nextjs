export type User = {
  id?: number
  name: string
  email: string
}

export type UserTableProps = {
  users: User[]
  load: (user: User) => void
  remove: (user: User) => void
}

