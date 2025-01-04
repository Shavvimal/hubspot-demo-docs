import { useConfig } from 'nextra-theme-docs'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  banner: {
    content: 'SAMMY Demo',
    key: 'SAMMY'
  },
  chat: {
    link: 'https://discord.gg/hEM84NMkRv' // Next.js discord server,
  },
  docsRepositoryBase:
    'https://github.com/shuding/nextra/blob/core/examples/docs',
  editLink: {
    content: 'Edit this page on GitHub'
  },
  faviconGlyph: '✦',
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – Nextra`
    const description =
      config.frontMatter.description || 'Nextra: the Next.js site builder'
    const image = config.frontMatter.image || 'https://nextra.site/og.jpeg'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://nextra.site" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    )
  },
  logo: (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="31"><g fill="none"><path d="M11.48 4.974v8.475H3.694V4.974H0v20.231h3.695v-8.2h7.784v8.2h3.696V4.974zm15.522 13.692a3.057 3.057 0 1 1-6.115 0V10h-3.505v8.666a6.556 6.556 0 0 0 13.112 0V10h-3.492v8.666zm25.971-7.773c0-1.777 1.175-2.34 2.462-2.34 1.038 0 2.408.79 3.305 1.748l2.295-2.706c-1.146-1.55-3.47-2.621-5.373-2.621-3.803 0-6.553 2.227-6.553 5.919 0 6.85 8.372 4.676 8.372 8.51 0 1.182-1.148 2.226-2.462 2.226-2.073 0-2.745-1.013-3.697-2.085l-2.548 2.649c1.63 2 3.64 3.016 6.047 3.016 3.613 0 6.519-2.254 6.519-5.778 0-7.604-8.373-5.241-8.373-8.538m51.8 11.08c-2.071 0-2.66-.896-2.66-2.268V13.63h3.22v-3.078h-3.22V6.491l-3.554 1.595V20.46c0 3.165 2.184 4.76 5.178 4.76.47.008.94-.03 1.402-.112l.867-3.192c-.391.027-.84.054-1.233.054M40.344 10.101c-1.736 0-2.948.504-4.12 1.653V5.095h-3.51v12.343c0 4.62 3.34 7.786 7.094 7.786 4.164 0 7.827-3.222 7.827-7.56 0-4.284-3.371-7.56-7.291-7.56m-.022 11.587a3.983 3.983 0 1 1 0-7.967 3.983 3.983 0 0 1 0 7.967m38.142-4.211c0-4.346-3.655-7.56-7.827-7.56-3.753 0-7.094 3.165-7.094 7.786v12.35h3.51v-6.668c1.17 1.147 2.384 1.653 4.118 1.653 3.92 0 7.292-3.276 7.292-7.561m-3.323-.044a3.983 3.983 0 1 1-7.967 0 3.983 3.983 0 0 1 7.967 0" fill="currentColor"/><path d="M89.806 9.75V6.223a2.716 2.716 0 0 0 1.566-2.448v-.081c0-1.5-1.216-2.716-2.716-2.716h-.081a2.716 2.716 0 0 0-2.716 2.716v.081a2.716 2.716 0 0 0 1.566 2.448V9.75a7.691 7.691 0 0 0-3.657 1.61l-9.673-7.534c.069-.249.105-.505.109-.762a3.06 3.06 0 1 0-3.064 3.054 3.027 3.027 0 0 0 1.507-.41l9.525 7.412a7.715 7.715 0 0 0 .118 8.69l-2.897 2.898a2.488 2.488 0 0 0-.724-.118 2.513 2.513 0 1 0 2.515 2.515 2.48 2.48 0 0 0-.118-.724l2.866-2.867A7.728 7.728 0 1 0 89.806 9.75m-1.188 11.6a3.965 3.965 0 1 1 0-7.927 3.965 3.965 0 0 1 .004 7.925" fill="#FF7A59"/></g></svg>

    </>
  )
}
