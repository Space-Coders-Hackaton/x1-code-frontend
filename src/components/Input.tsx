import React from 'react'
import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export function Input(props: InputProps) {
  return (
    <ChakraInput
      _placeholder={{ color: '#fff' }}
      border="2px"
      borderColor="gray.900"
      borderRadius="11px"
      bgColor="gray.700"
      w={96}
      size="lg"
      textColor="white"
      {...props}
    />
  )
}
