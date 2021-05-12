import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from 'src/styles/theme'
import { GlobalStyle } from 'src/styles/globalStyles'

import 'src/styles/tailwind.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
