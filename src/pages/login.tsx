import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import * as eva from 'eva-icons'

import { Input } from '../components/Input'

import { addUserCredentials } from '../store/modules/user/action'
import { api } from '../services/api'

export default function login() {
  const dispatch = useDispatch()
  const router = useRouter()

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

      // Tratativa com o Toast

      router.push('/challenges')
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
