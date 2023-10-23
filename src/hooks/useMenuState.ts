import React, { useState } from 'react'

const useMenuState = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return { isMenuOpen, anchorEl, handleMenuOpen, handleMenuClose }
}

export default useMenuState
