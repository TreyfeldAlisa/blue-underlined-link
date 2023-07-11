/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require('next-videos')

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["three, react-three-fiber", "drei"],
};


module.exports = withVideos(nextConfig);
