/**
 * @type {import('next').NextConfig}
 * */

const withTM = require("next-transpile-modules")([
  "three/examples/jsm/lines/LineGeometry",
  "@react-three/drei",
     "@react-three/fiber",
"three, react-three-fiber", "drei"
])

const nextConfig = withTM({
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
            {
                test: /\.(mp4|webm|ogg|swf|ogv)$/,
                loader: "file-loader",
            },
            {
                test: /\.gif$/,
                loader: "file-loader",
        ],
    },
});

module.exports = nextConfig;
