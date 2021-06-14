import React from 'react'
import Head from 'next/head'
import { Flex, Heading, Text, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Flex justifyContent="center">
        <VStack spacing={4}>
          <Heading variant="48">Heading 48</Heading>
          <Heading variant="32">Heading 32</Heading>
          <Heading variant="28">Heading 28</Heading>
          <Heading variant="24">Heading 24</Heading>
          <Heading variant="20">Heading 20</Heading>
          <Heading variant="18">Heading 18</Heading>
          <Text variant="18">Text 18</Text>
          <Text variant="16">Text 16</Text>
          <Text variant="14">Text 14</Text>
        </VStack>
      </Flex>
    </>
  )
}
