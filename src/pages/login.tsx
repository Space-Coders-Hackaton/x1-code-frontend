import { Button, Center, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import * as eva from 'eva-icons'

export default function login() {
  useEffect(() => {
    eva.replace()
  }, [])

  const inputFields = ['Email', 'Senha']

  return (
    <Center py={40}>
      <VStack spacing={10}>
        <VStack spacing={2}>
          <Heading variant="32">Bem-vindo(a)!</Heading>
          <Text variant="18" textAlign="center" maxW="287px">
            Preencha os campos ou faça login pelo{' '}
            <span style={{ color: '#8D34D9' }}>Github</span>!
          </Text>
        </VStack>
        <VStack spacing={6}>
          {inputFields.map(input => (
            <Input
              key={input}
              placeholder={input}
              textColor="white"
              _placeholder={{ color: '#fff' }}
              border="2px"
              borderColor="gray.900"
              borderRadius="11px"
              bgColor="gray.700"
              w={96}
              size="lg"
            />
          ))}
        </VStack>
        <VStack spacing={4}>
          <Button variant="solid" w={96}>
            <Heading variant="18">Fazer login</Heading>
          </Button>
          <Button
            variant="outline"
            minW={96}
            rightIcon={<i data-eva="github" data-eva-fill="#8D34D9" />}
          >
            <Heading variant="18">Entrar pelo Github</Heading>
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}
