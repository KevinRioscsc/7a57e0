import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    style: {
        marginTop: '30px', 
        width:'100%'
    }

  }));

const FormControlDiv = ({children, error}) => {
    const classes = useStyles();
  return (
    <FormControl margin="normal" className={classes.style} error={error} required>
        {children}
    </FormControl>
    )
}

export default FormControlDiv