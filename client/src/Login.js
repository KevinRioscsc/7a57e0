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
          
      <Grid container justifyContent="center">
        <Box >
          <Grid container  item>
              <Typography >Dont have an account?</Typography>
              <Link href="/register" to="/register">
                <Button >Create Account</Button>
              </Link>
            </Grid>
          <form onSubmit={handleLogin}>
            <Grid>
              <Grid>
                <FormControl margin="normal"  required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid>
              <FormControl margin="normal" required>
                <TextField
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              </Grid>
              <Button type="submit" variant="contained" size="large">
              Create
            </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
     
      

  );
};

export default Login;
