import React from 'react'
import { Flex } from 'grid-styled'
import { TextBlock } from 'react-placeholder/lib/placeholders'

import { Card } from 'core/components'

const MeetupCardPlaceholder = () => (
  <Flex width={['100%', null, '50%']}>
    <Card m={2}>
      <TextBlock rows={4} color='#eee' />
    </Card>
  </Flex>
)

export default MeetupCardPlaceholder
