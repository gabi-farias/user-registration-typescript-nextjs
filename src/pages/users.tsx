import axios from 'axios'
import { GetServerSideProps } from 'next'
import UserCrud from '../components/users/UserCrud'

import { User } from '../util'

const baseUrl = 'http://localhost:3001/users'

const Users: React.FC<{ users: User[] }> = ({ users }) => (
  <UserCrud users={users} />
)

export const getServerSideProps: GetServerSideProps = async () => {
  const resp = await axios(baseUrl)
  const users: User[] = resp.data

  return {
    props: {
      users
    }
  }
}

export default Users
