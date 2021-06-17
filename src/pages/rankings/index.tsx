import React from 'react'

import { Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { InfoIcon } from '@chakra-ui/icons'
import { PodiumItem } from '../../components/Ranking/PodiumItem'
import { ListItem } from '../../components/Ranking/ListItem'

export default function Rankings() {
  const userRanks = [4, 5, 6, 7, 8, 9, 10]

  return (
    <Flex direction="column" px={28} py={14}>
      <Flex direction="row" justifyContent="space-between" pb={5}>
        <Heading variant="48">Ranking geral</Heading>
        <HStack spacing={4}>
          <Text variant="18">Como funciona</Text>
          <Tooltip
            hasArrow
            label="Um ranking de todos os usuários da aplicação que já enviaram soluções de desafios baseado na pontuação recebida."
            fontSize="md"
          >
            <InfoIcon />
          </Tooltip>
        </HStack>
      </Flex>
      <HStack
        spacing={40}
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
      >
        <PodiumItem name="John Doe" place={2} score={30} />
        <PodiumItem name="John Doe" place={1} score={30} />
        <PodiumItem name="John Doe" place={3} score={30} />
      </HStack>
      <VStack mt={12} spacing={6}>
        {userRanks.map(userRank => {
          return (
            <ListItem
              key={userRank}
              rank={userRank}
              name={`User ${userRank}`}
              score={userRank * 10}
            />
          )
        })}
        <ListItem rank={89} name="John Doe" score={30} isUser />
      </VStack>
      <Link alignSelf="center">
        <Heading
          variant="24"
          color="purple.500"
          mt={12}
          mb={48}
          _hover={{ textDecoration: 'underline' }}
        >
          Ver mais
        </Heading>
      </Link>
    </Flex>
  )
}
