import { FC } from 'react'

import ControllerField from '~/components/fields/ControllerField'
import TextInput, { TextInputProps } from '~/components/inputs/TextInput'
import usePasswordField from '~/hooks/usePasswordField'

interface Props extends Omit<TextInputProps, 'name' | 'value'> {
  name: string
}

const PasswordField: FC<Props> = ({ size, sx, name, ...props }) => {
  const { defaultProps } = usePasswordField({ size })

  const allProps = {
    ...defaultProps,
    ...props,
  }

  return (
    <ControllerField
      name={name}
      render={({ field, isError }) => (
        <TextInput {...allProps} sx={sx} {...field} error={isError} />
      )}
    />
  )
}

export default PasswordField
