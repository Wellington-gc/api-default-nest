export default () => ({
  database: {
    url: process.env.DATABASE_URL,
  },
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  throttleTimeToLive: process.env.THROTTLE_TTL,
  throttleLimit: process.env.THROTTLE_LIMIT,
});
