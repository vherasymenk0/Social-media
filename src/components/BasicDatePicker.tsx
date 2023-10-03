import * as React from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const BasicDatePicker = (props: DatePickerProps<AdapterDayjs>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker {...props} />
  </LocalizationProvider>
)
export default BasicDatePicker
