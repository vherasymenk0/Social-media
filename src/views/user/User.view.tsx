'use client'
import Image from 'next/image'
import * as React from 'react'

import Sidebar from '~/views/user/components/Sidebar'
import TopBar from '~/views/user/components/TopBar'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Avatar, Box, Container, FilledInput, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

const UserView = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <TopBar />
      <Container sx={{ mt: '80px' }}>
        <Grid container spacing={2} gap={6} justifyContent="center">
          <Grid item md={2}>
            <Sidebar />
          </Grid>
          <Grid item md={9} sx={{ borderRadius: '0.75rem' }}>
            <Box sx={{ borderRadius: 'inherit' }}>
              <Box
                style={{
                  position: 'relative',
                  height: '260px',
                  borderTopLeftRadius: 'inherit',
                  borderTopRightRadius: 'inherit',
                }}
              >
                <Image
                  alt="image"
                  src="/test.jpeg"
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: 'inherit',
                    filter: 'brightness(0.8)',
                  }}
                />
              </Box>
              <Paper
                sx={{
                  transform: 'translateY(-10px)',
                  borderRadius: 'inherit',
                  padding: '1.25rem',
                  display: 'flex',
                }}
              >
                <Box sx={{ position: 'relative', mt: '-100px' }}>
                  <Box
                    sx={{
                      width: 156,
                      height: 156,
                      background: '#fff',
                      borderRadius: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Avatar alt="John Doe" src="/test.jpeg" sx={{ width: 150, height: 150 }} />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '14%',
                      right: '12%',
                      width: 18,
                      height: 18,
                      background: '#fff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        background: '#4bb34b',
                        borderRadius: 'inherit',
                      }}
                    />
                  </Box>
                </Box>

                <Stack spacing={1} ml={2}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: '500' }}>John Doe</Typography>
                  <Typography>Short info about you</Typography>
                </Stack>
              </Paper>
            </Box>
            <Paper
              sx={{
                borderRadius: 'inherit',
                padding: '1.5rem',
                backgroundColor: '#F9FAFB',
                mt: 2,
              }}
              elevation={0}
            >
              <Grid container justifyContent="space-between">
                <Grid item md={3.5}>
                  <Paper sx={{ padding: '1rem' }}>
                    <Typography>Info</Typography>
                    <Typography>Info</Typography>
                    <Typography>Info</Typography>
                    <Typography>Info</Typography>
                    <Typography>Info</Typography>
                    <Typography>Info</Typography>
                  </Paper>
                </Grid>
                <Grid container item md={8} gap={3} direction="column">
                  <Paper sx={{ padding: '1rem' }}>
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="John Doe" src="/test.jpeg" sx={{ width: 45, height: 45 }} />
                      <FilledInput
                        multiline
                        placeholder="What`s happening?"
                        maxRows={4}
                        fullWidth
                        size="small"
                        disableUnderline
                        sx={{
                          borderRadius: '12px',
                          padding: '0.7rem',
                          backgroundColor: '#F6F7F8',
                        }}
                      />
                    </Stack>
                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <Stack spacing={2} direction="row">
                        <Button>Photo/Video</Button>
                        <Button>Feeling</Button>
                      </Stack>
                      <Button>Post</Button>
                    </Box>
                  </Paper>
                  <Paper sx={{ padding: '1rem' }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar alt="John Doe" src="/test.jpeg" sx={{ width: 52, height: 52 }} />
                        <Box>
                          <Typography>John Doe</Typography>
                          <Typography color="gray" fontSize="small">
                            15h ago
                          </Typography>
                        </Box>
                      </Box>
                      <IconButton aria-label="more" onClick={handleProfileMenuOpen} color="inherit">
                        <MoreHorizIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        id="primary-search-account-menu"
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>Hide Post</MenuItem>
                      </Menu>
                    </Stack>
                    <Typography fontSize="small" lineHeight={1.3} mt={2}>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum
                    </Typography>
                    <Box
                      style={{
                        position: 'relative',
                        height: '260px',
                        borderRadius: 'inherit',
                        marginTop: '1rem',
                      }}
                    >
                      <Image
                        alt="image"
                        src="/test.jpeg"
                        fill
                        style={{
                          objectFit: 'cover',
                          borderRadius: 'inherit',
                          filter: 'brightness(0.8)',
                        }}
                      />
                    </Box>
                    <Stack
                      direction="row"
                      mt={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Stack direction="row" alignItems="center">
                        <IconButton aria-label="like" color="inherit">
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Typography fontSize="small">2094</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <RemoveRedEyeIcon />
                        <Typography fontSize="small">1K</Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                  <Paper sx={{ padding: '1rem' }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar alt="John Doe" src="/test.jpeg" sx={{ width: 52, height: 52 }} />
                        <Box>
                          <Typography>John Doe</Typography>
                          <Typography color="gray" fontSize="small">
                            15h ago
                          </Typography>
                        </Box>
                      </Box>
                      <IconButton aria-label="more" onClick={handleProfileMenuOpen} color="inherit">
                        <MoreHorizIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        id="primary-search-account-menu"
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={isMenuOpen}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleMenuClose}>Hide Post</MenuItem>
                      </Menu>
                    </Stack>
                    <Typography fontSize="small" lineHeight={1.3} mt={2}>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of using Lorem Ipsum
                    </Typography>
                    <Box
                      style={{
                        position: 'relative',
                        height: '260px',
                        borderRadius: 'inherit',
                        marginTop: '1rem',
                      }}
                    >
                      <Image
                        alt="image"
                        src="/test.jpeg"
                        fill
                        style={{
                          objectFit: 'cover',
                          borderRadius: 'inherit',
                          filter: 'brightness(0.8)',
                        }}
                      />
                    </Box>
                    <Stack
                      direction="row"
                      mt={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Stack direction="row" alignItems="center">
                        <IconButton aria-label="like" color="inherit">
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Typography fontSize="small">2094</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <RemoveRedEyeIcon />
                        <Typography fontSize="small">1K</Typography>
                      </Stack>
                    </Stack>
                  </Paper>
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
