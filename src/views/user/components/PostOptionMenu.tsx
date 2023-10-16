import useMenuState from '~/hooks/useMenuState'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const PostOptionMenu = () => {
  const { isMenuOpen, anchorEl, handleMenuOpen, handleMenuClose } = useMenuState()

  return (
    <>
      <IconButton aria-label="more" onClick={handleMenuOpen} color="primary">
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose} sx={{ color: 'primary.main' }}>
          Hide post
        </MenuItem>
      </Menu>
    </>
  )
}

export default PostOptionMenu
