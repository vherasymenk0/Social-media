import Image from 'next/image'
import React, { FC } from 'react'
import AvatarEditor from 'react-avatar-editor'

import UploadFileButton from '~/components/UploadFileButton'
import useProfilePhotoUpload from '~/views/register/hooks/useProfilePhotoUpload'

import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import { Box, Slider, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'

interface Props {
  avatarWidth?: number
  avatarHeight?: number
}

const ProfilePhotoUpload: FC<Props> = ({ avatarWidth = 200, avatarHeight = 250 }) => {
  const { onScale, handleReset, handleLoadFile, preparePreviewImage, avatarState, editorRef } =
    useProfilePhotoUpload()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box width="12.5rem" mb={2}>
        <UploadFileButton handleChange={handleLoadFile} handleReset={handleReset} fullWidth />
      </Box>
      {avatarState.image && (
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="30rem">
            <AvatarEditor
              ref={editorRef}
              onImageReady={preparePreviewImage}
              scale={avatarState.scale}
              width={avatarWidth}
              height={avatarHeight}
              image={avatarState.image}
              border={20}
              onMouseUp={preparePreviewImage}
            />
            {avatarState.previewImage && (
              <Box>
                <Typography variant="subtitle2" align="center">
                  Preview:
                </Typography>
                <Image
                  width={avatarWidth}
                  height={avatarHeight}
                  alt="avatar"
                  src={avatarState.previewImage}
                />
              </Box>
            )}
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mt: 3 }}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="subtitle2">Zoom: </Typography>
            <ZoomOutIcon />
            <Slider
              sx={{ width: '6.25rem' }}
              name="scale"
              onChangeCommitted={preparePreviewImage}
              defaultValue={1}
              min={1}
              max={2}
              step={0.01}
              valueLabelDisplay="auto"
              onChange={onScale}
            />
            <ZoomInIcon />
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default ProfilePhotoUpload
