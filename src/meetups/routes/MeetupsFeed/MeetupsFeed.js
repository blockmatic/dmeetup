import React from 'react'
import PropTypes from 'prop-types'

import { Container, Heading } from 'core/components'
import { MeetupsList } from 'meetups/components'

const Feed = ({ isLoading, meetups }) => (
  <Container>
    <Heading border mb={4}>
      Upcoming Meetups
    </Heading>

    <MeetupsList isLoading={isLoading} meetups={meetups} />
  </Container>
)

Feed.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  meetups: MeetupsList.propTypes.meetups
}

export default Feed
