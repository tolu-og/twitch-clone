/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "robohash.org",
      "d2qp0siotla746.cloudfront.net",
      "static-cdn.jtvnw.net",
    ],
  },
};
