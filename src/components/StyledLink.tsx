import NextLink from 'next/link'
import React, { FC } from 'react'

import Link from '@mui/material/Link'
import { LinkOwnProps } from '@mui/material/Link/Link'

interface StyledLinkProps extends LinkOwnProps {
  children: React.ReactNode
  href: string
}

const StyledLink: FC<StyledLinkProps> = React.forwardRef(
  ({ children, href, underline = 'hover', color = 'primary', ...props }) => (
    <NextLink href={href} passHref legacyBehavior>
      <Link underline={underline} color={color} {...props}>
        {children}
      </Link>
    </NextLink>
  )
)

export default StyledLink
