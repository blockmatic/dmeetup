import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'grid-styled'
import { Trail } from 'react-spring'

import Placeholder from './Placeholder'
import { MeetupCard } from '../'

const MeetupsList = ({ meetups }) => (
  <Flex wrap='wrap' m={-2}>
    <Trail
      keys={meetups.map(({ id }) => id)}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {meetups.map(({ id, title, description }) => styles => (
        <Flex key={id} p={2} width={['100%', null, '50%']} style={styles}>
          <MeetupCard id={id} title={title} description={description} />
        </Flex>
      ))}
    </Trail>
  </Flex>
)

MeetupsList.Placeholder = Placeholder

MeetupsList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.shape(MeetupCard.propTypes)).isRequired
}

export default MeetupsList
