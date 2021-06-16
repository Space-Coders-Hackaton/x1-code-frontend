import React from 'react'
import Link from 'next/link'

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
            <Button
              bgColor="purple.500"
              size="lg"
              _hover={{ bgColor: 'purple.700' }}
              maxW="9.1875rem"
            >
              <Heading variant="18">Página Inicial</Heading>
            </Button>
          </a>
        </Link>
      </VStack>
    </HStack>
  )
}
