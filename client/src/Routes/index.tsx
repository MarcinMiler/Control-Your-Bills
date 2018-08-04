import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Dashboard } from '../Views/Dashboard'

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
        </Switch>
    </BrowserRouter>
)
