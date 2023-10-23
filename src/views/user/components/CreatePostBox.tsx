import React, { FC } from 'react'

import BaseButton from '~/components/BaseButton'
import PaperCard from '~/components/PaperCard'

import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { Avatar, Box, FilledInput } from '@mui/material'
import Stack from '@mui/material/Stack'

interface CreatePostBoxProps {
  userName: string
  avatarImg: string
}

const CreatePostBox: FC<CreatePostBoxProps> = ({ avatarImg, userName }) => (
  <PaperCard>
    <Stack direction="row" spacing={2}>
      <Avatar alt={userName} src={avatarImg} sx={{ width: '2.875rem', height: '2.875rem' }} />
      <FilledInput
        multiline
        placeholder="What`s happening?"
        maxRows={4}
        fullWidth
        size="small"
        disableUnderline
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius,
          padding: '0.7rem',
          backgroundColor: 'grey.A400',
          color: 'primary.main',
        }}
      />
    </Stack>
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Stack spacing={2} direction="row">
        <BaseButton startIcon={<PhotoCameraBackIcon />}>Photo/Video</BaseButton>
        <BaseButton startIcon={<SentimentSatisfiedAltIcon />}>Feeling</BaseButton>
      </Stack>
      <BaseButton variant="contained" color="secondary">
        Post
      </BaseButton>
    </Box>
  </PaperCard>
)

export default CreatePostBox
