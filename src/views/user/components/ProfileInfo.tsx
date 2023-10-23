import React, { FC } from 'react'

import PaperCard from '~/components/PaperCard'

import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

interface ProfileInfoProps {}

const ProfileInfo: FC<ProfileInfoProps> = ({}) => (
  <Grid item md={3.5}>
    <PaperCard>
      <Typography>Info</Typography>
      <Typography>Info</Typography>
      <Typography>Info</Typography>
      <Typography>Info</Typography>
      <Typography>Info</Typography>
      <Typography>Info</Typography>
    </PaperCard>
  </Grid>
)

export default ProfileInfo
