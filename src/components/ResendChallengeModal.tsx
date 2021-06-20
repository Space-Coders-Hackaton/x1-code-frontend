import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import { Store } from '../store'
import { User } from '../store/modules/user/types'

import {
  Text,
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

interface SendChallengeModalProps {
  challenge: Challenge
}

export function ResendChallengeModal({ challenge }: SendChallengeModalProps) {
  const { id, token } = useSelector<Store, User>(state => state.user)
  const inputRef = useRef<HTMLInputElement>(null)
  const { sendToast } = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <Button onClick={onOpen}>Resend Challenge</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="gray.900" p={4} pb={10} w="375px" h="397px">
          <ModalHeader mt={6}>
            <Heading variant="18">Você já concluiu esse desafio!</Heading>
            <Text variant="16" mt={4} textAlign="center">
              Você já concluiu esse desafio antes. Sua pontuação foi{' '}
              <span style={{ color: '#8d34d9' }}>32</span> com{' '}
              <span style={{ color: '#8d34d9' }}>9/10</span> acertos.
            </Text>
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody mt={10} w="full" p={0} mb={8}>
            <Text variant="16" textAlign="center" mb={2}>
              Deseja reenviar?
            </Text>
            <Input
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
