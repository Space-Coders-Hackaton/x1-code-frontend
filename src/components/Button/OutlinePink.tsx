import React, { ReactNode } from 'react'
import { Button, ButtonProps, Heading } from '@chakra-ui/react'

interface OutlinePinkProps extends ButtonProps {
  children: ReactNode
}

export function OutlinePink({ children, ...props }: OutlinePinkProps) {
  return (
    <Button
      bgColor="transparent"
      borderColor="pink.500"
      border="2px"
      variant="outline"
      borderRadius="20px"
      size="lg"
      _hover={{ bgColor: 'pink.500' }}
      maxW="16.125rem"
      fontWeight={700}
      fontSize="20px"
      lineHeight="150%"
      h={16}
      {...props}
    >
      <Heading variant="18">{children}</Heading>
    </Button>
  )
}
