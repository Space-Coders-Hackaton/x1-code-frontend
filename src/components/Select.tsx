import React, { useState } from 'react'
import {
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'

import { Option } from '../utils/interfaces'

interface SelectProps {
  options: Option[]
  placeholder: string
  onSelect(option: Option): void
  selected?: Option
}

export function Select({
  options,
  placeholder,
  onSelect,
  selected
}: SelectProps) {
  const [selectedOption, setSelectedOption] = useState<Option>()

  function handleSelect(option: Option) {
    selected !== undefined
      ? setSelectedOption(undefined)
      : setSelectedOption(option)
    onSelect(option)
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        minW={32}
        bgColor="gray.800"
        textColor="white"
        rightIcon={<i data-eva="arrow-down" data-eva-fill="#33303E"></i>}
        _hover={{ bgColor: 'gray.700' }}
        colorScheme="gray.700"
        textAlign="left"
      >
        <Heading variant="18">
          {selected?.optionText || selectedOption?.optionText || placeholder}
        </Heading>
      </MenuButton>
      <MenuList bgColor="gray.800" minWidth={32} border={0}>
        {options.map(option => (
          <MenuItem
            key={option.value}
            _hover={{ bgColor: 'gray.700' }}
            closeOnSelect={true}
            onClick={() => handleSelect(option)}
          >
            <Heading variant="18">{option.optionText}</Heading>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
