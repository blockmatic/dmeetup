import React from 'react'
import Component from '@reactions/component'
import { select } from '@rematch/select'

import { Connect } from 'core/utils'
import { Container, Heading } from 'core/components'
import { MeetupsList } from 'meetups/components'

const MeetupsFeed = () => (
  <Connect
    select={state => ({
      isLoading: state.loading.effects.meetups.fetch,
      meetups: select.meetups.all(state)
    })}
  >
    {({ state, dispatch }) => (
      <Component
        didMount={() => {
          dispatch.meetups.fetch()
        }}
      >
        <Container>
          <Heading border mb={4}>
            Upcoming Meetups
          </Heading>

          <MeetupsList isLoading={state.isLoading} meetups={state.meetups} />
        </Container>
      </Component>
    )}
  </Connect>
)

export default MeetupsFeed
