import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles, Hidden} from '@material-ui/core';

const useStyle = makeStyles( theme => ({
    space: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    }
}))
export const Navbar = () => {
    const classes = useStyle()
    return (
        <div>
            <AppBar color='primary'>
                <Toolbar>
                <Typography variant='h6' className={classes.title}>
                Sismógrafo Electoral
                </Typography>
                <Hidden smDown>
                <Typography variant='h6'>
                Un desarrollo de Whale & Jaguar
                </Typography>
                </Hidden>
                </Toolbar>
            </AppBar>
            <div className={classes.space}></div>
        </div>
    )
}

export default Navbar