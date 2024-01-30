const parseEnv = () => {
  const list = Object.entries(process.env)
    .filter(([key]) => key.indexOf('RSS_') === 0)
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(list);
};

parseEnv();
