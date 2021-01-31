import { Switch, Route, Redirect } from 'react-router'

import Main from '../Main'
import UserCrud from '../../users/UserCrud'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/users' component={UserCrud} />
    <Redirect from='*' to='/' />
  </Switch>
)

export default Routes
