import React from 'react'
import Head from 'next/head'

import { Maintenance } from '../components/Maintenance'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manutenção | X1 Code</title>
      </Head>

      <Maintenance />
    </>
  )
}
