import React, { ReactNode } from 'react'
import { Button, ButtonProps, Heading } from '@chakra-ui/react'

interface SolidProps extends ButtonProps {
  children: ReactNode
}

export function Solid({ children, ...props }: SolidProps) {
  return (
    <Button
      bgColor="purple.500"
      size="lg"
      _hover={{ bgColor: 'purple.700' }}
      w="fit-content"
      paddingY="16px"
      paddingX="33px"
      {...props}
    >
      <Heading variant="18">{children}</Heading>
    </Button>
  )
}
