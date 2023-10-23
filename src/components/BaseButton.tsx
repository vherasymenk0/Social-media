import React, { FC } from 'react'

import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button/Button'
import { styled } from '@mui/material/styles'

const BaseButton: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  color = 'secondary',
  ...props
}) => (
  <BaseBtn variant={variant} color={color} {...props}>
    {children}
  </BaseBtn>
)

const BaseBtn = styled(Button)({
  textTransform: 'none',
  fontSize: '0.875rem',
  borderRadius: '0.5rem',
})

export default BaseButton
