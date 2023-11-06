import { Option } from '~/types/shared'

// Normalizes an array of objects into an array of options suitable for dropdowns.
export const normalizeOptions = <Payload = Record<string, unknown>>({
  data,
  asValue = 'id',
  asLabel = 'name',
  withoutData = false,
}: {
  data: Array<Payload>
  asValue?: string
  asLabel?: string
  withoutData?: boolean
}): Array<Option & Payload> => {
  if (!data || !Array.isArray(data)) return []

  return (data as { [key: string]: any })
    .filter(Boolean)
    .map(({ [asValue]: value, [asLabel]: label, ...rest }) => ({
      value,
      label,
      ...(!withoutData && rest),
    }))
}

export const isBrowser = () => typeof window !== 'undefined'
