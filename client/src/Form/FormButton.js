import React from 'react'
import {Grid, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  center:{
    marginTop: 80,
    display: 'flex',
    justifyContent: 'center'
  },
  btn:{
    padding: '18px 58px',  
    backgroundColor: '#3A8DFF', 
    color:'#FFF'
  }
}))

const FormButton = ({title}) => {
  const classes = useStyles();
  return (
    <div>
         <Grid className={classes.center}>
            <Button className={classes.btn}  
            type="submit" variant="contained" size="large">
               {title}
            </Button>
        </Grid>
    </div>
  )
}

export default FormButton