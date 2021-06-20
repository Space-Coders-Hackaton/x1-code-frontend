import { Avatar, Image } from '@chakra-ui/react'
import { Box, Center, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'

type PodiumItemProps = {
  image?: string
  place: number
  name: string
  score: number
}

export function PodiumItem({ place, name, score }: PodiumItemProps) {
  let podiumImage

  if (place === 1) {
    podiumImage = (
      <>
        <Box>
          <Avatar
            boxSize="232px"
            borderColor="#FF9602"
            borderWidth="5px"
            color="white"
            bg="gray.900"
            size="xl"
            src=""
            name={name}
          />
        </Box>
        <Center
          bgColor="#FF9602"
          w={12}
          h={12}
          borderRadius="full"
          mt="-24px"
          mb={4}
          zIndex={9}
        >
          <Heading variant="28">{place}</Heading>
        </Center>
        <Heading variant="24">{name}</Heading>
        <Heading variant="24">{score} pt</Heading>
      </>
    )
  } else if (place === 2) {
    podiumImage = (
      <>
        <Box>
          <Avatar
            boxSize="232px"
            borderColor="#50E9FE"
            borderWidth="5px"
            color="white"
            bg="gray.900"
            size="xl"
            src=""
            name={name}
          />
        </Box>
        <Center
          bgColor="#50E9FE"
          w={12}
          h={12}
          borderRadius="full"
          mt="-24px"
          mb={4}
          zIndex={9}
        >
          <Heading variant="20">{place}</Heading>
        </Center>
        <Heading variant="18">{name}</Heading>
        <Heading variant="18">{score} pt</Heading>
      </>
    )
  } else {
    podiumImage = (
      <>
        <Box>
          <Avatar
            boxSize="232px"
            borderWidth="5px"
            borderColor="#FF9EFA"
            color="white"
            bg="gray.900"
            size="xl"
            src=""
            name={name}
          />
        </Box>
        <Center
          bgColor="#FF9EFA"
          w={12}
          h={12}
          borderRadius="full"
          mt="-24px"
          mb={4}
          zIndex={9}
        >
          <Heading variant="20">{place}</Heading>
        </Center>
        <Heading variant="18">{name}</Heading>
        <Heading variant="18">{score} pt</Heading>
      </>
    )
  }

  return (
    <Flex direction="column" alignItems="center">
      {place === 1 ? <Image src="/crown.svg" w="65px" pb={4} /> : ''}
      {podiumImage}
    </Flex>
  )
}
