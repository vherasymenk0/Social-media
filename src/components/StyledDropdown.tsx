import React, { FC, useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { SelectProps } from '@mui/material/Select/Select'

interface StyledDropdownProps extends SelectProps {
  options?: Option[] | null
  onChange?: () => void
  defaultValue?: string
}

type Option = {
  name: string
  [x: string]: string
}

const StyledDropdown: FC<StyledDropdownProps> = ({
  options,
  defaultValue,
  onChange,
  sx,
  label,
  disabled,
  size = 'small',
  ...props
}) => {
  const [selectValue, setSelectValue] = useState(defaultValue || options?.[0]?.value)

  const handleChange = (e) => {
    setSelectValue(e.target.value)
    onChange?.()
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="styled-select-label">{label}</InputLabel>
      <Select
        labelId="styled-select-label"
        id="styled-select"
        value={selectValue}
        size={size}
        sx={{ borderRadius: '0.5rem', ...sx }}
        label={label}
        onChange={handleChange}
        disabled={!options || disabled}
        {...props}
      >
        {options &&
          options.map(({ value, name }) => (
            <MenuItem key={name} value={value}>
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default StyledDropdown
