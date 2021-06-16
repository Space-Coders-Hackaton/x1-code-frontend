import React, { ReactNode } from 'react'
import { Button, ButtonProps, Heading } from '@chakra-ui/react'

interface TransparentProps extends ButtonProps {
  children: ReactNode
}

export function Transparent({ children, ...props }: TransparentProps) {
  return (
    <Button
      bgColor="transparent"
      size="lg"
      _hover={{ bgColor: 'transparent' }}
      {...props}
    >
      <Heading variant="18">{children}</Heading>
    </Button>
  )
}
