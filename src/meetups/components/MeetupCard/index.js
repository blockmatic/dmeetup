import React from 'react'

import { Card, Heading, Text } from 'core/components'
import { meetups } from 'meetups/models'
import Placeholder from './Placeholder'

const MeetupCard = ({ title, description }) => (
  <Card flex={1}>
    <Heading is='h2' mb={2}>
      {title}
    </Heading>
    <Text fontSize={1}>{description}</Text>
  </Card>
)

MeetupCard.Placeholder = Placeholder

MeetupCard.propTypes = {
  ...meetups.proptypes.meetup
}

export default MeetupCard
