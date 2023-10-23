export type Step = {
  step_key: 'account_setup' | 'personal_details' | 'upload_photo'
  title: string
  optional: boolean
}

export type StepComponents = {
  [K in Step['step_key']]: () => JSX.Element
}
