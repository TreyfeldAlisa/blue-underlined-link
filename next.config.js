/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require("next-videos");

const nextConfig = withVideos({
    reactStrictMode: true,
    transpilePackages: ["three, react-three-fiber", "drei"],
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: "svg-inline-loader",
            },
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ["react-three/drei"],
            },
        ],
    },
});

module.exports = nextConfig;
