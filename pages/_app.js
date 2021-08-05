import 'styles/reset.css'
import 'styles/fonts.css'

import GlobalStyles from 'styles/GlobalStyles'
import { MediaQueriesProvider } from 'context/mediaQuery'
import { useMediaQueries } from 'hooks/useMediaQueries'
import Header from 'components/Header'

import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  const mediaQueries = useMediaQueries()

  return (
    <MediaQueriesProvider mediaQueries={mediaQueries}>
      <GlobalStyles />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaQueriesProvider>
  )
}

export default MyApp
