import React, { useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import {
  Grid,
  FormControl,
  TextField,
  Box
} from '@material-ui/core';
import FormButton from './Form/FormButton.js';
import Form from './Form/Form.js'

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
    <Form account={"Don't have an account"} 
    btnTitle={'Create account'} 
    link= {'/register'} 
    header={'Welcome back!'} >
          <form onSubmit={handleLogin}>
            <Grid>
              <Grid>
                <FormControl margin="normal" style={{marginTop: '30px', width:'100%'}} required>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" style={{marginTop: '30px', width:'100%'}}  required>
                <TextField
                style={{position: 'relative'}}
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
                 <Box component= "span" sx= 
               {{ position: 'absolute',
                  right: 0,
                  bottom: '20%',
                  cursor: 'pointer',
                  color: '#3A8DFF',
                  fontSize: '14px',}}>
                    Forgot?
                    </Box>
              </FormControl>
             
             <FormButton title={'Login'} />
            </Grid>
           
          </form>
          </Form>
        
  );
};

export default Login;
