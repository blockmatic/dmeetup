import React from 'react'
import { hot } from 'react-hot-loader'
import { Router } from '@reach/router'

import { RootLayout } from './core/layouts'
import { MeetupsFeed } from './meetups/routes'

const App = props => (
  <RootLayout>
    <Router>
      <MeetupsFeed path='/' />
    </Router>
  </RootLayout>
)

export default hot(module)(App)
