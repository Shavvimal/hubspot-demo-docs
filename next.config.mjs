import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx',
  latex: true,
  search: {
    codeblocks: false
  }
})

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(webm|mp4)$/i,
      type: 'asset/resource'
    })
    return config
  }
}

export default withNextra(nextConfig)
