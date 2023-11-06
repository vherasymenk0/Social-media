import { FC, ReactNode, useState } from 'react'

import { Option } from '~/types/shared'

import { MenuItem } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { SelectChangeEvent, SelectProps } from '@mui/material/Select/Select'

interface StyledDropdownProps extends SelectProps {
  options: Option[]
  defaultValue?: string
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
  const [selectValue, setSelectValue] = useState(defaultValue || options[0].value)

  const handleChange = (event: SelectChangeEvent<unknown>, child?: ReactNode) => {
    setSelectValue(event.target.value as string)
    onChange?.(event, child)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="styled-select-label" variant="outlined">
        {label}
      </InputLabel>
      <Select
        labelId="styled-select-label"
        id="styled-select"
        value={selectValue}
        size={size}
        sx={{ borderRadius: '0.5rem', ...sx }}
        label={label}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default StyledDropdown
