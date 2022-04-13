import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import FormButton from './Form/FormButton.js';
import Form from './Form/Form.js';
import FormControlDiv from './Form/FormControlDiv.js';

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
        <Form account={'Already have an account'} 
        btnTitle={'Login'} 
        link={'/login'} 
        header={'Create an account'} >    
          <form onSubmit={handleRegister}>
            <Grid>
              <Grid>
                <FormControlDiv  >
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControlDiv>
              </Grid>
              <Grid>
                <FormControlDiv>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControlDiv>
              </Grid>
              <Grid>
                <FormControlDiv error={!!formErrorMessage.confirmPassword}>
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
                </FormControlDiv>
              </Grid>
              <Grid>
                <FormControlDiv error={!!formErrorMessage.confirmPassword}>
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
                </FormControlDiv>
              </Grid>
             <FormButton title={'Create'}/>
            </Grid>
          </form>
        </Form>
     
  );
};

export default Signup;
