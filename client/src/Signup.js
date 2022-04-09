import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import photo from './components/assets/bg-img.png'
import vector from './components/assets/bubble.svg'

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
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
            <img src={vector} height={80} alt="bubble" />
            <h1 className='leftTitle'>Converse with anyone with any language</h1>
        </div>
      </div>
      <div className="rightSide loose">
      <Grid container className='switch' item>
        <Typography className='need'>Already have an account?</Typography>
          <Link href="/login" to="/login">
            <Button style={{padding: '10px 40px',  color: '#3A8DFF'}} className='btn'>Login</Button>
          </Link>
        </Grid>
        <Grid container className='height' alignItems='center' justifyContent="center">
        <Box className='width'>
          <h1 className='title'>Create an account</h1>
          <form onSubmit={handleRegister}>
            <Grid>
              <Grid>
                <FormControl  className='inputWidth'>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl  style={{marginTop: '30px'}} className='inputWidth'>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl style={{marginTop: '30px'}} className='inputWidth' error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl style={{marginTop: '30px'}} className='inputWidth' error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
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

export default Signup;
