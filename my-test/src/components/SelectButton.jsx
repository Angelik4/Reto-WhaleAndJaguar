import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const SelectButton = () => {
    const classes = useStyles();
    return (
        <div>
    <Button variant="outlined" color="primary" className={classes.button} startIcon={<FacebookIcon/>}>
        Facebook
    </Button>
    <Button variant="outlined" color="primary" className={classes.button} startIcon={<TwitterIcon/>}>
        Twitter
    </Button>
    <Button variant="outlined" color="primary" className={classes.button}>
        Todas
    </Button>
        </div>
    )
}

export default SelectButton