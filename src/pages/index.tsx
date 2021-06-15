import Head from 'next/head'
import React from 'react'

import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />
    </>
  )
}
