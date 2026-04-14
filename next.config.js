/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['flotiq-components-react'],
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/1',
            },
        ]
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [{ hostname: 'api.flotiq.com' }],
    },
    webpack: (config, options) => {
        if (!options.isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
}

module.exports = nextConfig
