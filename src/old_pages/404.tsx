import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'

export default function FourOhFour() {
  return (
    <HStack
      as="section"
      h="calc(100vh - 7rem)"
      px={28}
      display="flex"
      justifyContent="space-between"
    >
      <Head>
        <title>404 | X1 Code</title>
      </Head>

      <Flex as="section" flexShrink={1}>
        <Image src="404.svg" />
      </Flex>
      <VStack
        as="section"
        w="33rem"
        spacing={8}
        display="flex"
        alignItems="flex-end"
        textAlign="right"
      >
        <Heading variant="48">Você encontrou uma falhas nos testes!</Heading>
        <Text variant="24" fontWeight={400} w="24rem">
          Por favor, navegue sua IDE de volta para a base testada!
        </Text>
        <Link href="/">
          <a>
            <Button variant="solid">
              <Heading variant="18">Página Inicial</Heading>
            </Button>
          </a>
        </Link>
      </VStack>
    </HStack>
  )
}
