'use client'
import * as React from 'react'

import CreatePostBox from '~/views/user/components/CreatePostBox'
import PostBox from '~/views/user/components/PostBox'
import ProfileHeader from '~/views/user/components/ProfileHeader'
import ProfileInfo from '~/views/user/components/ProfileInfo'
import Sidebar from '~/views/user/components/Sidebar'
import TopBar from '~/views/user/components/TopBar'

import { Container, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'

const UserView = () => {
  const userName = 'John Doe'
  const shortInfo = 'Short info about you'
  const avatarImg = '/test.jpeg'
  const coverImg = '/test.jpeg'

  return (
    <>
      <TopBar />
      <Container sx={{ mt: '5rem' }}>
        <Grid container spacing={2} gap={6} justifyContent="center">
          <Grid item md={2}>
            <Sidebar />
          </Grid>
          <Grid item md={9} sx={{ borderRadius: (theme) => theme.shape.borderRadius }}>
            <ProfileHeader
              userName={userName}
              shortInfo={shortInfo}
              avatarImg={avatarImg}
              coverImg={coverImg}
            />
            <Paper
              sx={{
                backgroundColor: 'grey.A700',
                padding: '1.5rem',
                borderRadius: (theme) => theme.shape.borderRadius,
                margin: '1rem 0',
              }}
              elevation={0}
            >
              <Grid container justifyContent="space-between">
                <ProfileInfo />
                <Grid container item md={8} gap={3} direction="column">
                  <CreatePostBox avatarImg={avatarImg} userName={userName} />
                  <PostBox userName={userName} avatarImg={avatarImg} />
                  <PostBox userName={userName} avatarImg={avatarImg} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default UserView
