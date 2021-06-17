import React, { useEffect } from 'react'

import { InfoIcon } from '@chakra-ui/icons'
import { Menu } from '@chakra-ui/menu'
import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack
} from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/tooltip'

import { ListItem } from '../../components/Ranking/ListItem'
import { PodiumItem } from '../../components/Ranking/PodiumItem'
import * as eva from 'eva-icons'

export default function Rankings() {
  useEffect(() => {
    eva.replace()
  }, [])

  const userRanks = [4, 5, 6, 7, 8, 9, 10]

  return (
    <Flex direction="column" px={28} py={14}>
      <Flex direction="row" justifyContent="space-between" pb={5}>
        <Heading variant="48">Ranking - Tecnologia</Heading>
        <HStack spacing={4}>
          <Text variant="18">Como funciona</Text>
          <Tooltip
            hasArrow
            label="Um ranking de todos os usuários da aplicação que já enviaram soluções de desafios baseado na pontuação recebida, com filtro em tecnologia."
            fontSize="md"
          >
            <InfoIcon />
          </Tooltip>
        </HStack>
      </Flex>
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          variant="transparent"
          mt={8}
          mb={20}
          w={44}
          bgColor="gray.800"
          textColor="white"
          rightIcon={<i data-eva="arrow-down" data-eva-fill="#33303E"></i>}
          _hover={{ bgColor: 'gray.700' }}
          colorScheme="gray.700"
          textAlign="left"
        >
          <Heading variant="18">Tecnologia</Heading>
        </MenuButton>
        <MenuList bgColor="gray.800" minWidth={44} border={0}>
          <MenuItem _hover={{ bgColor: 'gray.700' }} closeOnSelect={true}>
            <Heading variant="18">React</Heading>
          </MenuItem>
          <MenuItem _hover={{ bgColor: 'gray.700' }} closeOnSelect={true}>
            <Heading variant="18">Node.JS</Heading>
          </MenuItem>
        </MenuList>
      </Menu>
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
