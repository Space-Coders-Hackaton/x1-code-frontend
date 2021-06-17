import * as eva from 'eva-icons'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import {
  Button as ChakraButton,
  Flex,
  HStack,
  Image,
  Menu,
  MenuList
} from '@chakra-ui/react'

import Button from '../components/Button'
import { MenuButton } from './Menu/MenuButton'
import { SubMenuButton } from './Menu/SubMenuButton'
import { MenuItem } from './Menu/MenuItem'

import { menuRoutes } from '../utils/menuRoutes'
import Link from 'next/link'

export function Header() {
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
                          <MenuItem onClick={() => handleNavigate(item.to)}>
                            {item.name}
                          </MenuItem>
                        )
                      } else {
                        return (
                          <Menu placement="right" autoSelect={false}>
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

      <HStack spacing={6}>
        <Link href="/signin">
          <a>
            <Button.Transparent>Cadastrar</Button.Transparent>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <Button.Solid>Entrar</Button.Solid>
          </a>
        </Link>
      </HStack>
    </Flex>
  )
}
