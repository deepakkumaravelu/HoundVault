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
      <AppBar position="static" sx={{backgroundColor:"#C3073F"}}>
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
            <a href="#apho" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">Aphorisms</Button>
            </a>
            <a href="#usecase" style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit">usecases</Button>
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
  <div id="usecase" style={{backgroundColor:"#4E4E50",color:"white",padding:"25px"}}> 
  <div style={{textAlign:"center",marginLeft:"25px"}}><Typography variant="h4" style={{padding:"15px"}}>
             UseCases
            </Typography></div> 
 
  <div style={{ display: 'flex', padding: '20px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
  
  <Card sx={{ maxWidth: 500, padding: '15px', marginLeft: 2, marginRight: 2,backgroundColor:"#C3073F",color:"white" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais"
        alt="work"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h3> For company projects</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>
          Work efficiently on projects, stay in sync, and keep company data safe—all in one place. This place is can be used to store work/business-related docs and files.
          </h4>
         
        </Typography>
      </CardContent>
    </CardActionArea>
   
  </Card>

  <Card sx={{ maxWidth: 500,color:"white", padding: '15px', marginLeft: 2, marginRight: 2,backgroundColor:"#C3073F" }}>
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
<div style={{ display: 'flex', padding: '20px', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
  
  <Card sx={{ maxWidth: 500, padding: '15px', marginLeft: 2, marginRight: 2,backgroundColor:"#C3073F",color:"white" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image="https://thumbs.dreamstime.com/b/programmer-working-program-web-developer-coding-computer-screen-code-script-open-windows-coder-engineer-vector-208530984.jpg"
        alt="work"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h3> For coders</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h4>
          Code files can be logically organized into folders and subfolders, mimicking the structure of your project.This also provides Back-up.
          </h4>
         
        </Typography>
      </CardContent>
    </CardActionArea>
   
  </Card>

  <Card sx={{ color:"white",maxWidth: 500, padding: '15px', marginLeft: 2, marginRight: 2,backgroundColor:"#C3073F" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image="https://img.freepik.com/free-vector/coronavirus-news-update-illustration_52683-51043.jpg"
        alt="work"
      />
      <CardContent sx={{}}>
        <Typography gutterBottom variant="h5" component="div">
          <h3>File-shelves</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h4>Viable option for storing publishing materials. Convenient for frequent travelers or those with limited physical storage space.</h4>
        </Typography>
      </CardContent>
    </CardActionArea>
  
  </Card>
</div>







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
      <Box sx={{ backgroundColor: '#4E4E50', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* AppBar Component */}
        <DrawerAppBar />

        {/* Stepper and Accordion Components */}
        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh', 
    padding: '30px',
  }}
>
  <Box sx={{ width: '90%', maxWidth: '800px' }}>
  </Box>
  <Box sx={{ width: '90%', maxWidth: '800px', marginTop: '0px' }}>
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        pl: 2,
        bgcolor: '#950740',
        color:"WHITE"
      }}
    >
      <Typography><b>{steps[activeStep].label}</b></Typography>
    </Paper>
    <Box sx={{ height: 250, width: '96%', p: 2, bgcolor: '#1A1A1D', overflowY: 'auto' ,color:"white"}}>
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
<div id="apho" style={{backgroundColor:"#4E4E50",color:"white"}}>
<div style={{textAlign:"center",marginLeft:"25px"}}>
<Typography variant="h4" style={{padding:"15px"}}>
             Aphorisms
            </Typography>
</div>
        <BasicAccordion />
</div>
        <Extra />

        {/* Footer Component */}
        <Box
          component="footer"
          sx={{
            color:"white",
            py: 1,
            px: 2,
            mt: 'auto',
            backgroundColor:"#950740",
          }}
        >
          <Container maxWidth="sm">
           
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
function Copyright() {
  return (
   <div>
     <Typography variant="body1">Stay away from frauds!</Typography>



<Typography variant="body2" color="white">
  {'Copyright © '}
  <Link color="inherit" href="">
    Hound Vault
  </Link>{' '}
  {new Date().getFullYear()}
  {'.'}
</Typography>
   </div>
  );
}

export default Home;