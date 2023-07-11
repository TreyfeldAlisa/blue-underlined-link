/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require('next-videos')

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["three, react-three-fiber", "drei"],
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
{
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    }
        ],
    },
});


module.exports = withVideos(nextConfig);
