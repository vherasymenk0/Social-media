import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import { Tooltip, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button/Button'
import { styled } from '@mui/system'

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleReset?: () => void
  fullWidth: boolean
  file: File | null
  inputProps?: InputHTMLAttributes<HTMLInputElement>
}

const UploadFileButton = forwardRef<HTMLButtonElement, Props>(
  ({ handleChange, handleReset, file, fullWidth = false, inputProps }, ref) => {
    const commonBtnProps: ButtonProps = {
      fullWidth: fullWidth,
      variant: 'contained',
    }

    const DeleteBtn = (
      <Button
        onClick={handleReset}
        startIcon={<DeleteIcon />}
        color="error"
        ref={ref}
        {...commonBtnProps}
      >
        Delete file
      </Button>
    )

    const UploadBtn = (
      <Button
        component="label"
        fullWidth
        startIcon={<CloudUploadIcon />}
        ref={ref}
        {...commonBtnProps}
      >
        Upload file
        <VisuallyHiddenInput {...inputProps} type="file" onChange={handleChange} />
      </Button>
    )

    return (
      <>
        {file ? (
          <>
            {DeleteBtn}
            <Tooltip title={file?.name} arrow>
              <Typography
                variant="subtitle2"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '12.5rem',
                }}
                color="gray"
                mt={1}
                align="center"
              >
                {file?.name}
              </Typography>
            </Tooltip>
          </>
        ) : (
          UploadBtn
        )}
      </>
    )
  }
)

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export default UploadFileButton
