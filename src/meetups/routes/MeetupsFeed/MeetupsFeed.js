import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'

import { Container, Grid, Heading } from 'core/components'
import { MeetupsList } from 'meetups/components'

const Feed = ({ isLoading, meetups }) => (
  <Grid is={Container}>
    <Grid.Item gridColumn='1/-1'>
      <Heading border>Upcoming Meetups</Heading>
    </Grid.Item>

    <Grid.Item gridColumn='1/-1'>
      <ReactPlaceholder
        showLoadingAnimation
        ready={meetups.length > 0 || !isLoading}
        customPlaceholder={MeetupsList.Placeholder}
      >
        <MeetupsList meetups={meetups} />
      </ReactPlaceholder>
    </Grid.Item>
  </Grid>
)

Feed.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  meetups: MeetupsList.propTypes.meetups
}

export default Feed
