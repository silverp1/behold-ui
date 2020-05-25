const getCurrentEnvironment = () => {
  const configuredEnvironment = process.env.REACT_APP_BEHOLD_MODE;
  const overrideEnvironment = process.env.REACT_APP_BEHOLD_MODE_OVERRIDE;
  return overrideEnvironment || configuredEnvironment || "development";
}

export default getCurrentEnvironment;
