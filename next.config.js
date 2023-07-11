/**
 * @type {import('next').NextConfig}
 * */

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["three, react-three-fiber", "drei"],
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "faderoom-headless.us",
            "www.faderoom-headless.us",
            "dtmqnbkq3btfh.cloudfront.net",
            "secure.gravatar.com",
            "automattic.com",
            "serve.onegraph.com",
            "onegraph.com",
            "maps.google.com",
            "lh3.googleusercontent.com",
            "maps.gstatic.com",
            "thefaderoom146.booksy.com",
            "dev-3cqt2bq0.auth0.com",
            "scontent-sea1-1.xx.fbcdn.net",
            "d2zdpiztbgorvt.cloudfront.net",
            "platform-lookaside.fbsbx.com",
            "square-postoffice-production.s3.amazonaws.com",
            "media.giphy.com",
        ],
    },
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
            },
        ],
    },
};

module.exports = nextConfig;
