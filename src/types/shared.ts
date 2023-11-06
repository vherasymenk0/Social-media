import { AlertProps } from '@mui/material/Alert'

export type Toast = {
  message: string
  type: AlertProps['severity']
}

export type Option = {
  label: string
  value: string
}
