const parseEnv = () => {
  const filtredEnvVars = Object.keys(process.env).filter(vars => vars.startsWith('RSS_'));
  const formattedEnvVars = filtredEnvVars.map(vars => `${vars}=${process.env[vars]}`).join('; ');
  console.log(formattedEnvVars);
};

parseEnv();