import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'grid-styled'
import ReactPlaceholder from 'react-placeholder'

import MeetupsPlaceholder from './MeetupsPlaceholder'
import MeetupCard from './MeetupCard'

const MeetupsList = ({ isLoading, meetups }) => (
  <Flex wrap='wrap' m={-2}>
    <ReactPlaceholder
      showLoadingAnimation
      ready={!(!meetups.length && isLoading)}
      customPlaceholder={<MeetupsPlaceholder />}
    >
      {meetups.map(({ id, title, description }) => (
        <Flex key={id} width={['100%', null, '50%']}>
          <MeetupCard id={id} title={title} description={description} />
        </Flex>
      ))}
    </ReactPlaceholder>
  </Flex>
)

MeetupsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  meetups: PropTypes.arrayOf(PropTypes.shape(MeetupCard.propTypes)).isRequired
}

export default MeetupsList
