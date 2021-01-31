import axios, { AxiosResponse } from 'axios'
import { User } from '../../util'

const baseUrl = 'http://localhost:3001/users'

const api = axios(baseUrl).then((resp: AxiosResponse<User>) => resp.data)

export default api
