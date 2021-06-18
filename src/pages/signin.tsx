import { Center, Button, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as eva from 'eva-icons'

import { Input } from '../components/Input'

import { api } from '../services/api'

export default function signn() {
  const router = useRouter()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange(input: string, e: React.ChangeEvent<HTMLInputElement>) {
    e.persist()

    setData(prevState => ({
      ...prevState,
      [input]: e.target.value
    }))
  }

  async function handleSubmit() {
    if (!data.email || !data.password) return

    try {
      await api.post('/user', data)

      // Tratativa com o Toast

      router.push('/login')
    } catch (err) {
      // Tratativa com o Toast

      console.log(err)
    }
  }

  useEffect(() => {
    eva.replace()
  }, [])

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
          <Input placeholder="Nome" onChange={e => handleChange('name', e)} />
          <Input
            placeholder="E-mail"
            onChange={e => handleChange('email', e)}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={e => handleChange('password', e)}
          />
        </VStack>
        <VStack spacing={4}>
          <Button onClick={handleSubmit} variant="solid" w={96}>
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
