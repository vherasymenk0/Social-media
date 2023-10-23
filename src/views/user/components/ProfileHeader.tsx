import Image from 'next/image'
import React, { FC, useState } from 'react'

import BaseButton from '~/components/BaseButton'
import OwnerAvatar from '~/views/user/components/OwnerAvatar'

import { Box, Paper, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

interface ProfileHeaderProps {
  userName: string
  shortInfo: string
  avatarImg: string
  coverImg: string
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ userName, shortInfo, avatarImg, coverImg }) => {
  const [isHover, setIsHover] = useState(false)

  const onMouseTrigger = () => {
    setIsHover((prev) => !prev)
  }

  return (
    <ProfileHeaderWrapper>
      <Box className="profile-header__cover">
        <Image
          alt="cover image"
          src={coverImg}
          fill
          style={{
            objectFit: 'cover',
            borderRadius: 'inherit',
            filter: 'brightness(0.8)',
          }}
        />
      </Box>
      <Paper className="profile-header__paper">
        <OwnerAvatar userName={userName} avatarImg={avatarImg} />
        <Stack ml={2} direction="row">
          <Stack>
            <Typography variant="h4" color="primary">
              {userName}
            </Typography>
            <Typography sx={{ color: 'primary.light' }}>{shortInfo}</Typography>
          </Stack>
          <Stack direction="row" className="profile-header__btns" spacing={1}>
            <BaseButton variant="contained">Message</BaseButton>
            <BaseButton
              variant="contained"
              onMouseEnter={onMouseTrigger}
              onMouseLeave={onMouseTrigger}
            >
              {isHover ? 'Unfollow' : 'Follow'}
            </BaseButton>
          </Stack>
        </Stack>
      </Paper>
    </ProfileHeaderWrapper>
  )
}

const ProfileHeaderWrapper = styled(Box)(({ theme }) => ({
  borderRadius: 'inherit',
  '.profile-header': {
    '&__cover': {
      position: 'relative',
      height: '16.25rem',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
    },
    '&__paper': {
      transform: 'translateY(-10px)',
      boxShadow: 'rgb(220, 225, 230) 0px 0px 0px 1px inset',
      borderRadius: 'inherit',
      padding: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      '& > .MuiStack-root': {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    '&__btns button': {
      height: '2rem',
      backgroundColor: theme.palette.grey.A400,
      boxShadow: 'unset',
      color: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.palette.grey.A200,
        color: theme.palette.background.default,
      },
    },
    '&__btns button + button': {
      width: '5.5rem',
      transition: 'none',
    },
  },
}))

export default ProfileHeader
