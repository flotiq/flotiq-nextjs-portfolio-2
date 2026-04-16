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
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
}

module.exports = nextConfig
