import { Image } from '@chakra-ui/image'
import Head from 'next/head'
import { Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { CoderCard } from '../components/CoderCard'

type Coder = {
  name: string
  role: string
  github: string
  description: string
  imageUrl: string
}

export default function About() {
  const coders: Coder[] = [
    {
      name: 'Alícia Foureaux',
      role: 'Desenvolvedora Front-end',
      github: 'https://github.com/allyfx',
      description:
        'I am a Fullstack developer focused on the front-end. I use Node.js, React and React Native technologies.',
      imageUrl: 'https://avatars.githubusercontent.com/u/66289769?v=4'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Desenvolvedor Back-end',
      github: 'https://github.com/carlosmfreitas2409',
      description:
        'Young Learner | Front-end Developer | Full Stack Developer | RocketSeat & B7Web Student',
      imageUrl: 'https://avatars.githubusercontent.com/u/32655274?v=4'
    },
    {
      name: 'Gilvan Araújo',
      role: 'Desenvolvedor Front-end',
      github: 'https://github.com/Gilvan-Araujo',
      description:
        'Brazilian, student, undergraduate in Computer Science by UEPB.',
      imageUrl: 'https://avatars.githubusercontent.com/u/45008443?v=4'
    },
    {
      name: 'Manoel Neto',
      role: 'Desenvolvedor Back-end',
      github: 'https://github.com/ManoelDev',
      description:
        'Estudando javascript na intenção de me tornar um profissional Full-Stack!',
      imageUrl: 'https://avatars.githubusercontent.com/u/2908499?v=4'
    }
  ]

  return (
    <VStack spacing={24}>
      <Head>
        <title>Sobre | X1 Code</title>
      </Head>

      <VStack
        spacing={44}
        px={24}
        pt={36}
        w="full"
        display="flex"
        alignItems="center"
        maxW="1740px"
      >
        <HStack
          spacing={20}
          display="flex"
          w="full"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Image src="/coding.svg" h="352px" w="529px" objectFit="cover" />
          <Heading variant="64">
            Disponibilizamos <br /> conhecimento <br /> através da prática
          </Heading>
        </HStack>
        <HStack
          spacing={30}
          display="flex"
          w="full"
          alignItems="center"
          justifyContent="space-around"
        >
          <VStack spacing={6}>
            <Heading variant="48">
              O que é o Code/Station <br /> Hackathon?
            </Heading>
            <Text variant="18" maxW="575px">
              O Code/Station é um hackathon providênciado pela Rocketseat em
              conjunto com a Shawee para todos os alunos e alunas do programa
              Ignite. Nesta edição, os participantes tiveram que montar uma
              equipe de 3 à 5 pessoas para criar uma aplicação do completo zero
              com todos os conhecimentos adquiridos durante o treinamento. O
              tema era livre, com o único requisito de utilizar ferramentas
              introduzidas no curso.
            </Text>
          </VStack>
          <Image src="/codestation.svg" />
        </HStack>
        <HStack
          spacing={30}
          display="flex"
          w="full"
          alignItems="center"
          justifyContent="space-around"
        >
          <Image src="/logo-big.svg" w="465px" h="441px" />
          <VStack spacing={6} alignItems="left">
            <Heading variant="48">O que é o X1 Code?</Heading>
            <Text variant="18" maxW="575px">
              O X1 Code é um projeto do time Space Coders para o hackathon. A
              ideia é ajudar novos desenvolvedores a melhorar suas habilidades
              resolvendo desafios reais já preparados pela equipe. O dev não tem
              mais que se preocupar em criar um projeto do zero para estudar ou
              adicionar ao portifólio. Além disso, também temos um sistema de
              ranking, onde o dev pode competir com outros usuário da plataforma
              com os pontos recebidos a cada desafio resolvido.
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <HStack
        spacing="300px"
        bgImage="/staff.png"
        w="full"
        h="auto"
        p={24}
        bgRepeat="no-repeat"
        bgSize="cover"
        justifyContent="space-between"
      >
        <Heading variant="48" maxW="446px">
          Conheça os desenvolvedores{' '}
        </Heading>
        <Text variant="18" maxW="484px">
          Conheça os 4 desenvolvedores que tomaram a iniciativa de construir o
          “Xone Code” - sua plataforma de relacionamento através de códigos. Não
          se harmonize mais com pessoas que utilizam espaços ao invés de tabs! O
          futuro é agora!
        </Text>
      </HStack>
      <SimpleGrid columns={4} spacing={8} w="full" px={24} py={20}>
        {coders.map(coder => (
          <CoderCard
            key={coder.imageUrl}
            name={coder.name}
            role={coder.role}
            github={coder.github}
            description={coder.description}
            imageUrl={coder.imageUrl}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
