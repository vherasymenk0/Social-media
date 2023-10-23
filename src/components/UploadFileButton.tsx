import React, { ChangeEvent, FC, useState } from 'react'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button/Button'
import { styled } from '@mui/system'

interface Props {
  handleChange?: (file: File) => void
  handleReset?: () => void
  fullWidth: boolean
}
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

const UploadFileButton: FC<Props> = ({ handleChange, handleReset, fullWidth = false }) => {
  const [file, setFile] = useState<File | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const loadedFile = e?.target?.files?.[0]

    if (!loadedFile) return
    setFile(loadedFile)
    handleChange && handleChange(loadedFile)
  }

  const onReset = () => {
    setFile(null)
    handleReset && handleReset()
  }

  const commonBtnProps: ButtonProps = {
    fullWidth: fullWidth,
    variant: 'contained',
  }

  const DeleteBtn = (
    <Button onClick={onReset} startIcon={<DeleteIcon />} color="error" {...commonBtnProps}>
      Delete file
    </Button>
  )

  const UploadBtn = (
    <Button component="label" fullWidth startIcon={<CloudUploadIcon />} {...commonBtnProps}>
      Upload file
      <VisuallyHiddenInput name="newImage" type="file" onChange={onChange} />
    </Button>
  )

  return (
    <>
      {file ? DeleteBtn : UploadBtn}
      {file?.name && (
        <Typography variant="subtitle2" color="gray" mt={1} align="center">
          {file?.name}
        </Typography>
      )}
    </>
  )
}

export default UploadFileButton
