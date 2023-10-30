import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

interface Props extends DatePickerProps<AdapterDayjs> {
  isError: boolean
}

const DatePicker = ({ isError, ...restProps }: Props) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <MUIDatePicker
      {...restProps}
      label="Date picker"
      disableFuture
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
)
export default DatePicker
