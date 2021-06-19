import { AppProps } from 'next/app'
import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'

import store from '../store'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ReduxProvider store={store}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </ReduxProvider>
    </ChakraProvider>
  )
}

export default MyApp
