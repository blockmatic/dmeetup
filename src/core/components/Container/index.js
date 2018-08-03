import sys from 'system-components'

const Container = sys({
  gridTemplateColumns: ['repeat(4, 1fr)', 'repeat(8, 1fr)', 'repeat(12, 1fr)'],
  mx: 'auto',
  maxWidth: 1200,
  px: 4,
  py: 4
})

export default Container
