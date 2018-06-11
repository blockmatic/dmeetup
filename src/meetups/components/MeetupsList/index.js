import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'grid-styled'
import ReactPlaceholder from 'react-placeholder'

import { propTypes } from 'meetups/constants'
import MeetupsPlaceholder from './MeetupsPlaceholder'
import MeetupCard from './MeetupCard'

const MeetupsList = ({ isLoading, meetups }) => (
  <Flex wrap='wrap' m={-2}>
    <ReactPlaceholder
      showLoadingAnimation
      ready={!(!meetups.length && isLoading)}
      customPlaceholder={<MeetupsPlaceholder />}
    >
      {meetups.map(meetup => (
        <Flex key={meetup.id} width={['100%', null, '50%']}>
          <MeetupCard meetup={meetup} />
        </Flex>
      ))}
    </ReactPlaceholder>
  </Flex>
)

MeetupsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  meetups: PropTypes.arrayOf(propTypes.meetup).isRequired
}

export default MeetupsList
