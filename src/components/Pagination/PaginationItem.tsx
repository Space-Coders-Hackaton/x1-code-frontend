import React from 'react'

import { Button, Center, Heading } from '@chakra-ui/react'

type PaginationItemProps = {
  pageNumber: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  pageNumber,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Center
        as="button"
        bg="purple.500"
        _hover={{ bgColor: 'purple.700' }}
        transition="all 0.25s"
        w="55px"
        h="55px"
        borderRadius="11px"
        disabled
        _disabled={{
          bg: 'purple.500',
          cursor: 'default'
        }}
      >
        <Heading variant="24">{pageNumber}</Heading>
      </Center>
    )
  }

  return (
    <Center
      as="button"
      bg="gray.500"
      transition="all 0.25s"
      w="55px"
      h="55px"
      borderRadius="11px"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(pageNumber)}
    >
      <Heading variant="24">{pageNumber}</Heading>
    </Center>
  )
}
