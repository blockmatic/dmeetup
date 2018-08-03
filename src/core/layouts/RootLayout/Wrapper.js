import sys from 'system-components'
import { Flex } from 'grid-styled'

const Wrapper = sys({
  bg: 'clouds',
  is: Flex,
  flexDirection: 'column',
  fontFamily: 'sans'
}).extend`
  min-height: 100vh;
`

export default Wrapper
