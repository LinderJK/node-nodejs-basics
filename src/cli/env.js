const parseEnv = () => {
  const data = Object.entries(process.env)
    .filter(([key])=> key.includes('RSS_'))
    .map(([key, value])=> `${key}=${value}`)

  if (data.length > 0) {
    console.log(data.join('\n'));
  } else {
    console.log('No environment variables found');
  }
};

parseEnv();
