import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';

function Extra() 
{
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        await axios.post('YOUR_UPLOAD_API_ENDPOINT', formData);
        fetchFileList();
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const fetchFileList = async () => {
    try {
      const response = await axios.get('YOUR_FETCH_API_ENDPOINT');
      setFileList(response.data);
    } catch (error) {
      console.error('Error fetching file list:', error);
    }
  };

  const handleSearch = () => {
    // Implement your search functionality here
  };

  useEffect(() => {
    fetchFileList();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px'}}>
      <AppBar position="static" sx={{ marginBottom: '40px',borderRadius:"15px",height:"100px",padding:"15px",backgroundColor:"beige",color:"black" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
          Upload your files 
          </Typography>
          <TextField sx={{backgroundColor:"white"}}
            label="Search files..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton onClick={handleSearch} color="inherit">
            <SearchIcon />
          </IconButton>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: 'none' }}
            id="file-upload"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <IconButton component="span" color="inherit">
              <CloudUploadIcon />
            </IconButton>
          </label>
          <Button color="inherit" onClick={handleFileUpload}>
            Upload
          </Button>
        </Toolbar>
      </AppBar>
      {/* Your other components go here */}
    </Box>
  );
};

export default Extra;
