import { Center, Button, Heading, Text, VStack, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as eva from 'eva-icons'

import { Input } from '../components/Input'

import { api } from '../services/api'
import { useToast } from '../hooks/useToast'

export default function signn() {
  const router = useRouter()
  const { sendToast } = useToast()

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

  function sendGithubWarning() {
    sendToast({
      title: 'Sem funcionalidade',
      description:
        'Estamos trabalhando para implementar essa funcionalidade, pode aguardar em uma próxima atualização',
      status: 'info'
    })
  }

  async function handleSubmit() {
    if (!data.email || !data.password) return

    try {
      await api.post('/users', data)

      sendToast({
        title: 'Usuário cadastrado com sucesso!',
        status: 'success'
      })

      router.push('/login')
    } catch (err) {
      err.response.data.errors.map(error => {
        sendToast({
          title: 'Ocorreu um erro',
          description: error.errors[0],
          status: 'error'
        })
      })
    }
  }

  useEffect(() => {
    eva.replace()
  }, [])

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
          <Box onClick={sendGithubWarning}>
            <Button
              variant="outline"
              minW={96}
              rightIcon={<i data-eva="github" data-eva-fill="#8D34D9" />}
              disabled
            >
              <Heading variant="18">Cadastrar com Github</Heading>
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Center>
  )
}
