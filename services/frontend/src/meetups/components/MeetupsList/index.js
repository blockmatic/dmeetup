import React from 'react'
import PropTypes from 'prop-types'
import { Trail } from 'react-spring'

import { Grid } from '../../../core/components'
import Placeholder from './Placeholder'
import { MeetupCard } from '../'

const MeetupsList = ({ meetups }) => (
  <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}>
    <Trail
      keys={meetups.map(({ id }) => id)}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {meetups.map(({ id, title, description }) => styles => (
        <Grid.Item
          is={MeetupCard}
          key={id}
          id={id}
          title={title}
          description={description}
          style={styles}
        />
      ))}
    </Trail>
  </Grid>
)

MeetupsList.Placeholder = Placeholder

MeetupsList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.shape(MeetupCard.propTypes)).isRequired
}

export default MeetupsList
