import ControllerField from '~/components/fields/ControllerField'
import PasswordField from '~/components/fields/PasswordField'
import TextInput from '~/components/inputs/TextInput'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Box, Typography } from '@mui/material'

const AccountSetupStep = () => (
  <>
    <Box>
      <Typography variant="h4" component="h1" marginBottom="2rem" align="center" color="primary">
        Login Details
      </Typography>
      <Box>
        <ControllerField
          name="email"
          render={({ field, isError }) => (
            <TextInput
              {...field}
              error={isError}
              InputProps={{
                startAdornment: <AlternateEmailIcon fontSize="small" color="primary" />,
              }}
              placeholder="example@gmail.com"
              type="email"
              label="Your Email"
              fullWidth
            />
          )}
        />
        <PasswordField name="password" label="Password" sx={{ mb: 2 }} />
        <PasswordField name="confirmPassword" label="Confirm password" />
      </Box>
    </Box>
  </>
)

export default AccountSetupStep
