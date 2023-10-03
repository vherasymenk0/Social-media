import AccountSetupStep from '~/views/register/components/AccountSetupStep'
import PersonalDetailsStep from '~/views/register/components/PersonalDetailsStep'
import UploadPhotoStep from '~/views/register/components/UploadPhotoStep'
import { Step, StepComponents } from '~/views/register/Register.types'

export const REGISTER_STEP_COMPONENT: StepComponents = {
  account_setup: AccountSetupStep,
  personal_details: PersonalDetailsStep,
  upload_photo: UploadPhotoStep,
}

export const REGISTER_STEPS: Step[] = [
  {
    step_key: 'account_setup',
    title: 'Account Setup',
    optional: false,
  },
  {
    step_key: 'personal_details',
    title: 'Personal Details',
    optional: false,
  },
  {
    step_key: 'upload_photo',
    title: 'Upload Photo',
    optional: true,
  },
]
