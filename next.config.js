/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/skills",
        destination: "/#skills",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
