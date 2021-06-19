import * as eva from 'eva-icons'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { Store } from '../store'
import { User } from '../store/modules/user/types'

import {
  Button as ChakraButton,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuList
} from '@chakra-ui/react'

import { MenuButton } from './Menu/MenuButton'
import { SubMenuButton } from './Menu/SubMenuButton'
import { MenuItem } from './Menu/MenuItem'

import { menuRoutes } from '../utils/menuRoutes'
import Link from 'next/link'

export function Header() {
  const { name } = useSelector<Store, User>(state => state.user)
  const router = useRouter()

  useEffect(() => {
    eva.replace()
  }, [])

  function handleNavigate(to: string) {
    if (to) {
      router.push(to)
    }
  }

  return (
    <Flex as="header" py={8} px={28} justify="space-between">
      <HStack spacing={10}>
        <Image
          src="../logo.svg"
          w={24}
          onClick={() => handleNavigate('/')}
          cursor="pointer"
        />

        {menuRoutes.map((menuItem, key) => {
          if (!menuItem.items) {
            return (
              <ChakraButton
                key={key}
                bgColor="transparent"
                _hover={{ bgColor: 'transparent ' }}
                fontWeight={700}
                fontSize="20px"
                lineHeight="150%"
                onClick={() => handleNavigate(menuItem.to)}
              >
                {menuItem.name}
              </ChakraButton>
            )
          } else {
            return (
              <Menu
                key={key}
                colorScheme="black"
                closeOnSelect={false}
                autoSelect={false}
              >
                <MenuButton>{menuItem.name}</MenuButton>
                {menuItem.items && (
                  <MenuList
                    bgColor="#26262b"
                    fontWeight={600}
                    fontSize="18px"
                    lineHeight="118%"
                    border={0}
                    minWidth="full"
                  >
                    {menuItem.items.map(item => {
                      if (!item.subItems) {
                        return (
                          <MenuItem
                            key={item.name}
                            onClick={() => handleNavigate(item.to)}
                          >
                            {item.name}
                          </MenuItem>
                        )
                      } else {
                        return (
                          <Menu
                            key={item.name}
                            placement="right"
                            autoSelect={false}
                          >
                            <SubMenuButton
                              onClick={() => handleNavigate(item.to)}
                              icon
                            >
                              {item.name}
                            </SubMenuButton>
                            <MenuList
                              bgColor="#26262b"
                              minWidth="full"
                              border={0}
                            >
                              {item.subItems.map(subItem => (
                                <MenuItem
                                  key={subItem.name}
                                  onClick={() => handleNavigate(subItem.to)}
                                >
                                  {subItem.name}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </Menu>
                        )
                      }
                    })}
                  </MenuList>
                )}
              </Menu>
            )
          }
        })}
      </HStack>

      {!name && (
        <HStack spacing={6}>
          <Link href="/signin">
            <a>
              <ChakraButton variant="transparent">
                <Heading variant="18">Cadastrar</Heading>
              </ChakraButton>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <ChakraButton variant="solid">
                <Heading variant="18">Entrar</Heading>
              </ChakraButton>
            </a>
          </Link>
        </HStack>
      )}

      {name && (
        <Heading alignSelf="center" variant="18">
          Olá, {name}!
        </Heading>
      )}
    </Flex>
  )
}
