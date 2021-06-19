import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'
import React, { useEffect, useState } from 'react'

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import * as eva from 'eva-icons'

import { Pagination } from '../../components/Pagination'
import { Select } from '../../components/Select'

import { Option } from '../../utils/interfaces'

const levelOptions: Option[] = [
  {
    optionText: 'Hard',
    value: 'hard'
  },
  {
    optionText: 'Normal',
    value: 'normal'
  },
  {
    optionText: 'Easy',
    value: 'easy'
  }
]

const techOptions: Option[] = [
  {
    optionText: 'ReactJS',
    value: 'reactjs'
  },
  {
    optionText: 'NodeJS',
    value: 'nodejs'
  }
]

interface Challenge {
  slug: string
  title: string
  banner: string
  technology: string
  difficulty: string
}

interface ChallengesProps {
  challenges: Challenge[]
}

export default function Challenges({ challenges }: ChallengesProps) {
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)
  const [showChallenges, setShowChallenges] = useState<Challenge[]>([])

  const [level, setLevel] = useState('')
  const [tech, setTech] = useState('')

  function filterChallenges(isTech = false) {
    if (!tech && !level) return challenges

    return challenges.filter(challenge => {
      const matchDifficulty =
        challenge.difficulty.toLowerCase() === level.toLowerCase()
      const matchTech =
        challenge.technology.toLowerCase() === tech.toLowerCase()

      if (isTech && matchTech) return challenge
      if (!isTech && matchDifficulty) return challenge
    })
  }

  useEffect(() => {
    eva.replace()
  }, [])

  useEffect(() => {
    setShowChallenges(filterChallenges(true))
  }, [tech])

  useEffect(() => {
    setShowChallenges(filterChallenges())
  }, [level])

  useEffect(() => {
    const newChallenges: Challenge[] = []
    for (let index = (currentPage - 1) * 8; index < 8 * currentPage; index++) {
      if (challenges[index]) {
        newChallenges.push(challenges[index])
      }
    }
    setShowChallenges(newChallenges)
  }, [currentPage])

  useEffect(() => {
    const urlString = window.location.href
    const url = new URL(urlString)
    const paramLevel = url.searchParams.get('level')

    if (paramLevel && levelOptions.find(op => op.value === paramLevel)) {
      setLevel(paramLevel)
    }
  }, [])

  return (
    <Flex py={12} px={28} direction="column">
      <Head>
        <title>Desafios | X1 Code</title>
      </Head>

      <Heading variant="48" mb={6}>
        Desafios
      </Heading>
      <HStack spacing={4} pb={16}>
        <Select
          onSelect={option => setLevel(option.value)}
          options={levelOptions}
          placeholder="Nível"
          selected={levelOptions.find(op => op.value === level)}
        />
        <Select
          onSelect={option => setTech(option.value)}
          options={techOptions}
          placeholder="Tecnologia"
          selected={techOptions.find(op => op.value === tech)}
        />
      </HStack>
      <SimpleGrid columns={3} spacing={8} minChildWidth="340px">
        {showChallenges.length <= 0 && (
          <Heading variant="18">Nenhum desafio</Heading>
        )}

        {showChallenges.map(challenge => {
          return (
            <VStack
              key={challenge.slug}
              bgColor="gray.800"
              borderRadius="11px"
              display="flex"
              alignItems="left"
              p={6}
              spacing={6}
              maxW={389}
              cursor="pointer"
              onClick={() => router.push(`/challenges/${challenge.slug}`)}
            >
              <Image
                src={challenge.banner}
                borderRadius="11"
                h={40}
                w="full"
                objectFit="cover"
              />
              <HStack spacing={6}>
                <Box bgColor="purple.500" px={4} py={1} borderRadius="11px">
                  <Heading variant="14">{challenge.technology}</Heading>
                </Box>
                <Box bgColor="pink.500" px={4} py={1} borderRadius="11px">
                  <Heading variant="14">{challenge.difficulty}</Heading>
                </Box>
              </HStack>
              <Heading variant="24">{challenge.title}</Heading>
            </VStack>
          )
        })}
      </SimpleGrid>
      <Pagination
        totalCountOfRegisters={challenges.length}
        registersPerPage={8}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'challenge')],
    {
      pageSize: 100
    }
  )

  const challenges = response.results.map(challenge => {
    return {
      slug: challenge.uid,
      title: RichText.asText(challenge.data.title),
      banner: challenge.data.banner.url,
      technology: challenge.data.technology,
      difficulty: challenge.data.difficulty
    }
  })

  return {
    props: {
      challenges
    }
  }
}
