import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
});

const SelectPerson = () => {

  const classes = useStyles();
  return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Seleccione uno o más candidatos
        </Typography>
        </CardContent>
        <CardActions>
          <Avatar alt="Abetancourt" src="../../candidatos/abetancourt.png" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </CardActions>
      </Card>
    
  )
}

export default SelectPerson