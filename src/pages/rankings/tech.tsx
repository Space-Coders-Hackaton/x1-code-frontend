import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'

import { Store } from '../../store'
import { User } from '../../store/modules/user/types'

import { InfoIcon } from '@chakra-ui/icons'
import { Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/tooltip'

import { ListItem } from '../../components/Ranking/ListItem'
import { PodiumItem } from '../../components/Ranking/PodiumItem'
import { Select } from '../../components/Select'
import * as eva from 'eva-icons'

import { api } from '../../services/api'
import { useToast } from '../../hooks/useToast'

interface UserRank {
  points: number
  totalChallenges: number
  user: {
    id: string
    name: string
  }
  position?: number
}

export default function Rankings() {
  const { id } = useSelector<Store, User>(state => state.user)
  const { sendToast } = useToast()

  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const [users, setUsers] = useState<UserRank[]>([])
  const [principalUsers, setPrincipalUsers] = useState<UserRank[]>([])
  const [listUsers, setListUsers] = useState<UserRank[]>([])

  const [tech, setTech] = useState('')

  function filterShowUsers(data: UserRank[]) {
    const newPrincipalUser: UserRank[] = []
    const newListUser: UserRank[] = []

    const totalUsers = currentPage * 12

    for (let index = 0; index <= totalUsers + 2; index++) {
      if (data[index]) {
        newPrincipalUser.push({
          ...data[index],
          position: index + 1
        })
      }
    }

    if (data.length > 3) {
      const loggedUser = data.findIndex(rank => rank.user.id === id)

      for (let index = 2; index <= totalUsers + 9; index++) {
        if (data[index]) {
          newListUser.push({
            ...data[index],
            position: index + 1
          })
        }
      }

      if (loggedUser !== -1 && loggedUser + 1 > newListUser.length) {
        newListUser.push({
          ...data[loggedUser],
          position: loggedUser + 1
        })
      }
    }

    setPrincipalUsers(newPrincipalUser)
    setListUsers(newListUser)
  }

  async function getUsers() {
    try {
      const { data } = await api.get(`/ranking/technology/${tech}`)

      setUsers(data)
      setTotalPages(Math.ceil(data.length / 13))
      filterShowUsers(data)
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
    filterShowUsers(users)
  }, [currentPage])

  useEffect(() => {
    getUsers()
  }, [tech])

  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <Flex direction="column" px={28} py={14}>
      <Head>
        <title>Ranking por tecnologia | X1 Code</title>
      </Head>

      <Flex direction="row" justifyContent="space-between" pb={5}>
        <Heading variant="48">Ranking - Tecnologia</Heading>
        <HStack spacing={4}>
          <Text variant="18">Como funciona</Text>
          <Tooltip
            hasArrow
            label="Um ranking de todos os usuários da aplicação que já enviaram soluções de desafios baseado na pontuação recebida, com filtro em tecnologia."
            fontSize="md"
          >
            <InfoIcon />
          </Tooltip>
        </HStack>
      </Flex>
      <Select
        onSelect={e => setTech(e.value)}
        placeholder="Tecnologia"
        options={[
          {
            optionText: 'ReactJS',
            value: 'reactjs'
          },
          {
            optionText: 'NodeJS',
            value: 'nodejs'
          }
        ]}
      />
      {users.length > 0 && (
        <>
          <HStack
            spacing={40}
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            {principalUsers[1] && (
              <PodiumItem
                name={principalUsers[1].user.name}
                place={2}
                score={principalUsers[1].points}
              />
            )}
            {principalUsers[0] && (
              <PodiumItem
                name={principalUsers[0].user.name}
                place={1}
                score={principalUsers[0].points}
              />
            )}
            {principalUsers[2] && (
              <PodiumItem
                name={principalUsers[2].user.name}
                place={3}
                score={principalUsers[2].points}
              />
            )}
          </HStack>
          <VStack mt={12} spacing={6}>
            <HStack w="full" alignItems="flex-start">
              <HStack flex="1" spacing={30}>
                <Text>POSIÇÃO</Text>
                <Text>USUÁRIO</Text>
              </HStack>

              <HStack spacing={20} pr={14}>
                <Text>DESAFIOS</Text>
                <Text>PONTUAÇÃO</Text>
              </HStack>
            </HStack>
            {listUsers.map(rank => {
              return (
                <ListItem
                  key={rank.user.id}
                  rank={rank.position}
                  name={rank.user.name}
                  score={rank.points}
                  totalChallenges={rank.totalChallenges}
                  isUser={rank.user.id === id}
                />
              )
            })}
          </VStack>
          {currentPage + 1 < totalPages && (
            <Link
              alignSelf="center"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <Heading
                variant="24"
                color="purple.500"
                mt={12}
                mb={48}
                _hover={{ textDecoration: 'underline' }}
              >
                Ver mais
              </Heading>
            </Link>
          )}
        </>
      )}

      {users.length <= 0 && (
        <Heading p={20} alignSelf="center" variant="18">
          {tech ? 'Nenhum usuário ;-;' : 'Selecione uma tecnologia!'}
        </Heading>
      )}
    </Flex>
  )
}
