import React from 'react'
import { Redux } from 'redux-render'
import Component from '@reactions/component'
import { select } from '@rematch/select'

import Feed from './MeetupsFeed'

const MeetupsFeed = () => (
  <Redux
    selector={state => ({
      isLoading: state.loading.effects.meetups.fetch,
      meetups: select.meetups.all(state)
    })}
    children={(state, dispatch) => (
      <Component
        didMount={() => {
          dispatch.meetups.fetch()
        }}
        render={() => (
          <Feed isLoading={state.isLoading} meetups={state.meetups} />
        )}
      />
    )}
  />
)

export default MeetupsFeed
