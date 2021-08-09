import React from 'react'

import { Heading, Image, Text, VStack, Flex } from '@chakra-ui/react'

export function Maintenance() {
  return (
    <Flex
      as="main"
      h="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <VStack mb="90px">
        <Heading variant="24" color="#FFFFFF">
          Opaa! Estamos em manutenção!
        </Heading>

        <Text variant="18" textAlign="center" color="#FFFFFF">
          Estamos construindo a nova versão do X1Code muita coisa boa vem por
          aí, <br />
          mas vai ter que esperar um pouquinho hehe.
          <br />{' '}
          <Text variant="16" fontStyle="italic">
            - Equipe Space Coders
          </Text>
        </Text>
      </VStack>

      <Image src="maintenance.svg" />
    </Flex>
  )
}
