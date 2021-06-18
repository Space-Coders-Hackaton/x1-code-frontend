import Head from 'next/head'
import { Center, Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import * as eva from 'eva-icons'

export default function signn() {
  useEffect(() => {
    eva.replace()
  }, [])

  const inputFields = ['Email', 'Senha']

  return (
    <Center py={40}>
      <Head>
        <title>Cadastrar | X1 Code</title>
      </Head>

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
          <Button variant="solid" w={96}>
            <Heading variant="18">Cadastrar-se</Heading>
          </Button>
          <Button
            variant="outline"
            minW={96}
            rightIcon={<i data-eva="github" data-eva-fill="#8D34D9" />}
          >
            <Heading variant="18">Cadastrar com Github</Heading>
          </Button>
        </VStack>
      </VStack>
    </Center>
  )
}
