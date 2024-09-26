import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
   const rows=[
        {
            EmployeeID:1,
            EmployeeName:"Sarah Smith", 
            Department:"Sales",
            Location:"NYC"
        },
        {
            EmployeeID:2,
            EmployeeName:"Michael Williams", 
            Department:"Product Manager",
            Location:"Austin,Texas"

        },
        {
            EmployeeID:3,
            EmployeeName:"Liz Taylor", 
            Department:"Devops Engineer",
            Location:"Los Angeles"

        }];

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Employee ID</TableCell>
          <TableCell align="center">Employee Name</TableCell>
          <TableCell align="center">Department</TableCell>
          <TableCell align="center">Location</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.EmployeeID}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.EmployeeID}
            </TableCell>
            <TableCell align="center">{row.EmployeeName}</TableCell>
            <TableCell align="center">{row.Department}</TableCell>
            <TableCell align="center">{row.Location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home