import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body style={{ backgroundColor: 'var(--app-charcoal-color)' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
