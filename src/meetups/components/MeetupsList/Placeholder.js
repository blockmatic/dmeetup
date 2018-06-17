import React from 'react'
import { Flex } from 'grid-styled'

import { MeetupCard } from '../'

const MeetupsListPlaceholder = () => (
  <Flex wrap='wrap' m={-2}>
    {Array.from(Array(2)).map((n, i) => <MeetupCard.Placeholder key={i} />)}
  </Flex>
)

export default MeetupsListPlaceholder
