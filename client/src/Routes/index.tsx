import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { Layout } from '../Components/Layout'
import { Dashboard } from '../Views/Dashboard'
import { Bills } from '../Views/Bills'

export const Routes = () => (
    <BrowserRouter>
        <>
            <Sidebar />

            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/bills/:id" component={Bills} />
                </Switch>
            </Layout>
        </>
    </BrowserRouter>
)
