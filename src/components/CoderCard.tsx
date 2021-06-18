import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

type CoderCardProps = {
  name: string
  role: string
  description: string
  imageUrl: string
}

export function CoderCard({
  name,
  role,
  description,
  imageUrl
}: CoderCardProps) {
  return (
    <VStack
      spacing={6}
      bg="transparent"
      border="1px"
      borderRadius="8px"
      borderColor="gray.800"
      p={8}
      pt={0}
      display="flex"
      alignItems="left"
    >
      <Image
        src={imageUrl}
        w="180px"
        h="180px"
        mt="-76px"
        borderRadius="10px"
      />
      <VStack spacing={2} alignItems="left">
        <Heading variant="28">{name}</Heading>
        <Heading variant="18">{role}</Heading>
      </VStack>
      <Text variant="18">{description}</Text>
    </VStack>
  )
}
