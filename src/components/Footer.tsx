import Link from 'next/link'
import React from 'react'

import {
  Flex,
  HStack,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/react'

export function Footer() {
  return (
    <Flex
      as="footer"
      w="100%"
      bottom={0}
      py={24}
      px={28}
      bg="gray.950"
      justify="space-between"
    >
      <VStack maxW="490px" align="flex-start" spacing={8} pr={4}>
        <Text variant="24">X1Code</Text>
        <Text variant="18">
          Projeto da equipe{' '}
          <ChakraLink
            color="purple.500"
            isExternal
            href="https://github.com/Space-Coders-Hackaton"
          >
            Space Coders
          </ChakraLink>{' '}
          para a primeira edição do Code/Station Hackaton, realizado pela{' '}
          <ChakraLink
            color="purple.500"
            isExternal
            href="https://rocketseat.com.br/"
          >
            Rocketseat
          </ChakraLink>{' '}
          e{' '}
          <ChakraLink color="purple.500" isExternal href="https://shawee.io/">
            Shawee
          </ChakraLink>{' '}
          para os alunos e alunas do Ignite.
        </Text>
        <Text color="gray.500">
          Space Coders © 2021 <br />
          Todos os direitos reservados.
        </Text>
      </VStack>
      <HStack spacing={20} align="flex-start">
        <Flex minW="max-content" direction="column">
          <Text variant="20" mb={6}>
            Desafios
          </Text>
          <List spacing={2.5}>
            <ListItem>
              <Link href="/challenges">
                <ChakraLink color="gray.500" variant="18">
                  Todos
                </ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/challenges?level=hard">
                <ChakraLink color="gray.500" variant="18">
                  Nível Hard
                </ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/challenges?level=normal">
                <ChakraLink color="gray.500" variant="18">
                  Nível Normal
                </ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/challenges?level=easy">
                <ChakraLink color="gray.500" variant="18">
                  Nível Easy
                </ChakraLink>
              </Link>
            </ListItem>
          </List>
        </Flex>
        <Flex minW="max-content" direction="column">
          <Text variant="20" mb={6}>
            Rankings
          </Text>
          <List spacing={2.5}>
            <ListItem>
              <Link href="/rankings">
                <ChakraLink color="gray.500" variant="18">
                  Geral
                </ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/rankings/challenge">
                <ChakraLink color="gray.500" variant="18">
                  Desafio
                </ChakraLink>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/rankings/tech">
                <ChakraLink color="gray.500" variant="18">
                  Tecnologia
                </ChakraLink>
              </Link>
            </ListItem>
          </List>
        </Flex>
        <Flex minW="max-content" direction="column">
          <Text variant="20" mb={6}>
            Equipe
          </Text>
          <List spacing={2.5}>
            <ListItem>
              <ChakraLink
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/allyfx"
              >
                Alícia Foureaux
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/carlosmfreitas2409"
              >
                Carlos Eduardo
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/Gilvan-Araujo"
              >
                Gilvan Araújo
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ChakraLink
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/ManoelDev"
              >
                Manoel Neto
              </ChakraLink>
            </ListItem>
          </List>
        </Flex>
      </HStack>
    </Flex>
  )
}
