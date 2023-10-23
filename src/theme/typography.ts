import { Roboto } from 'next/font/google'

import { TypographyOptions } from '@mui/material/styles/createTypography'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Typography: TypographyOptions = {
  fontSize: 16,
  fontFamily: roboto.style.fontFamily,
  h1: {
    fontSize: '2.250rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 700,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  body2: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  button: {
    fontWeight: 500,
  },
}

export default Typography
