import React from 'react'
import LeftSide from './LeftSide';
import TopButton from './TopButton';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';;


const useStyles = makeStyles(() => ({
    rightSide: {
        width: '63%',
        padding: '1.9em',
        height: '90vh',
        ['@media (max-width:1100px)']: { 
           width: '90%'
          },
          ['@media (max-width:850px)']: { 
            width: '100%'
           },
      },
      BoxWidth: {
        width: '60%',
        marginTop:104,
        ['@media (max-width:1400px)']: { 
            width: '80%'
           },
           ['@media (max-width:850px)']: { 
            width: '90%'
           },
      },
      title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 26,
        ['@media (max-width:435px)']: { 
            fontSize: 25,
           },
      }
  }));

const Form = ({children, account, btnTitle, link, header}) => {
    const classes = useStyles();
  return (
    <Box sx={{display: 'flex'}} >
        <LeftSide/>
        <Box className={classes.rightSide}>
            <TopButton account={account} btnTitle={btnTitle} link ={link}/>
            <Grid container  alignItems='center' justifyContent="center">
            <Box className={classes.BoxWidth}>
                <Typography variant='h1' className={classes.title}>{header}</Typography>
                    {children}
            </Box>
            </Grid>
        </Box>
  </Box>
  )
}

export default Form