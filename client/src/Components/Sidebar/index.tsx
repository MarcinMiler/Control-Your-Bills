import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Container, Icons, DashboardIcon, ListIcon } from './style'

const C: React.SFC<RouteComponentProps<{}>> = ({
    location: { pathname },
    history: { push }
}) => (
    <Container>
        <Icons>
            <DashboardIcon
                active={pathname === '/' ? 1 : 0}
                onClick={() => push('/')}
            />

            <ListIcon
                active={pathname === '/bills' ? 1 : 0}
                onClick={() => push('/bills/1')}
            />
        </Icons>
    </Container>
)

export const Sidebar = withRouter(C)
