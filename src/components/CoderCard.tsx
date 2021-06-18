import { Image } from '@chakra-ui/image'
import { Heading, Text, VStack } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import React from 'react'

type CoderCardProps = {
  name: string
  role: string
  github: string
  description: string
  imageUrl: string
}

const MotionVStack = motion(VStack)

export function CoderCard({
  name,
  role,
  github,
  description,
  imageUrl
}: CoderCardProps) {
  function handleNavigateGithub() {
    window.open(github, '_blank')
  }

  return (
    <MotionVStack
      spacing={6}
      bg="transparent"
      border="1px"
      borderRadius="8px"
      borderColor="gray.800"
      p={8}
      pt={0}
      display="flex"
      alignItems="left"
      cursor="pointer"
      onClick={handleNavigateGithub}
      whileHover={{ scale: 1.1 }}
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
    </MotionVStack>
  )
}
