import { FC, forwardRef } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

interface Props extends DatePickerProps<AdapterDayjs> {
  isError: boolean
}

const DatePicker = forwardRef<HTMLDivElement, Props>(({ isError, ...restProps }, ref) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MUIDatePicker
      {...restProps}
      label="Date picker"
      disableFuture
      ref={ref}
      slotProps={{
        textField: {
          // disabled: true,
          fullWidth: true,
          size: 'small',
          sx: {
            mt: 2.5,
          },
        },
      }}
    />
  </LocalizationProvider>
))
export default DatePicker
