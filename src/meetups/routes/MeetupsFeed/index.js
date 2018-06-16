import React from 'react'
import { Redux } from 'redux-render'
import Component from '@reactions/component'
import { select } from '@rematch/select'

import { Container, Heading } from 'core/components'
import { MeetupsList } from 'meetups/components'

const MeetupsFeed = () => (
  <Redux
    selector={state => ({
      isLoading: state.loading.effects.meetups.fetch,
      meetups: select.meetups.all(state)
    })}
  >
    {(state, dispatch) => (
      <Component
        didMount={() => {
          dispatch.meetups.fetch()
        }}
        render={() => (
          <Container>
            <Heading border mb={4}>
              Upcoming Meetups
            </Heading>

            <MeetupsList isLoading={state.isLoading} meetups={state.meetups} />
          </Container>
        )}
      />
    )}
  </Redux>
)

export default MeetupsFeed
