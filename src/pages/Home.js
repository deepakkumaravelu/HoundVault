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
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'Hound Vault for Students',
    description: `This Vault is for the College Students. It helps students to store their materials online. Create an account of your own now! `,
  },
  {
    label: 'Clean and simple',
    description:
      'This website is simple, clean and user-friendly. No need of clumsy tutorials that are time-consuming. Create your profile and segregate your files online.',
  },
  {
    label: 'Avoid Sensitive Data !',
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
            <a href="/signin" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">signin</Button>
            </a>
            <a href="/signup" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">signup</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
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
      <Box sx={{ backgroundColor: '#D4FA9E', display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* AppBar Component */}
        <DrawerAppBar />

        {/* Stepper Component */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
            marginTop: 6,

          }}
        >
          <Box sx={{ maxWidth: 400, flexGrow: 1, width: '100%' }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                pl: 2,
                bgcolor: '#87CEFA', // Light Blue
              }}
            >
              <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 250, width: '92%', p: 2, bgcolor: '#DFC79A' }}>
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
              }}
            />
          </Box>
        </Box>

        {/* Footer Component */}
        <Box
          component="footer"
          sx={{
            py: 3,
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
