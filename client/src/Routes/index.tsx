import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { Dashboard } from '../Views/Dashboard'
import { Layout } from '../Components/Layout'

export const Routes = () => (
    <BrowserRouter>
        <>
            <Sidebar />

            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </Layout>
        </>
    </BrowserRouter>
)
