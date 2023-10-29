import React, { ChangeEvent, FC, forwardRef } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

import TextInput, { TextInputProps } from '~/components/inputs/TextInput'

type UseFormFieldProps = Omit<UseControllerProps, 'control' | 'defaultValue'>

export interface TextFieldProps
  extends Omit<TextInputProps, 'value' | 'errorMessage' | 'isError'>,
    UseFormFieldProps {
  name: string
  value?: string
}

const TextField: FC<TextFieldProps> = forwardRef(
  ({ name, rules, value = '', defaultValue = '', shouldUnregister, id, ...restProps }, ref) => {
    const { field, formState } = useController({
      name,
      rules,
      defaultValue: value ?? defaultValue,
      shouldUnregister,
    })

    const { value: fieldValue, onChange, ...restField } = field
    const isError = !!formState.errors[name]

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value)

    return (
      <TextInput
        {...restField}
        isError={isError}
        errorMessage={String(formState.errors[name])}
        onChange={handleChange}
        value={fieldValue}
        id={id || name}
        ref={ref}
        {...restProps}
      />
    )
  }
)

export default TextField
