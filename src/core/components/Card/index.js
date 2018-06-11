import sys from 'system-components'
import { Flex } from 'grid-styled'

const Card = sys({
  bg: 'white',
  flex: 1,
  flexDirection: 'column',
  is: Flex,
  p: 3
})

export default Card
