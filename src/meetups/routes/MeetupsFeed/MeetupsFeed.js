import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'

import { Container, Heading } from 'core/components'
import { MeetupsList } from 'meetups/components'

const Feed = ({ isLoading, meetups }) => (
  <Container>
    <Heading border mb={4}>
      Upcoming Meetups
    </Heading>

    <ReactPlaceholder
      showLoadingAnimation
      ready={!isLoading}
      customPlaceholder={<MeetupsList.Placeholder />}
    >
      <MeetupsList meetups={meetups} />
    </ReactPlaceholder>
  </Container>
)

Feed.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  meetups: MeetupsList.propTypes.meetups
}

export default Feed
