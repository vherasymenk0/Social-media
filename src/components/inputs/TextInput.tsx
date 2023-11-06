import { FC, forwardRef } from 'react'

import { FormControlProps, InputAdornment, TextField } from '@mui/material'
import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from '@mui/material/TextField/TextField'

type TextInputVariantProps<Variant extends TextFieldVariants = TextFieldVariants> =
  Variant extends 'filled'
    ? FilledTextFieldProps
    : Variant extends 'standard'
    ? StandardTextFieldProps
    : OutlinedTextFieldProps

interface CommonTextInputProps {
  value?: string
  defaultValue?: string
  formControlProps?: FormControlProps
  helperText?: string
  errorMessage?: string
  isError?: boolean
}

export type TextInputProps = CommonTextInputProps & TextInputVariantProps

const TextInput: FC<TextInputProps> = forwardRef(
  (
    {
      formControlProps,
      isError,
      id,
      label,
      helperText,
      errorMessage,
      variant = 'outlined',
      sx,
      size,
      fullWidth,
      InputProps,
      ...restProps
    },
    ref
  ) => {
    const isSmallSize = size === 'small'
    const iconFontSize = isSmallSize ? '1.25rem' : '1.5rem'
    const { startAdornment, endAdornment, ...restInputProps } = InputProps || {}

    return (
      <>
        <TextField
          fullWidth={fullWidth}
          label={label}
          ref={ref}
          id={id}
          error={isError}
          variant={variant}
          size={size}
          InputProps={{
            ...(startAdornment && {
              startAdornment: (
                <InputAdornment position="start" sx={{ fontSize: iconFontSize }}>
                  {startAdornment}
                </InputAdornment>
              ),
            }),
            ...(endAdornment && {
              endAdornment: (
                <InputAdornment position="end" sx={{ fontSize: iconFontSize }}>
                  {endAdornment}
                </InputAdornment>
              ),
            }),
            sx: { borderRadius: (theme) => theme.shape.borderRadius, mb: 2, ...sx },
            ...restInputProps,
          }}
          {...restProps}
        />
      </>
    )
  }
)

export default TextInput
