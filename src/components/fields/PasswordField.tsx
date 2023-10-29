import React, { FC } from 'react'

import TextField, { TextFieldProps } from '~/components/fields/TextField'
import usePasswordField from '~/hooks/usePasswordField'

const PasswordField: FC<TextFieldProps> = ({ size, sx, ...props }) => {
  const { defaultProps } = usePasswordField({ size })

  return <TextField {...defaultProps} sx={sx} {...props} />
}

export default PasswordField
