import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'

import { Header } from '../../components'
import Wrapper from './Wrapper'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const RootLayout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
)

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default RootLayout
