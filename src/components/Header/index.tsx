import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button as ChakraButton,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuCommand,
  MenuDivider,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup
} from '@chakra-ui/react'

import { Button } from './Button'

export function Header() {
  return (
    <Flex as="header" py={8} px={28} justify="space-between">
      <Menu colorScheme="black" closeOnSelect={false}>
        <MenuButton
          as={ChakraButton}
          rightIcon={<ChevronDownIcon />}
          colorScheme="black"
        >
          Actions
        </MenuButton>
        <MenuList bgColor="black">
          <MenuItem _hover={{ bgColor: 'black' }}>Download</MenuItem>
          <MenuItem _hover={{ bgColor: 'black' }}>Create a Copy</MenuItem>
          <Menu placement='right'>
            <MenuButton
              as={ChakraButton}
              rightIcon={<ChevronDownIcon />}
              colorScheme="black"
            >
              Actions
            </MenuButton>
            <MenuList bgColor="black">
              <MenuItem _hover={{ bgColor: 'black' }} closeOnSelect={true}>Download</MenuItem>
            </MenuList>
          </Menu>
        </MenuList>
      </Menu>
      <HStack spacing={10}>
        <Image src="logo.svg" w={24} />
        <ButtonGroup spacing={10} variant="ghost">
          <Button hasArrow> Desafios </Button>
          <Button hasArrow> Rankings </Button>
          <Button> Sobre </Button>
        </ButtonGroup>
      </HStack>
      <HStack>
        <ButtonGroup spacing={6} variant="ghost">
          <ChakraButton _hover={{ bgColor: 'transparent' }}>
            <Heading variant="18">Cadastrar</Heading>
          </ChakraButton>
          <ChakraButton
            py="16px"
            px={8}
            _hover={{ bgColor: 'purple.700' }}
            bgColor="purple.500"
          >
            <Heading variant="18">Entrar</Heading>
          </ChakraButton>
        </ButtonGroup>
      </HStack>
    </Flex>
  )
}
