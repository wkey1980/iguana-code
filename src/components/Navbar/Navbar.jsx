import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'

const Navbar = () => {
    return (
        <AppBar color="transparent">
            <Toolbar>
                <IconButton>
                    <MenuIcon color="secondary" />
                </IconButton>
                <Typography>
                    Menus Go Here
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
