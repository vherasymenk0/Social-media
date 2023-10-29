import React, { FC, forwardRef } from 'react'

import {
  FormControlProps,
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
  Theme,
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import { styled } from '@mui/material/styles'

export interface TextInputProps extends OutlinedInputProps {
  value: string
  defaultValue?: string
  formControlProps?: FormControlProps
  helperText?: string
  errorMessage?: string
  isError?: boolean
}

const TextInput: FC<TextInputProps> = forwardRef(
  (
    {
      formControlProps,
      isError,
      id = 'outlined',
      label,
      helperText,
      errorMessage,
      sx,
      size,
      fullWidth,
      startAdornment,
      endAdornment,
      ...restProps
    },
    ref
  ) => {
    const isSmallSize = size === 'small'
    const iconFontSize = isSmallSize ? '1.25rem' : '1.5rem'

    return (
      <FormControl fullWidth={fullWidth} {...formControlProps} variant="outlined" error={isError}>
        <InputLabel htmlFor={id} variant="outlined" shrink>
          {label}
        </InputLabel>
        <OutlinedInput
          label={label}
          ref={ref}
          id={id}
          error={isError}
          sx={{ ...sx, borderRadius: (theme: Theme) => theme.shape.borderRadius }}
          size={size}
          startAdornment={
            <InputAdornment position="start" sx={{ fontSize: iconFontSize }}>
              {startAdornment}
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end" sx={{ fontSize: iconFontSize }}>
              {endAdornment}
            </InputAdornment>
          }
          {...restProps}
        />
        {!!helperText && !isError && (
          <HelperText id={id} variant="filled">
            {helperText}
          </HelperText>
        )}

        {isError && (
          <HelperText id={id} error={isError}>
            <>{errorMessage}</>
          </HelperText>
        )}
      </FormControl>
    )
  }
)

const HelperText = styled(FormHelperText)({
  lineHeight: 1,
  marginTop: 0,
})

export default TextInput
