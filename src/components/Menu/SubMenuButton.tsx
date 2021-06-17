import React, { ReactNode } from 'react'
import { Button, MenuButton, ButtonProps } from '@chakra-ui/react'

interface SubMenuButtonProps extends ButtonProps {
  icon?: boolean
  children: ReactNode
}

export function SubMenuButton({
  children,
  icon = false,
  ...props
}: SubMenuButtonProps) {
  return (
    <MenuButton
      as={Button}
      variant="transparent"
      rightIcon={
        icon && (
          <i
            data-eva="arrow-ios-forward-outline"
            data-eva-fill="#fff"
            data-eva-hover="false"
            data-eva-infinite="true"
          />
        )
      }
      colorScheme="gray.700"
      fontWeight={600}
      fontSize="18px"
      lineHeight="118%"
      _hover={{ bgColor: 'gray.800' }}
      {...props}
    >
      {children}
    </MenuButton>
  )
}
