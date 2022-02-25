import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../mocks')
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
