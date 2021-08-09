import * as eva from 'eva-icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

import Mouse from '../../public/mouse.svg'

import { api } from '../services/api'

interface Stats {
  users: number
  corrections: number
  challenges: number
}

export default function Home() {
  const router = useRouter()
  const [stats, setStats] = useState({
    users: 0,
    corrections: 0,
    challenges: 0
  })

  function handleNavigateToChallenges() {
    router.push('/challenges')
  }

  async function getData() {
    try {
      const { data } = await api.get('/stats')

      setStats(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <>
      <Head>
        <title>Home | X1 Code</title>
      </Head>

      <VStack spacing={0} as="main">
        <VStack minH="90vh">
          <HStack
            as="section"
            backgroundImage="gradient.svg"
            bgPosition="right"
            bgRepeat="no-repeat"
            px={24}
            pt={36}
            spacing={300}
            display="flex"
            justifyContent="space-between"
          >
            <VStack
              as="section"
              spacing={8}
              display="flex"
              alignItems="left"
              w={480}
            >
              <Heading variant="48">Desafios e competições!</Heading>
              <Text variant="18">
                Desafie-se concluindo diversos desafios dos mais diversos níveis
                e tecnologias. Compita com outros usuários com o nosso sistema
                de ranking e pontos!
              </Text>
              <Button variant="solid" onClick={handleNavigateToChallenges}>
                <Heading variant="18">Desafios</Heading>
              </Button>
            </VStack>
            <Flex as="section">
              <Image src="code.svg" minW="615px" />
            </Flex>
          </HStack>
          <VStack
            display="flex"
            spacing={4}
            pt={20}
            pb={20}
            direction="column"
            alignItems="center"
          >
            <Mouse />
            <Text variant="14">Deslize para ver mais</Text>
          </VStack>
        </VStack>
        <HStack
          display="flex"
          justifyContent="center"
          height={44}
          w="full"
          pt={20}
          bgColor="gray.950"
          px={72}
          py={6}
          color="white"
          spacing={10}
        >
          <VStack spacing={2}>
            <Heading variant="72">{stats.challenges}</Heading>
            <Heading variant="20" as="span">
              DESAFIOS
            </Heading>
          </VStack>
          <Divider orientation="vertical" />
          <VStack spacing={2}>
            <Heading variant="72">{stats.users}</Heading>
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
            <Heading variant="72">{stats.corrections}</Heading>
            <Heading variant="20" as="span">
              ENVIADOS
            </Heading>
          </VStack>
        </HStack>
        <HStack py={36} px={24} spacing={28}>
          <SimpleGrid columns={2} spacingX={10} spacingY={14}>
            <VStack spacing={5}>
              <Box bgColor="#7EADC8" p={4} borderRadius={14}>
                <Icon as={FaReact} w={16} h={16} />
              </Box>
              <Heading variant="24">ReactJS</Heading>
              <Text variant="16" textAlign="center">
                Desafios com uma das bibliotecas mais utilizadas para frontend
                no mercado.
              </Text>
            </VStack>
            <VStack spacing={5}>
              <Box bgColor="#9E7EC8" p={4} borderRadius={14}>
                <Icon as={FaNodeJs} w={16} h={16} />
              </Box>
              <Heading variant="24">NodeJS</Heading>
              <Text variant="16" textAlign="center">
                Desafios sobre backend com a ferramenta NodeJS!
              </Text>
            </VStack>
            <VStack spacing={5} opacity="60%">
              <Box bgColor="gray.600" p={4} borderRadius={14}>
                <i
                  data-eva="bulb"
                  data-eva-height="5rem"
                  data-eva-width="5rem"
                  data-eva-fill="#5F5C6B"
                ></i>
              </Box>
              <Heading variant="24">Em breve...</Heading>
              <Text variant="16" textAlign="center">
                Em breve mais tecnologias com mais desafios para todos os devs!
              </Text>
            </VStack>
            <VStack spacing={5} opacity="60%">
              <Box bgColor="gray.600" p={4} borderRadius={14}>
                <i
                  data-eva="bulb"
                  data-eva-height="5rem"
                  data-eva-width="5rem"
                  data-eva-fill="#5F5C6B"
                ></i>
              </Box>
              <Heading variant="24">Em breve...</Heading>
              <Text variant="16" textAlign="center">
                Em breve mais tecnologias com mais desafios para todos os devs!
              </Text>
            </VStack>
          </SimpleGrid>
          <VStack spacing={8} display="flex" alignItems="left">
            <Heading variant="48">Escolha a melhor tecnologia</Heading>
            <Text variant="18">
              Temos desafios de várias tecnologias modernas no mercado, então
              essa é uma boa hora para treinar uma nova tecnologia ou então
              aperfeiçoar seus conhecimentos em uma. <br /> <br /> Cada desafio
              disponibiliza um template com testes. O objetivo do dev é fazer
              com que todos testes passem.
            </Text>
            <Button
              variant="outline"
              rightIcon={
                <i data-eva="arrow-forward-outline" data-eva-fill="#fff "></i>
              }
              onClick={handleNavigateToChallenges}
            >
              Comece agora
            </Button>
          </VStack>
        </HStack>
      </VStack>
    </>
  )
}
