import invariant from "invariant";

const getEnv = name => {
  const variableName = `REACT_APP_${name}`;
  const variableValue = process.env[variableName];

  invariant(
    variableValue,
    `[${name}] variable is not defined. Please export it as ${variableName} and try again.`
  );

  return variableValue;
};

export default getEnv;
