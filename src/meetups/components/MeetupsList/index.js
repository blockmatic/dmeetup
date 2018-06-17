import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'grid-styled'

import Placeholder from './Placeholder'
import { MeetupCard } from '../'

const MeetupsList = ({ meetups }) => (
  <Flex wrap='wrap' m={-2}>
    {meetups.map(({ id, title, description }) => (
      <Flex key={id} m={2} width={['100%', null, '50%']}>
        <MeetupCard id={id} title={title} description={description} />
      </Flex>
    ))}
  </Flex>
)

MeetupsList.Placeholder = Placeholder

MeetupsList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.shape(MeetupCard.propTypes)).isRequired
}

export default MeetupsList
