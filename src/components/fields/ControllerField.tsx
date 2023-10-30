import React from 'react'
import {
  Controller,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormStateReturn,
  useFormContext,
} from 'react-hook-form'

import styled from '@emotion/styled'
import { FormHelperText } from '@mui/material'

interface CustomRenderProps<TFieldValues extends FieldValues> {
  field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<TFieldValues>
  isError: boolean
}

type CustomRender<TFieldValues extends FieldValues> = (
  props: CustomRenderProps<TFieldValues>
) => React.ReactElement

interface Props<TFieldValues extends FieldValues>
  extends Omit<ControllerProps<TFieldValues>, 'render'> {
  helperText?: string
  render: CustomRender<TFieldValues>
}

const ControllerField = <TFieldValues extends FieldValues>({
  name,
  helperText,
  render,
  ...restProps
}: Props<TFieldValues>) => {
  const { formState } = useFormContext()
  const isError = !!formState.errors[name]
  const errorMessage = formState.errors[name]?.message

  return (
    <>
      <Controller
        name={name}
        render={(state) => (
          <>
            {render({ ...state, isError })}
            {!!helperText && !isError && <HelperText variant="filled">{helperText}</HelperText>}
            {isError && <HelperText error={isError}>{String(errorMessage)}</HelperText>}
          </>
        )}
        {...restProps}
      />
    </>
  )
}

const HelperText = styled(FormHelperText)({
  margin: '-0.5rem 0 0.75rem 1rem',
  lineHeight: 1,
})

export default ControllerField
