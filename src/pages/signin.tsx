import { Center, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Button from '../components/Button'
import * as eva from 'eva-icons'

export default function signn() {
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
            Feliz em te ver aqui! Escolha se cadastrar na plataforma ou pelo{' '}
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
          <Button.Solid w={96}>
            <Heading variant="18">Cadastrar-se</Heading>
          </Button.Solid>
          <Button.OutlinePink
            minW={96}
            display="flex"
            flexDirection="row"
            rightIcon={<i data-eva="github" data-eva-fill="#8D34D9" />}
          >
            <Heading variant="18">Cadastrar com Github</Heading>
          </Button.OutlinePink>
        </VStack>
      </VStack>
    </Center>
  )
}
