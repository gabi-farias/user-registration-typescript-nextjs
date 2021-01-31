// import axios, { AxiosResponse } from 'axios'
// import { User } from '../../util'

import axios from 'axios'

const baseUrl = 'http://localhost:3001/users'

const api = async () => {
  const resp = await axios(baseUrl)
  const users = resp.data

  return { users }
}

export default api