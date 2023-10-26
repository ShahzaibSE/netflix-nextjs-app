/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/assets/hero.jpg')",
      },
    },
  },
};

module.exports = nextConfig;
