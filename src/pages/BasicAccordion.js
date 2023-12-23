import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function BasicAccordion() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Accordion sx={{borderRadius:"8px", width: '100%', maxWidth: '800px', mb: '15px', bgcolor: '#C3073F', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>― Valuable Storage</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          “Proper storage is about creating a home for something so that minimal effort is required to find it and put it away.”
        
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{borderRadius:"8px", width: '100%', maxWidth: '800px', mb: '15px', bgcolor: '#1A1A1D', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>― Value of Data</b> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          “In the next three years, the value of data will increase, making it even more valuable than it is today. The more efficiently you store your data, the more benefits your business will see.”

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{borderRadius:"8px", width: '100%', maxWidth: '800px', bgcolor: '#950740', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
           <Typography><b>― Security</b></Typography>
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

export default BasicAccordion;
