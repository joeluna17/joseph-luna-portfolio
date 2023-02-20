import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { theme as appTheme } from '@/config/app-theme/mui-theme'
import { ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      {' '}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
