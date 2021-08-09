import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button, Center, Heading, Text, VStack, Box } from '@chakra-ui/react'
import Head from 'next/head'
import * as eva from 'eva-icons'

import { Input } from '../components/Input'

import { addUserCredentials } from '../store/modules/user/action'
import { api } from '../services/api'
import { useToast } from '../hooks/useToast'

export default function login() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { sendToast } = useToast()

  const [data, setData] = useState({
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
      const response = await api.post('/sessions', data)
      const { user, token } = response.data
      const loggedUser = {
        ...user,
        token
      }
      dispatch(addUserCredentials(loggedUser))
      localStorage.setItem('xonecode:user', JSON.stringify(loggedUser))
      sendToast({
        title: 'Login feito com sucesso!',
        status: 'success'
      })
      router.push('/challenges')
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
        <title>Entrar | X1 Code</title>
      </Head>

      <VStack spacing={10}>
        <VStack spacing={2}>
          <Heading variant="32">Bem-vindo(a)!</Heading>
          <Text variant="18" textAlign="center" maxW="287px">
            Preencha os campos ou faça login pelo{' '}
            <span style={{ color: '#8D34D9' }}>Github</span>!
          </Text>
        </VStack>
        <VStack spacing={6}>
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
          <Button variant="solid" w={96} onClick={handleSubmit}>
            <Heading variant="18">Fazer login</Heading>
          </Button>
          <Box onClick={sendGithubWarning}>
            <Button
              variant="outline"
              minW={96}
              rightIcon={<i data-eva="github" data-eva-fill="#8D34D9" />}
              disabled
            >
              <Heading variant="18">Entrar pelo Github</Heading>
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Center>
  )
}
