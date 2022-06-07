import React, { useContext } from 'react'
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { DirectionsCar } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { AppContext } from '../contexts/app-context';

export default function LoginFormSide() {
  const context = useContext(AppContext)

  const google = ()=> {
    window.open("https://backendch7.herokuapp.com/auth/google", "_self");
  }
  const github = ()=> {
    window.open("https://backendch7.herokuapp.com/auth/github", "_self");
  }

  return (
    <div className='LoginFormSide'>
        
        <Box component="form" sx={{ mb: 1 }}>
        <Container maxWidth="sm">
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <DirectionsCar />
            </Avatar>
            <Typography title="welcome" component="h1" variant="h5" sx={{ mb: 4 }}>
            Welcome, Admin BCR
            </Typography>
              <TextField
                data-testid="email"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => context.setEmail(e.target.value)}
              />
              <TextField
                data-testid="password"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => context.setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={context.handleClick}
                style={{ marginTop: '10px', marginBottom: '20px', background: 'blue', color: 'white' }}
              >
                Sign In
              </Button>
              <Box className='optional-login' 
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  style={{ margin: '5px', background: 'red', color: 'white' }}
                  onClick={google}
                >
                  Google
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  style={{ margin: '5px', background: 'blue', color: 'white' }}
                >
                  Facebook
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={github}
                  style={{ margin: '5px', background: 'black', color: 'white' }}
                >
                  Github
                </Button>
              </Box>
              
            </Container>
            </Box>
    </div>
  )
}
