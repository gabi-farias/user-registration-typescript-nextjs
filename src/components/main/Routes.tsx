import { Switch, Route, Redirect } from 'react-router'

import Home from './Main'
import UserCrud from '../users/UserCrud'

const Routes: React.FC = () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>

export default Routes