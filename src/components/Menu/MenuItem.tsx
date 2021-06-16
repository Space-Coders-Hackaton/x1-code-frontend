import React, { ReactNode } from 'react'
import {
  MenuItem as ChakraMenuItem,
  ButtonProps as ChakraMenuItemProps
} from '@chakra-ui/react'

interface MenuItemProps extends ChakraMenuItemProps {
  children: ReactNode
}

export function MenuItem({ children, ...props }: MenuItemProps) {
  return (
    <ChakraMenuItem
      bgColor="transparent"
      _hover={{ bgColor: 'gray.800' }}
      fontWeight={600}
      fontSize="18px"
      lineHeight="118%"
      {...props}
    >
      {children}
    </ChakraMenuItem>
  )
}
