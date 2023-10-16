import Image from 'next/image'
import React, { FC } from 'react'

import LikeBox from '~/components/LikeBox'
import PaperCard from '~/components/PaperCard'
import PostOptionMenu from '~/views/user/components/PostOptionMenu'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Avatar, Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

interface PostBoxProps {
  userName: string
  avatarImg: string
}

const PostBox: FC<PostBoxProps> = ({ avatarImg, userName }) => {
  const postDate = '15h ago'
  const postText =
    'It is a long established fact that a reader will be distracted by the readable content of a\n' +
    '        page when looking at its layout. The point of using Lorem Ipsum'
  const postLikes = 2094
  const postViews = '1K'
  const postImg = '/test.jpeg'

  return (
    <PaperCard>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar alt={userName} src={avatarImg} sx={{ width: '3.25rem', height: '3.25rem' }} />
          <Box color="grey">
            <Typography variant="h6" lineHeight={1.3} color="primary">
              {userName}
            </Typography>
            <Typography sx={{ color: (theme) => theme.palette.grey.A200 }} variant="subtitle2">
              {postDate}
            </Typography>
          </Box>
        </Box>
        <PostOptionMenu />
      </Stack>
      <Typography variant="subtitle1" color="primary" lineHeight={1.3} mt={2}>
        {postText}
      </Typography>
      <Box style={{ position: 'relative', height: '16.25rem', marginTop: '1rem' }}>
        <Image alt="post image" src={postImg} fill style={{ objectFit: 'cover' }} />
      </Box>
      <Stack direction="row" mt={2} alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <LikeBox postLikes={postLikes} />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ color: 'primary.main' }}>
          <RemoveRedEyeIcon sx={{ fontSize: '1.25rem' }} color="primary" />
          <Typography variant="subtitle2">{postViews}</Typography>
        </Stack>
      </Stack>
    </PaperCard>
  )
}

export default PostBox
