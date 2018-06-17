import React from 'react'
import { Flex } from 'grid-styled'

import { MeetupCard } from '../'

const MeetupsListPlaceholder = () => (
  <Flex wrap='wrap' m={-2}>
    {Array.from(Array(3)).map((n, i) => (
      <Flex key={i} p={2} width={['100%', null, '50%']}>
        <MeetupCard.Placeholder key={i} />
      </Flex>
    ))}
  </Flex>
)

export default MeetupsListPlaceholder
