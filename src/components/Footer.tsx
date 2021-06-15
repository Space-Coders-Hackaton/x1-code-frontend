import React from 'react'

import {
  Flex,
  Link,
  VStack,
  Text,
  HStack,
  List,
  ListItem
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
          <Link
            color="#7B2CBF"
            isExternal
            href="https://github.com/Space-Coders-Hackaton"
          >
            Space Coders
          </Link>{' '}
          para a primeira edição do Code/Station Hackaton, realizado pela{' '}
          <Link color="#7B2CBF" isExternal href="https://rocketseat.com.br/">
            Rocketseat
          </Link>{' '}
          e{' '}
          <Link color="#7B2CBF" isExternal href="https://shawee.io/">
            Shawee
          </Link>{' '}
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
              <Link color="gray.500" variant="18">
                Todos
              </Link>
            </ListItem>
            <ListItem>
              <Link color="gray.500" variant="18">
                Nível Hard
              </Link>
            </ListItem>
            <ListItem>
              <Link color="gray.500" variant="18">
                Nível Normal
              </Link>
            </ListItem>
            <ListItem>
              <Link color="gray.500" variant="18">
                Nível Easy
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
              <Link color="gray.500" variant="18">
                Geral
              </Link>
            </ListItem>
            <ListItem>
              <Link color="gray.500" variant="18">
                Desafio
              </Link>
            </ListItem>
            <ListItem>
              <Link color="gray.500" variant="18">
                Tecnologia
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
              <Link
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/carlosmfreitas2409"
              >
                Carlos Eduardo
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/ManoelDev"
              >
                Manoel Neto
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/allyfx"
              >
                Alícia Foureaux
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/Gilvan-Araujo"
              >
                Gilvan Araújo
              </Link>
            </ListItem>
            <ListItem>
              <Link
                color="gray.500"
                variant="18"
                isExternal
                href="https://github.com/JuDCraide"
              >
                Júlia D. Craide
              </Link>
            </ListItem>
          </List>
        </Flex>
      </HStack>
    </Flex>
  )
}
