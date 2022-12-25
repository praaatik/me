module.exports = {
  reactStrictMode: true,
  images: { loader: "custom" },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};
