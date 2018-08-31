import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Sidebar } from '../Components/Sidebar'
import { Layout } from '../Components/Layout'
import { Dashboard } from '../Views/Dashboard'
import { Bills } from '../Views/Bills'

export const Routes = () => (
    <BrowserRouter>
        <>
            <Sidebar />

            <Layout>
                <Route exact path="/" component={Dashboard} />
                <Route path="/bills" component={Bills} />
            </Layout>
        </>
    </BrowserRouter>
)
