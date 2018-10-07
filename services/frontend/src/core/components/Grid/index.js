import sys from 'system-components'

import Item from './Item'

const Grid = sys(
  {
    display: 'grid',
    gridGap: 4
  },
  'gridTemplateColumns'
)

Grid.Item = Item

export default Grid
