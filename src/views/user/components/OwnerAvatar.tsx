import React, { FC } from 'react'

import { Avatar, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

interface OwnerPageCoverProps {
  userName: string
  avatarImg: string
}

const OwnerAvatar: FC<OwnerPageCoverProps> = ({ userName, avatarImg }) => (
  <OwnerAvatarWrapper>
    <Box className="owner-avatar__underlay">
      <Avatar className="owner-avatar__img" alt={userName} src={avatarImg} />
    </Box>
    <Box className="owner-avatar__indicator">
      <Box />
    </Box>
  </OwnerAvatarWrapper>
)

const OwnerAvatarWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: '-6.25rem',
  '.owner-avatar': {
    '&__underlay': {
      width: '9.75rem',
      height: '9.75rem',
      borderRadius: '100%',
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&__img': {
      width: '9.375rem',
      height: '9.375rem',
    },
    '&__indicator': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '11%',
      right: '9%',
      width: '1.125rem',
      height: '1.125rem',
      backgroundColor: theme.palette.background.default,
      borderRadius: '50%',
      '& > div': {
        width: '0.75rem',
        height: '0.75rem',
        background: theme.palette.success.main,
        borderRadius: 'inherit',
      },
    },
  },
}))

export default OwnerAvatar
