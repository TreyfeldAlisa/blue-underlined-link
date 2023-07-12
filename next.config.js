/**
 * @type {import('next').NextConfig}
 * */

const withVideos = require("next-videos");
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@react-three/fiber", "@react-three/drei"]);

const nextConfig = withTM({
    reactStrictMode: true,
    images: {
        disableStaticImages: true,
        unoptimized: true,
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "gltf/[name].[hash:7].[ext]",
                },
            },
        });

        return config;
    },
});

module.exports = withImages(withVideos(nextConfig));
