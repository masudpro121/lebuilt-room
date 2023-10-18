/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env : {
    LINE_CLIENT: process.env.LINE_CLIENT,
    REDIRECT_URL: process.env.REDIRECT_URL
  },
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

module.exports = nextConfig
