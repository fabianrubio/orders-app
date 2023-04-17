const config = {
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL || '',
    username: process.env.NEXT_PUBLIC_USERNAME || '',
    password: process.env.NEXT_PUBLIC_PASSWORD || '',
  },
};

export default config;
