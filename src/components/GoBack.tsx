import React from 'react'
import { useRouter } from 'next/router'

import { HStack, Heading } from '@chakra-ui/react'

export function GoBack() {
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  return (
    <HStack spacing="8px" onClick={handleGoBack} cursor="pointer">
      <i data-eva="arrow-back-outline" data-eva-fill="#F4EDE8"></i>

      <Heading variant="24">Voltar</Heading>
    </HStack>
  )
}
