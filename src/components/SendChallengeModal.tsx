import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import { Store } from '../store'
import { User } from '../store/modules/user/types'

import {
  Box,
  Button,
  Input,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'

import { api } from '../services/api'
import { useToast } from '../hooks/useToast'

interface Challenge {
  slug: string
  title: string
  banner: string
  description: string
  templateUrl: string
  technology: string
  difficulty: string
}

interface CorrectionStats {
  pending: boolean
  daysTimeout: number | null
}

interface SendChallengeModalProps {
  challenge: Challenge
  correctionStats: CorrectionStats
}

export function SendChallengeModal({
  challenge,
  correctionStats
}: SendChallengeModalProps) {
  const { id, token } = useSelector<Store, User>(state => state.user)
  const inputRef = useRef<HTMLInputElement>(null)
  const { sendToast } = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleClickDisabled() {
    if (correctionStats.pending) {
      sendToast({
        title: 'Desafio já enviado antes',
        description: `Você já enviou este desafio antes, faltam ${correctionStats.daysTimeout} dias para que possa enviar novamente`,
        status: 'info'
      })
    }
  }

  async function handleSubmit() {
    const repositoryUrl = inputRef.current.value

    if (!repositoryUrl) return

    try {
      await api.post(
        '/corrections/send',
        {
          user_id: id,
          challenge_slug: challenge.slug,
          difficulty: challenge.difficulty.toLowerCase(),
          technology: challenge.technology.toLowerCase(),
          repository_url: repositoryUrl,
          template_url: challenge.templateUrl
        },
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )

      sendToast({
        title: 'Desafio enviado com sucesso!',
        description:
          'Fique atento(a) ao seu email. Qualquer atualização enviaremos por lá!',
        status: 'success'
      })

      onClose()
    } catch (err) {
      sendToast({
        title: 'Ocorreu um erro!',
        description: err.response.data.message,
        status: 'error'
      })
    }
  }

  return (
    <>
      <Box onClick={handleClickDisabled}>
        <Button
          variant="outline"
          onClick={onOpen}
          disabled={!id || correctionStats.pending}
        >
          <Heading variant="18">Enviar solução</Heading>
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          alignSelf="center"
          bgColor="gray.900"
          p={4}
          pb={10}
          w="349px"
          h="265px"
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody mt={6} w="full" p={0}>
            <Input
              ref={inputRef}
              bgColor="gray.700"
              border="2px"
              borderColor="gray.900"
              w="full"
              h="51px"
              placeholder="Repositório do Github"
              _placeholder={{ color: 'white' }}
            />
          </ModalBody>

          <ModalFooter
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={0}
          >
            <Button
              colorScheme="purple"
              onClick={handleSubmit}
              w="125px"
              h="53px"
              borderRadius="11px"
            >
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
