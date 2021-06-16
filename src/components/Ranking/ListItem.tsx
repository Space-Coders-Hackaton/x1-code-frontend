import React from 'react'
import { BsDot } from 'react-icons/bs'

import { Box, Center, Flex, Heading, HStack, Image } from '@chakra-ui/react'

type ListItemProps = {
  rank: number
  image?: string
  name?: string
  score?: number
  isUser?: boolean
}

export function ListItem({ rank, name, score, isUser }: ListItemProps) {
  let bg
  isUser ? (bg = 'purple.500') : (bg = '#33303E')

  return (
    <Flex w="full" direction="row">
      <Center
        w="82px"
        h="82px"
        borderTopLeftRadius="11px"
        borderBottomLeftRadius="11px"
        bgColor={bg}
        mr={2}
      >
        <Heading variant="28">{rank}</Heading>
      </Center>
      <Flex
        bgColor={bg}
        w="full"
        alignItems="center"
        p={4}
        borderTopRightRadius="11px"
        borderBottomRightRadius="11px"
      >
        <Image
          src="https://bit.ly/sage-adebayo"
          w="50px"
          h="50px"
          borderRadius="full"
          mr={4}
        />
        <Heading variant="20">{name}</Heading>
        <BsDot />
        <Heading variant="20">{score}</Heading>
      </Flex>
    </Flex>
  )
}
