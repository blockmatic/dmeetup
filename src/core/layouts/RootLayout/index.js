import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import { Box } from 'grid-styled'

import { Header } from 'core/components'
import Wrapper from './Wrapper'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

const RootLayout = ({ children }) => (
  <Wrapper>
    <Header />
    <Box flex={1}>{children}</Box>
  </Wrapper>
)

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default RootLayout
