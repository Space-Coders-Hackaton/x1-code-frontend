import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '../../../services/prismic'
import { useSelector } from 'react-redux'

import { Store } from '../../../store'
import { User } from '../../../store/modules/user/types'

import { Flex, Heading, HStack, Link, VStack } from '@chakra-ui/layout'
import { PodiumItem } from '../../../components/Ranking/PodiumItem'
import { ListItem } from '../../../components/Ranking/ListItem'

import { api } from '../../../services/api'

interface UserRank {
  points: number
  totalChallenges: number
  user: {
    id: string
    name: string
  }
  position?: number
}

interface RankingsProps {
  challenge: string
}

export default function Rankings({ challenge }: RankingsProps) {
  const router = useRouter()
  const { slug } = router.query

  const { id } = useSelector<Store, User>(state => state.user)

  const [users, setUsers] = useState<UserRank[]>([])
  const [principalUsers, setPrincipalUsers] = useState<UserRank[]>([])
  const [listUsers, setListUsers] = useState<UserRank[]>([])

  function filterShowUsers() {
    const newPrincipalUser: UserRank[] = []
    const newListUser: UserRank[] = []

    for (let index = 0; index <= 2; index++) {
      if (users[index]) {
        newPrincipalUser.push({
          ...users[index],
          position: index + 1
        })
      }
    }

    if (users.length > 3) {
      const loggedUser = users.findIndex(rank => rank.user.id === id)

      for (let index = 0; index <= 9; index++) {
        if (users[index]) {
          newListUser.push({
            ...users[index],
            position: index + 1
          })
        }
      }

      if (loggedUser !== -1 && loggedUser + 1 > newListUser.length) {
        newListUser.push({
          ...users[loggedUser],
          position: loggedUser + 1
        })
      }
    }

    setPrincipalUsers(newPrincipalUser)
    setListUsers(newListUser)
  }

  async function getUsers() {
    try {
      const { data } = await api.get(`/ranking/challenge/${slug}`)

      setUsers(data)
      filterShowUsers()
    } catch (err) {
      // Toast

      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Flex direction="column" px={28} py={14}>
      <Head>
        <title>{challenge} | X1 Code</title>
      </Head>

      <Flex direction="row" justifyContent="space-between" pb={5}>
        <Heading variant="48">{challenge}</Heading>
      </Flex>
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
            {listUsers.map(rank => {
              return (
                <ListItem
                  key={rank.user.id}
                  rank={rank.position}
                  name={rank.user.name}
                  score={rank.points}
                  isUser={rank.user.id === id}
                />
              )
            })}
          </VStack>
          {users.length > listUsers.length && (
            <Link alignSelf="center">
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
        <Heading p={28} alignSelf="center" variant="18">
          Nenhum usuário ;-;
        </Heading>
      )}
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { slug } = params
  const prismic = getPrismicClient(req)
  const response = await prismic.getByUID('challenge', String(slug), {})

  const challenge = RichText.asText(response.data.title)
  return {
    props: {
      challenge
    }
  }
}
