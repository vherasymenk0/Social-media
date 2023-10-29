import React, { ChangeEvent, FC } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import TextInput, { TextInputProps } from '~/components/inputs/TextInput'

type UseFormFieldProps = Omit<UseControllerProps, 'control' | 'defaultValue'>

export interface TextFieldProps
  extends Omit<TextInputProps, 'value' | 'errorMessage' | 'isError'>,
    UseFormFieldProps {
  name: string
  value?: string
}

const TextField: FC<TextFieldProps> = ({
  name,
  rules,
  value = '',
  defaultValue = '',
  shouldUnregister,
  ...restProps
}) => {
  const { field, formState } = useController({
    name,
    rules,
    defaultValue: value ?? defaultValue,
    shouldUnregister,
  })

  const { value: fieldValue, onChange, ...restField } = field
  const isError = !!formState.errors[name]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)

  return (
    <TextInput
      {...restField}
      isError={isError}
      errorMessage={String(formState.errors[name])}
      onChange={handleChange}
      value={fieldValue}
      {...restProps}
    />
  )
}

export default TextField
