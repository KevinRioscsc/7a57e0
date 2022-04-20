import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import photo from '../components/assets/bg-img.png'
import vector from '../components/assets/bubble.svg'

const useStyles = makeStyles(() => ({
    leftPhoto: {
      position: 'relative',
      width: '35%',
      ['@media (max-width:1400px)']: { 
        width: '50%'
      },
      ['@media (max-width:1100px)']: { 
        width: '70%'
      },
      ['@media (max-width:850px)']: { 
        display: 'none'
      },
    },
    responsive: {
      width: '100%',
      height: '99.5vh',
    },
    overlay:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
      mixBlendMode: 'normal',
      opacity: 0.85,
    },
    text: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '70%',
      textAlign: 'center',
      gap: 39.5,
      ['@media (max-width:1100px)']: { 
        width: '90%'
      },
    },
    leftTitle:{
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 26,
      lineHeight: '40px',
    }
  }));

const LeftSide = () => {
  const classes = useStyles();
  return (
    <Box className={classes.leftPhoto}>
        <img src={photo} className ={classes.responsive} alt="leftPhoto" />
        <Box className={classes.overlay}></Box>
        <Box className={classes.text}>
            <img src={vector} height={66} alt="bubble" />
            <Typography variant='h1' className={classes.leftTitle}>
              Converse with anyone with any language
            </Typography>
        </Box>
    </Box>
  )
}

export default LeftSide