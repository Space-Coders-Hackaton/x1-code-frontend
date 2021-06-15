import Head from 'next/head'
import React from 'react'

import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'

import Mouse from '../../public/mouse.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <VStack spacing={0} as="main">
        <HStack
          as="section"
          backgroundImage="gradient.svg"
          bgPosition="right"
          bgRepeat="no-repeat"
          px={24}
          pt={36}
          spacing={32}
          display="flex"
          justifyContent="space-between"
        >
          <VStack as="section" spacing={8} display="flex" alignItems="left">
            <Heading variant="48">Desafios e competições!</Heading>
            <Text variant="18">
              Desafie-se concluindo diversos desafios dos mais diversos níveis e
              tecnologias. Compita com outros usuários com o nosso sistema de
              ranking e pontos!
            </Text>
            <Button size="lg" bgColor="purple.500" w={36}>
              Desafios
            </Button>
          </VStack>
          <Flex as="section">
            <Image src="code.svg" minW="615px" />
          </Flex>
        </HStack>
        <VStack
          display="flex"
          spacing={4}
          pb={10}
          direction="column"
          alignItems="center"
        >
          <Mouse />
          <Text variant="14">Deslize para ver mais</Text>
        </VStack>
        <HStack
          display="flex"
          justifyContent="center"
          height={44}
          w="full"
          pt={12}
          bgColor="gray.950"
          px={72}
          py={6}
          color="white"
          spacing={10}
        >
          <VStack spacing={2}>
            <Heading variant="72">70</Heading>
            <Heading variant="20" as="span">
              DESAFIOS
            </Heading>
          </VStack>
          <Divider orientation="vertical" />
          <VStack spacing={2}>
            <Heading variant="72">+100</Heading>
            <Heading variant="20" as="span">
              USUÁRIOS
            </Heading>
          </VStack>
          <Divider orientation="vertical" />
          <VStack spacing={2}>
            <Heading variant="72">2</Heading>
            <Heading variant="20" as="span">
              TECNOLOGIAS
            </Heading>
          </VStack>
          <Divider orientation="vertical" />
          <VStack spacing={2}>
            <Heading variant="72">+1000</Heading>
            <Heading variant="20" as="span">
              ENVIADOS
            </Heading>
          </VStack>
        </HStack>
      </VStack>
    </>
  )
}
