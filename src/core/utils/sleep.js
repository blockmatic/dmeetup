import invariant from 'invariant'

export const getEnv2 = name => {
  const variableName = `REACT_APP_${name}`
  const variableValue = process.env[variableName]

  invariant(
    variableValue,
    `[${name}] variable is not defined. Please export it as ${variableName} and try again.`
  )

  return variableValue
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms * 1000))
export default sleep
