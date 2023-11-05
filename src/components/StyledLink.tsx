import NextLink from 'next/link'
import React, { forwardRef } from 'react'

import Link from '@mui/material/Link'
import { LinkOwnProps } from '@mui/material/Link/Link'

interface StyledLinkProps extends LinkOwnProps {
  children: React.ReactNode
  href: string
}

const StyledLink = forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ children, href, underline = 'hover', color = 'primary', ...props }, ref) => (
    <NextLink href={href} passHref legacyBehavior>
      <Link underline={underline} color={color} ref={ref} {...props}>
        {children}
      </Link>
    </NextLink>
  )
)

export default StyledLink
