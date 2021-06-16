import * as eva from 'eva-icons'
import React, { useEffect } from 'react'

import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'

export function Header() {
  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <Flex as="header" py={8} px={28} justify="space-between">
      <HStack spacing={10}>
        <Image src="/logo.svg" w={24} />
        <Menu colorScheme="black" closeOnSelect={false} autoSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={
              <i
                data-eva="arrow-ios-downward-outline"
                data-eva-fill="#fff"
                data-eva-hover="false"
                data-eva-infinite="true"
              />
            }
            colorScheme="black"
            fontWeight={700}
            fontSize="20px"
            lineHeight="150%"
          >
            Rankings
          </MenuButton>
          <MenuList
            bgColor="#26262b"
            fontWeight={600}
            fontSize="18px"
            lineHeight="118%"
            border={0}
            minWidth="full"
          >
            <MenuItem
              bgColor="transparent"
              _hover={{ bgColor: 'gray.800' }}
              fontWeight={600}
              fontSize="18px"
              lineHeight="118%"
            >
              Todos
            </MenuItem>
            <Menu placement="right" autoSelect={false}>
              <MenuButton
                as={Button}
                rightIcon={
                  <i
                    data-eva="arrow-ios-forward-outline"
                    data-eva-fill="#fff"
                    data-eva-hover="false"
                    data-eva-infinite="true"
                  />
                }
                colorScheme="gray.700"
                fontWeight={600}
                fontSize="18px"
                lineHeight="118%"
                _hover={{ bgColor: 'gray.800' }}
              >
                Níveis
              </MenuButton>
              <MenuList bgColor="#26262b" minWidth="full" border={0}>
                <MenuItem
                  _hover={{ bgColor: 'gray.800' }}
                  closeOnSelect={true}
                  fontWeight={600}
                  fontSize="18px"
                  lineHeight="118%"
                >
                  Hard
                </MenuItem>
                <MenuItem
                  _hover={{ bgColor: 'gray.800' }}
                  closeOnSelect={true}
                  fontWeight={600}
                  fontSize="18px"
                  lineHeight="118%"
                >
                  Normal
                </MenuItem>
                <MenuItem
                  _hover={{ bgColor: 'gray.800' }}
                  closeOnSelect={true}
                  fontWeight={600}
                  fontSize="18px"
                  lineHeight="118%"
                >
                  Easy
                </MenuItem>
              </MenuList>
            </Menu>
          </MenuList>
        </Menu>
        <Menu colorScheme="black" closeOnSelect={false} autoSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={
              <i
                data-eva="arrow-ios-downward-outline"
                data-eva-fill="#fff"
                data-eva-hover="false"
                data-eva-infinite="true"
              />
            }
            colorScheme="black"
            fontWeight={700}
            fontSize="20px"
            lineHeight="150%"
          >
            Desafios
          </MenuButton>
          <MenuList
            bgColor="#26262b"
            fontWeight={600}
            fontSize="18px"
            lineHeight="118%"
            border={0}
            minWidth="203px"
          >
            <MenuItem
              bgColor="transparent"
              _hover={{ bgColor: 'gray.800' }}
              fontWeight={600}
              fontSize="18px"
              lineHeight="118%"
            >
              Geral
            </MenuItem>
            <MenuItem
              bgColor="transparent"
              _hover={{ bgColor: 'gray.800' }}
              fontWeight={600}
              fontSize="18px"
              lineHeight="118%"
            >
              Desafio
            </MenuItem>
            <MenuItem
              bgColor="transparent"
              _hover={{ bgColor: 'gray.800' }}
              fontWeight={600}
              fontSize="18px"
              lineHeight="118%"
            >
              Tecnologia
            </MenuItem>
          </MenuList>
        </Menu>
        <Button
          bgColor="transparent"
          _hover={{ bgColor: 'transparent ' }}
          fontWeight={700}
          fontSize="20px"
          lineHeight="150%"
        >
          Sobre
        </Button>
      </HStack>
      <HStack spacing={6}>
        <Button bgColor="transparent" _hover={{ bgColor: 'transparent' }}>
          <Heading variant="18">Cadastrar</Heading>
        </Button>
        <Button
          bgColor="purple.500"
          size="lg"
          _hover={{ bgColor: 'purple.700' }}
        >
          <Heading variant="18">Entrar</Heading>
        </Button>
      </HStack>
    </Flex>
  )
}
