import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BasicAccordion from './BasicAccordion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

const steps = [
  {
    label: 'Hound Vault for Students',
    description: `This Vault is for the College Students. It helps students to store their materials online. Create an account of your own now! `,
  },
  {
    label: 'Clean and simple',
    description:
      'This website is simple, clean and user-friendly. No need for clumsy tutorials that are time-consuming. Create your profile and segregate your files online.',
  },
  {
    label: 'Avoid Sensitive Data!',
    description: `This site is developed solely for accompanying students along with their academic journey. Avoid the storage of sensitive data as that would be vulnerable to our environment.`,
  },
];

function DrawerAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hound Vault
            </Typography>
          </IconButton>

          <div>
            <a href="/home" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Home</Button>
            </a>
            <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">About us</Button>
            </a>
            <a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">signup </Button>
            </a>
            <a href="/signin" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">signin</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Extra() {
  return (
    <div style={{ display: 'flex', padding: '20px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 500, padding: '15px', marginLeft: 2, marginRight: 2,backgroundColor:"#46F0E1" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais"
            alt="work"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             <h3> For work</h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>
              Work efficiently on projects, stay in sync, and keep company data safe—all in one place. This place is can be used as a locker to store work/business-related docs and files.
              </h4>
             
            </Typography>
          </CardContent>
        </CardActionArea>
       
      </Card>

      <Card sx={{ maxWidth: 500, padding: '15px', marginLeft: 2, marginRight: 2,backgroundColor:"#46F0E1" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://img.freepik.com/free-vector/two-fathers-raising-son_74855-1483.jpg?w=2000"
            alt="work"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h3>For personal</h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
             <h4> Keep everything that’s important to you and your family safe in one place. Back up files, materials, and more. Make use of this place to store your memories and personal files.</h4>
            </Typography>
          </CardContent>
        </CardActionArea>
      
      </Card>
    </div>
  );
}

function Home() {
  const theme = createTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#D4FA9E', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* AppBar Component */}
        <DrawerAppBar />

        {/* Stepper and Accordion Components */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
            padding: 2,
            overflowX: 'hidden',
            width: '96%',
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '50%' }, marginRight: { xs: 0, md: 2 } }}>
            <BasicAccordion />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                pl: 2,
                bgcolor: '#9C8DF4', 
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 250, width: '95.%', p: 2, bgcolor: '#A0DDEE', overflowY: 'auto' }}>
              {steps[activeStep].description}
            </Box>
            <MobileStepper
  variant="text"
  steps={maxSteps}
  position="static"
  activeStep={activeStep}
  nextButton={
    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
      Next
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </Button>
  }
  backButton={
    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      Back
    </Button>
  }
  sx={{
    bgcolor: '#F5F5F5',
    p: 1,
    mt: 1,
    alignSelf: 'flex-end', 
    paddingRight: 5, 
  }}
/>
          </Box>
        </Box>
        <Extra />

        {/* Footer Component */}
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">Stay away from frauds!</Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        Hound Vault
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Home;