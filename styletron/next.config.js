/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: function (config) {
        config.externals = config.externals || {}
        config.externals['styletron-server'] = 'styletron-server'
        return config
    },
}

module.exports = nextConfig
