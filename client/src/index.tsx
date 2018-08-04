import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import { Routes } from './Routes'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme'

// tslint:disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600');

    body {
        margin: 0px;
        font-family: Montserrat;
    }
    p,h1,h2,h3,h4,h5,h6 {
        margin: 0;
    }
`

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
