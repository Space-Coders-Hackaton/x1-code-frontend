import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChakraProvider>
  )
}

export default MyApp
