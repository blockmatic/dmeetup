import { connect } from 'react-redux'

const WithStore = ({ children, ...props }) => children(props)
const defaultSelector = state => state

const connectHOC = connect((state, { select = defaultSelector }) => ({
  state: select(state)
}))(WithStore)

export default connectHOC
