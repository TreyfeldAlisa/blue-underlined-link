/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require('next-videos');
const withImages = require('next-images');


const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["three, react-three-fiber", "drei"],
};

module.exports = withImages(withVideos(nextConfig));
