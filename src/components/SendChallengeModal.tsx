import React, { useRef } from 'react'

import {
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

// import { api } from '../services/api'

export function SendChallengeModal() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  async function handleSubmit() {
    const repositoryUrl = inputRef.current.value

    if (!repositoryUrl) return

    try {
      // Toast
    } catch (err) {
      // Toast

      console.log(err)
    }
  }

  return (
    <>
      <Button variant="outline" onClick={onOpen}>
        <Heading variant="18">Enviar solução</Heading>
      </Button>

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
