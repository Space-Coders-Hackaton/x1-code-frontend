import React from 'react'

import {
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react'

export function ResendChallengeModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
              onClick={onClose}
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
