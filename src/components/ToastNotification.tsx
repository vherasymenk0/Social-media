import React, { FC } from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { styled } from '@mui/material/styles'

interface Props {
  handleClose: (_, reason?: string) => void
  type: AlertProps['severity']
  message: string
  isOpen: boolean
}

const ToastNotification: FC<Props> = ({ handleClose, type, message, isOpen }) => (
  <Snackbar
    open={isOpen}
    onClose={handleClose}
    autoHideDuration={4000}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    <StyledAlert onClose={handleClose} severity={type} variant="outlined">
      {message}
    </StyledAlert>
  </Snackbar>
)

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />
})

const StyledAlert = styled(Alert)(({ theme, severity }) => {
  const getBgColor = () => {
    switch (severity) {
      case 'error':
        return theme.palette.error.main
      case 'success':
        return theme.palette.success.main
      case 'info':
        return theme.palette.info.main
      case 'warning':
        return theme.palette.warning.main
      default:
        return 'inherit'
    }
  }

  return {
    position: 'relative',
    borderRadius: '0.75rem',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    border: 'none',
    overflow: 'hidden',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      content: '""',
      width: '7px',
      height: '100%',
      backgroundColor: getBgColor(),
    },
    'MuiAlert-action': {
      padding: 'padding: 2px 0 0 1rem',
    },
  }
})

export default ToastNotification
