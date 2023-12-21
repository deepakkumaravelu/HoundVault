
import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';


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
  
function About () {
    return (
    
    <div style={{ background: '#D4FA9E'}}>

<DrawerAppBar/> <h2>
            About Us:
        </h2>

<div style={{padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       
         <div style={{ padding: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Card sx={{ maxWidth: 300, padding: '15px', marginLeft: 2, marginRight: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/premium-vector/web-document-secure-confidential-online-access-internet-website-vector-isolated-digital-privacy-lock-protection-text-file-flat-icon_212005-116.jpg"
                        alt="img2"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Secured Documents
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Students can securely store and organize academic documents, such as lecture notes, research papers, and class presentations in their individual vaults.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="/Signup"><Button size="small" color="primary">
                        Secure Now!
                    </Button></a>

                </CardActions>
            </Card>





            <Card sx={{ maxWidth: 300, padding: '15px', marginLeft: 2, marginRight: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/premium-vector/file-transfer-two-laptops-with-folders-screen-transferred-documents-copy-files-data-exchange-backup-file-sharing-concepts-upload-document-flat-style-vector-illustration_735449-148.jpg?w=2000"
                        alt="img1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Minimalistic Storage Approach
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The platform can adopt a minimalist storage approach by allowing users to store links, pointers, or summaries of materials rather than hosting large files directly. This can save storage space and reduce the risk associated with storing bulk data.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="/signup"><Button size="small" color="primary">
                        Save Storage.
                    </Button></a>
                </CardActions>
            </Card>






            <Card sx={{ maxWidth: 300, padding: '15px', marginLeft: 2, marginRight: 2 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/free-vector/set-different-teachers_23-2148518534.jpg?w=2000"
                        alt="img3"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Integrated Vault
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            An Integrated Vault that ensures a seamless experience for both students and educators by creating a centralized repository for their academic achievements..
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="/signup"><Button size="small" color="primary">
                        Achieve it
                    </Button></a>
                </CardActions>
            </Card>
            
        </div>
        <p>
<h2>
Welcome to Hound Vault !
            We understand the challenges of managing
            academic materials,<br></br> and we're here to simplify the process for you.
            <br></br>
</h2>


          
            <h3>Our Mission</h3>

            At Hound Vault, our mission is to provide students with a secure and user-friendly platform to store and organize <br></br>their study materials. We believe that a well-designed digital vault can make a significant difference in how students approach their academic journey.
            <br></br>
            <h3>Secure Storage </h3>

            We prioritize the security of your materials. While offering a convenient digital storage solution,
            we do not allow <br></br>the storage of sensitive or confidential data. Your privacy is our top priority.Navigating through our platform is a breeze.<br></br>
            We've designed an intuitive interface that allows you to effortlessly store and retrieve your materials.
            No tech-savvy skills required! <h3>Individualized Experience</h3>

            We focus on providing a personalized experience for every student,
            ensuring that you can manage your academic resources with ease.<br></br>

            No Bulk Data, No Hassle

            Unlike other platforms, we're not here for bulk data storage. <br></br>
            Hound Vault is specifically tailored for students who want a simple, streamlined solution for their study materials.

            <h3>Get Started Today!</h3>

            Ready to experience the convenience of a secure and user-friendly online vault? <br></br>
            Sign up now and start organizing your academic journey with Hound Vault.


        </p>





        <CardActions>
                    <a href="/home"><Button size="small" color="primary">
                        Home @HoundVault
                    </Button></a>

                </CardActions>



    </div>
    </div>
    
    
    

    );
};

export default About;
