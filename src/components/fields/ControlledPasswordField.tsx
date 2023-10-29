import React, { ChangeEvent, FC, useState } from 'react'

import TextInput, { TextInputProps } from '~/components/inputs/TextInput'
import usePasswordField from '~/hooks/usePasswordField'

interface Props extends Omit<TextInputProps, 'value'> {
  value?: string
}
const ControlledPasswordField: FC<Props> = ({ size, sx, value = '', ...props }) => {
  const [currentValue, setValue] = useState(value)
  const { defaultProps } = usePasswordField({ size })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <TextInput
        {...defaultProps}
        value={currentValue}
        onChange={handleChange}
        sx={sx}
        {...props}
      />
    </>
  )
}

export default ControlledPasswordField
