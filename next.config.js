const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ...withTM,
};
