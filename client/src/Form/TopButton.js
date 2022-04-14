import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    Switch: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 20,
        ['@media (max-width:435px)']: { 
            justifyContent: 'center'
          },
      },
      Account: {
        color: '#B0B0B0',
        fontSize: '14px'
      },
      shadow: {
        background: '#FFFFFF',
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        borderRadius: 5
      },
      btn:{
        padding: '16px 40px',  
        color: '#3A8DFF', 
        fontSize: '14px'
      }

  }));

const TopButton = ({account, btnTitle, link}) => {
    const classes = useStyles();

  return (
    <Grid container className={classes.Switch} item>
        <Typography className={classes.Account}>{account}</Typography>
        <Link className={classes.shadow} href={link} to={link}>
            <Button className={classes.btn}>{btnTitle}</Button>
        </Link>
    </Grid>
  )
}

export default TopButton