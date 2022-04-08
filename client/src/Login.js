import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import './signup.css'
import photo from './components/assets/bg-img.png'
import vector from './components/assets/bubble.svg'

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <div className="flex">
      <div className="leftPhoto">
        <img src={photo} className = 'responsive' alt="leftPhoto" />
        <div className="overlay"></div>
        <div className="text">
            <img src={vector}  alt="bubble" />
            <h1>Converse with anyone with any language</h1>
        </div>
      </div>
      <div className="rightSide">
          <Grid container className='switch' item>
            <Typography className='need'>Dont have an account?</Typography>
            <Link href="/register" to="/register">
              <Button style={{padding: '10px 40px',  color: '#3A8DFF'}} className='btn'>Create Account</Button>
            </Link>
          </Grid>
      <Grid container className='height' alignItems='center' justifyContent="center">
        <Box className='width'>
          <h1 className='title'>Welcome back!</h1>
          <form onSubmit={handleLogin}>
            <Grid>
              <Grid>
                <FormControl margin="normal" className='inputWidth' required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" className='inputWidth mt' required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid className='mt center'>
                <Button style={{padding: '18px 58px',  
                backgroundColor: '#3A8DFF', 
                color:'#FFF'}} 
                
                type="submit" variant="contained" size="large">
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
      </div>
    </div>
  );
};

export default Login;
