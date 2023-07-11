/**
 * @type {import('next').NextConfig}
 * */

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
                loader: "file-loader",
            },
            {
                test: /\.(mp4|mov)$/,
                loader: "file-loader",
            }
        ],
    },
};

module.exports = nextConfig;
