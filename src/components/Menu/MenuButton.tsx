import React, { ReactNode } from 'react'
import {
  Button,
  MenuButton as ChakraMenuButton,
  ButtonProps as ChakraMenuButtonProps
} from '@chakra-ui/react'

interface MenuButtonProps extends ChakraMenuButtonProps {
  children: ReactNode
}

export function MenuButton({ children, ...props }: MenuButtonProps) {
  return (
    <ChakraMenuButton
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
      {...props}
    >
      {children}
    </ChakraMenuButton>
  )
}
