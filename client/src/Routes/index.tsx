import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { Dashboard } from '../Views/Dashboard'

export const Routes = () => (
    <BrowserRouter>
        <>
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </>
    </BrowserRouter>
)
