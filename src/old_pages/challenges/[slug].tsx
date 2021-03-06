import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-dom'
import { useSelector } from 'react-redux'

import { Store } from '../../store'
import { User } from '../../store/modules/user/types'

import { getPrismicClient } from '../../services/prismic'

import {
  Flex,
  Button,
  Image,
  VStack,
  HStack,
  Box,
  Heading
} from '@chakra-ui/react'

import { SendChallengeModal } from '../../components/SendChallengeModal'
import { ResendChallengeModal } from '../../components/ResendChallengeModal'

import { DescriptionContainer } from '../../styles/pages/Challenge'
import { GoBack } from '../../components/GoBack'
import { api } from '../../services/api'

interface Challenge {
  slug: string
  title: string
  banner: string
  description: string
  templateUrl: string
  technology: string
  difficulty: string
}

interface ChallengeProps {
  challenge: Challenge
}

interface CorrectionStats {
  pending: boolean
  daysTimeout: number | null
}

export default function Challenge({ challenge }: ChallengeProps) {
  const { token } = useSelector<Store, User>(state => state.user)
  const [isResend, setIsResend] = useState(false)
  const [correctionStats, setCorrectionStats] = useState<CorrectionStats>({
    daysTimeout: null,
    pending: false
  })

  function handleGoToTemplate() {
    window.open(challenge.templateUrl, '_blank')
  }

  async function getChallengeStats() {
    if (!token) return

    try {
      const { data } = await api.get(`/corrections/${challenge.slug}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })

      if (data.correction) {
        setIsResend(true)
      }

      setCorrectionStats({
        ...data,
        daysTimeout: 7 - data.daysTimeout
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getChallengeStats()
  }, [token])

  return (
    <>
      <Head>
        <title>{challenge.title} | X1 Code</title>
      </Head>

      <Flex px={40}>
        <GoBack />
      </Flex>

      <Flex py={12} px={28} direction="column" alignItems="center">
        <Image
          src={challenge.banner}
          borderRadius="11"
          h={361}
          w={1224}
          objectFit="cover"
          bgColor="gray.800"
        />

        <Flex w="1224px" mt="56px" justify="space-between">
          <VStack alignItems="flex-start">
            <HStack spacing={6} alignItems="flex-end">
              <Box bgColor="purple.500" px={4} py={1} borderRadius="11px">
                <Heading variant="14">{challenge.technology}</Heading>
              </Box>
              <Box bgColor="pink.500" px={4} py={1} borderRadius="11px">
                <Heading variant="14">{challenge.difficulty}</Heading>
              </Box>
            </HStack>
            <Heading variant="48">{challenge.title}</Heading>
          </VStack>

          <HStack alignItems="flex-end">
            <Button variant="solid" onClick={handleGoToTemplate}>
              <Heading variant="18">Template</Heading>
            </Button>

            {isResend ? (
              <ResendChallengeModal
                correctionStats={correctionStats}
                challenge={challenge}
              />
            ) : (
              <SendChallengeModal
                correctionStats={correctionStats}
                challenge={challenge}
              />
            )}
          </HStack>
        </Flex>

        <DescriptionContainer
          style={{
            width: '1224px',
            marginTop: '34px'
          }}
          dangerouslySetInnerHTML={{ __html: challenge.description }}
        />
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { slug } = params
  const prismic = getPrismicClient(req)
  const response = await prismic.getByUID('challenge', String(slug), {})

  const challenge = {
    slug,
    title: RichText.asText(response.data.title),
    banner: response.data.banner.url,
    description: RichText.asHtml(response.data.description),
    templateUrl: response.data.template_url.url,
    technology: response.data.technology,
    difficulty: response.data.difficulty
  }
  return {
    props: {
      challenge
    }
  }
}
