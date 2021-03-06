import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'
import { initialiseConfigContext } from './context/config'
import getClient from './utils/apollo/client'
import { initialiseAuthContext } from './context/auth'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from 'react-router-dom'
import history from './utils/history'
import { Routes } from './pages/Routes'
import { SnackbarProvider } from 'notistack'
import Navigation from './components/Navigation'
import { Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { GlobalTheme } from 'fe/theme'

// import './index.css'
const renderApp = async (config: any) => {
  initialiseConfigContext(config)
  await initialiseAuthContext()

  const client = await getClient()

  ReactDOM.render(
    <ApolloProvider client={client}>
      <CssBaseline />
      <Router history={history}>
        <GlobalTheme>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            maxSnack={3}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Navigation />
              <Container style={{ marginTop: 16, marginBottom: 16 }}>
                <Routes />
              </Container>
            </MuiPickersUtilsProvider>
          </SnackbarProvider>
        </GlobalTheme>
      </Router>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

export default renderApp
