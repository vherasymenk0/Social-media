import classNames from 'classnames'
import React, { FC, useState } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

interface LikeBoxProps {
  postLikes: number
  liked?: boolean
  handleClick?: () => void
}

const LikeBox: FC<LikeBoxProps> = ({ postLikes, liked = false, handleClick }) => {
  const [isLiked, setIsLiked] = useState(liked)
  const [likesCount, setIsLikesCount] = useState(postLikes)

  const onClick = () => {
    handleClick?.()
    setIsLiked((prev) => !prev)
    setIsLikesCount((prev) => {
      if (isLiked) return prev !== 0 ? prev - 1 : 0
      return prev + 1
    })
  }

  return (
    <LikeBoxWrapper onClick={onClick} className={classNames({ '--liked': isLiked })}>
      <IconButton aria-label="like" color="inherit">
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Typography variant="subtitle2">{likesCount}</Typography>
    </LikeBoxWrapper>
  )
}

const LikeBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: theme.palette.primary.main,
  '&:hover': {
    '.MuiTypography-root': {
      color: 'rgb(249,24,128)',
    },
    '.MuiIconButton-root': {
      backgroundColor: 'rgba(249,24,128, 0.1)',
    },
    '.MuiSvgIcon-root': {
      color: 'rgb(249,24,128)',
    },
  },
  '&.--liked': {
    '.MuiTypography-root': {
      color: 'rgb(249,24,128)',
    },
    '.MuiSvgIcon-root': {
      color: 'rgb(249,24,128)',
    },
  },
  '.MuiSvgIcon-root': {
    fontSize: '1.25rem',
  },
}))

export default LikeBox
