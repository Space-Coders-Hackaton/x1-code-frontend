import * as eva from 'eva-icons'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { InfoIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  Tooltip,
  VStack
} from '@chakra-ui/react'

import { Pagination } from '../../../components/Pagination'

export default function Challenges() {
  const elements = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <Flex py={14} px={28} direction="column">
      <Flex direction="row" justifyContent="space-between">
        <Heading variant="48" mb={6}>
          Ranking - Desafios
        </Heading>
        <HStack spacing={4}>
          <Text variant="18">Como funciona</Text>
          <Tooltip
            hasArrow
            label="Um ranking de todos os usuários da aplicação que já enviaram soluções de desafios baseado na pontuação recebida, com filtro em desafio."
            fontSize="md"
          >
            <InfoIcon />
          </Tooltip>
        </HStack>
      </Flex>
      <HStack spacing={4} pb={16}>
        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            variant="transparent"
            w={32}
            bgColor="gray.800"
            textColor="white"
            rightIcon={<i data-eva="arrow-down" data-eva-fill="#33303E"></i>}
            _hover={{ bgColor: 'gray.700' }}
            colorScheme="gray.700"
            textAlign="left"
          >
            <Heading variant="18">Nível</Heading>
          </MenuButton>
          <MenuList bgColor="gray.800" minWidth={32} border={0}>
            <MenuItem _hover={{ bgColor: 'gray.700' }} closeOnSelect={true}>
              <Heading variant="18">Easy</Heading>
            </MenuItem>
            <MenuItem _hover={{ bgColor: 'gray.700' }} closeOnSelect={true}>
              <Heading variant="18">Normal</Heading>
            </MenuItem>
            <MenuItem _hover={{ bgColor: 'gray.700' }} closeOnSelect={true}>
              <Heading variant="18">Hard</Heading>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu autoSelect={false}>
          <MenuButton
            as={Button}
            variant="transparent"
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
      </HStack>
      <SimpleGrid columns={3} spacing={8} minChildWidth="340px">
        {elements.map(element => {
          return (
            <Link
              key={element}
              as={`/rankings/challenge/${element}`}
              href="/rankings/challenge/[element]"
            >
              <a>
                <VStack
                  bgColor="gray.800"
                  borderRadius="11px"
                  display="flex"
                  alignItems="left"
                  p={6}
                  spacing={6}
                >
                  <Image
                    src="https://via.placeholder.com/340"
                    // borderRadius="20%" // add borderRadius before finishing
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
              </a>
            </Link>
          )
        })}
      </SimpleGrid>
      <Pagination totalCountOfRegisters={6} />
    </Flex>
  )
}
