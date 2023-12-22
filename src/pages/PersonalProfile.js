import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

export default function PersonalProfile() {
  return (

    <div>
   
   <AppBar sx={{backgroundColor:"#C3073F"}} position="static">
  <Toolbar>
  
    <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:"left" }}>
   Trash
    </Typography>
    <a style={{color:"white"}} href="/main" ><Button color="inherit">DashBoard</Button></a>
    <a style={{color:"white"}} href="/profile" ><Button color="inherit">profile</Button></a>
    <a style={{color:"white"}} href="/trash" ><Button color="inherit">trash</Button></a>

  </Toolbar>
</AppBar>



 <Container
      className="py-5"
      style={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="15px"
        sx={{ height: '100%' }}
      >
        <Card
          sx={{
            borderRadius: '.5rem',
            border: 'solid 2px #fff',
            width: '100%',
            textAlign: 'center', 
            backgroundColor:'beige'

          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <Avatar
                  src="https://w7.pngwing.com/pngs/348/769/png-transparent-computer-icons-user-profile-material-design-profile-monochrome-black-account-thumbnail.png"
                  sx={{
                    width: 80,
                    height: 80,
                    margin: 'auto',
                    borderBottomLeftRadius: '.5rem',
                    borderBottomRightRadius: '.5rem',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Sree Krishnnaa</Typography>
                <a href="/home">
                  <Button>
                    <LogoutIcon /> Logout
                  </Button>
                </a>
              </Grid>
            </Grid>

            <Divider sx={{ mt: 2, mb: 4 }} />

            <Typography variant="h6">Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} className="mb-3">
                <Typography variant="h6">Email</Typography>
                <Typography variant="body2" color="textSecondary">
                  info@example.com
                </Typography>
              </Grid>
              <Grid item xs={6} className="mb-3">
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body2" color="textSecondary">
                  123 456 789
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Container>
    </div>
   
  );
}
