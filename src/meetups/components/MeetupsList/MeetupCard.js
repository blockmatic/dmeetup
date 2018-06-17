import React from 'react'

import { propTypes } from 'meetups/constants'
import { Card, Heading, Text } from 'core/components'

const MeetupCard = ({ title, description }) => (
  <Card flex={1} m={2}>
    <Heading is='h2' mb={2}>
      {title}
    </Heading>
    <Text fontSize={1}>{description}</Text>
  </Card>
)

MeetupCard.propTypes = {
  ...propTypes.meetup
}

export default MeetupCard
