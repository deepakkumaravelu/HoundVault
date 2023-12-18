import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div style={{ borderRadius:"8px", padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Accordion sx={{backgroundColor:"#EF81E0"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>― Valuable Storage </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          “Proper storage is about creating a home for something so that minimal effort is required to find it and put it away.”
          </Typography>
        </AccordionDetails>
      </Accordion>
      



      <Accordion sx={{backgroundColor:"YELLOW"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>― Value of Data </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          “In the next three years, the value of data will increase, making it even more valuable than it is today. The more efficiently you store your data, the more benefits your business will see.”
          </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor:"ORANGE"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>― Security</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          "Safety and security don't just happen; they are the result of collective consensus and public investment."
          </Typography>
        </AccordionDetails>
        </Accordion>
     
    </div>
  );
}
