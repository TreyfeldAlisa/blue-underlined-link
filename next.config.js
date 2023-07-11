/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require("next-videos");
const with3D = require("next-transpile-modules")(["@react-three/fiber", "@react-three/drei"]);

const nextConfig = {
    distDir: 'out',
    output: "export",
    assetPrefix: "/blue-underlined-link/",
    basePath: "/blue-underlined-link",
    reactStrictMode: true,
    transpilePackages: ["@react-three/fiber", "@react-three/drei"],
    images: {
        unoptimized: true,
      },
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.(glb|gltf)$/,
                loader: "file-loader?name=glb/[name].[ext]",
            },
            {
                test: /\.mp4$/,
                use: "file-loader?name=videos/[name].[ext]",
            },
        );
        return config;
    },
};

module.exports = with3D(withVideos(nextConfig));
