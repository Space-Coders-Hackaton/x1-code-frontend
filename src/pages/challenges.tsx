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

import { Pagination } from '../components/Pagination'
import { Select } from '../components/Select'

import { Option } from '../utils/interfaces'

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

export default function Challenges() {
  const [level, setLevel] = useState<string>()
  const [tech, setTech] = useState<string>()

  const elements = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <Flex py={12} px={28} direction="column">
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
        {elements.map(element => {
          return (
            <VStack
              key={element}
              bgColor="gray.800"
              borderRadius="11px"
              display="flex"
              alignItems="left"
              p={6}
              spacing={6}
            >
              <Image
                src="https://via.placeholder.com/340"
                borderRadius="11"
                h={40}
                w="full"
                objectFit="cover"
              />
              <HStack spacing={6}>
                <Box bgColor="purple.500" px={4} py={1} borderRadius="11px">
                  <Heading variant="14">ReactJS</Heading>
                </Box>
                <Box bgColor="pink.500" px={4} py={1} borderRadius="11px">
                  <Heading variant="14">Hard</Heading>
                </Box>
              </HStack>
              <Heading variant="24">Título desafio {element}</Heading>
            </VStack>
          )
        })}
      </SimpleGrid>
      <Pagination totalCountOfRegisters={6} />
    </Flex>
  )
}
