import * as eva from 'eva-icons'
import React, { useEffect } from 'react'

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

export function Header() {
  useEffect(() => {
    eva.replace()
  }, [])

  return (
    <Flex as="header" py={8} px={28} justify="space-between">
      <HStack spacing={10}>
        <Image src="logo.svg" w={24} />

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
                        return <MenuItem>{item.name}</MenuItem>
                      } else {
                        return (
                          <Menu placement="right" autoSelect={false}>
                            <SubMenuButton icon>{item.name}</SubMenuButton>
                            <MenuList
                              bgColor="#26262b"
                              minWidth="full"
                              border={0}
                            >
                              {item.subItems.map(subItem => (
                                <MenuItem key={subItem.name}>
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
        <Button.Transparent>Cadastrar</Button.Transparent>
        <Button.Solid>Entrar</Button.Solid>
      </HStack>
    </Flex>
  )
}
