import React, { useMemo } from 'react'

import { Stack, Text } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

type PaginationProps = {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange?: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 6,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages = useMemo(() => {
    if (currentPage < lastPage) {
      return generatePagesArray(
        currentPage,
        Math.min(currentPage + siblingsCount, lastPage)
      )
    } else {
      return []
    }
  }, [currentPage, lastPage, siblingsCount])

  return (
    <Stack
      direction={['column', 'row']}
      spacing="6"
      mt="8"
      justify="flex-end"
      align="center"
    >
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            )
          })}

        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map(page => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            )
          })}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}
