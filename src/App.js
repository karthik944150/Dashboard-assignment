import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
