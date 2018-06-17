import { sleep } from 'core/utils'
import utils from './meetups.utils'
import mocks from './meetups.mocks'

const meetupModel = {
  state: {},
  reducers: {
    set: (state, { meetups }) => ({
      ...state,
      ...meetups
    })
  },
  effects: {
    async fetch () {
      const {
        entities: { meetups }
      } = utils.normalize(mocks.meetups)

      await sleep(1.5)
      this.set({ meetups })
    }
  },
  selectors: {
    all: state => {
      const { meetups } = utils.denormalize(Object.keys(state), state)
      return meetups
    }
  }
}

export default meetupModel
