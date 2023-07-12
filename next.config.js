/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require("next-videos");
const withImages = require("next-images");
// const with3D = require("next-transpile-modules")(["three", "@react-three/fiber", "@react-three/drei"])

const nextConfig = {
    assetPrefix: 'https://treyfeldalisa.github.io/blue-underlined-link/',
    reactStrictMode: true,
    transpilePackages: ["@react-three-fiber", "@rect-three-drei"],
    images: {
        disableStaticImages: true,
    },
};

module.exports = withImages(withVideos(nextConfig));
