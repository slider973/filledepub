/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, {isServer}) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};