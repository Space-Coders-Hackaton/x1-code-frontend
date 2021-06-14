import { ReactNode } from 'react';

import { Button as ChakraButton, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

type ButtonProps = {
  children: ReactNode,
  hasArrow?: boolean
}

export function Button({children, hasArrow}: ButtonProps){
  return(
    <ChakraButton _hover={{bgColor: 'transparent'}}>
      <Heading variant='20'>
        {children} {hasArrow ? <ChevronDownIcon /> : ''}
      </Heading>
    </ChakraButton>
  )
}
