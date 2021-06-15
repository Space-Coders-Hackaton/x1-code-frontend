import { AppProps } from 'next/app'
import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
