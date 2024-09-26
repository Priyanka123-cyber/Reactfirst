import { Button, TextField } from '@mui/material'
import React from 'react'



const Add = () => {
  return (<div>
    <h2>New Employee</h2>
    <TextField id="standard-basic" label="Employee ID" variant="standard" /><br />
    <TextField id="standard-basic" label="Employee Name" variant="standard" /><br />
    <TextField id="standard-basic" label="Department" variant="standard" /><br />
    <TextField id="standard-basic" label="Location" variant="standard" /><br /><br />
    <Button variant="contained">Add Employee</Button>
    </div>
  )
}

export default Add