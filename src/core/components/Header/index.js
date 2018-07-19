import React from 'react'
import { Box } from 'grid-styled'

import { Grid, Container, Heading } from 'core/components'

const Header = () => (
  <Box is='header' bg='white'>
    <Grid is={Container}>
      <Grid.Item gridColumn='1/-1'>
        <Heading is='h2' color='alizarin'>
          ÐMeetup
        </Heading>
      </Grid.Item>
    </Grid>
  </Box>
)

export default Header
