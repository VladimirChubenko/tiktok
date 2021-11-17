import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { paths } from './paths'

const Home = lazy(() => import('../pages/Home'))
const User = lazy(() => import('../pages/User'))

const Routes = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route path={paths.home} exact component={Home} />
        <Route path={`${paths.user}/:id`} component={User} />
        <Redirect to={paths.home} />
      </Switch>
    </Suspense>
  )
}

export default Routes