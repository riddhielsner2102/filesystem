import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function BasicForm() {
    const [folder, setFolder] =React.useState('');
    const [file, setFile] =React.useState('');
    function FolderHandler(e) {
    //    this.setState({setFolder: e.target.value})
    e.preventDefault();
    setFolder(e.target.value);
       console.log(e.target.value)
          }
     function handleSubmit()
     {
        
     }     
  return (
  
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <label>New Folder Name:</label>
      <TextField id="outlined-basic" label="Folder" variant="outlined" name="folder" onChange={FolderHandler} />
      <Button variant="outlined" onClick={handleSubmit}>Add Folder</Button>
      </div>
      <div>
        <label>New File Name:</label>
      <TextField id="outlined-basic" label="File" variant="outlined" name="file" />
      <label>content:</label>
      <Button variant="outlined">Add File</Button>
      </div>
      <div>
      <Button variant="outlined">Clear Selection</Button>
      </div>
    </Box>
    <Divider/>
    </>
    
  );
}