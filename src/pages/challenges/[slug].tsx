import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '../../services/prismic'

import { Flex, Image, VStack, HStack, Box, Heading } from '@chakra-ui/react'

import Button from '../../components/Button'

import { DescriptionContainer } from '../../styles/pages/Challenge'

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

export default function Challenge({ challenge }: ChallengeProps) {
  function handleGoToTemplate() {
    window.open(challenge.templateUrl, '_blank')
  }

  return (
    <>
      <Head>
        <title>{challenge.title} | X1 Code</title>
      </Head>

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
            <Button.Solid onClick={handleGoToTemplate}>Template</Button.Solid>
            <Button.OutlinePink>Enviar solução</Button.OutlinePink>
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
