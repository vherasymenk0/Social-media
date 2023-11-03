import Image from 'next/image'
import { FC } from 'react'
import AvatarEditor from 'react-avatar-editor'

import ControllerField from '~/components/fields/ControllerField'
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

const ProfilePhotoUpload: FC<Props> = ({ avatarWidth = 200, avatarHeight = 200 }) => {
  const { onScale, onReset, onUpload, preparePreviewImage, avatarState, editorRef } =
    useProfilePhotoUpload({ name: 'profileImg' })

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
        <ControllerField
          name="profileImg"
          render={({ field: { onChange: _, ...rest } }) => (
            <UploadFileButton
              {...rest}
              handleChange={onUpload}
              handleReset={onReset}
              fullWidth
              file={avatarState.image}
            />
          )}
        />
      </Box>
      {avatarState.image && (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="30rem">
            <AvatarEditor
              ref={editorRef}
              onImageReady={preparePreviewImage}
              scale={avatarState.scale}
              width={avatarWidth}
              height={avatarHeight}
              image={avatarState.image}
              border={10}
              borderRadius={100}
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
                  style={{ borderRadius: 100 }}
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
