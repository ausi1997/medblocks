import React, { useEffect, useState } from "react";
import axios from "axios";

import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const Home = ()=>{
  
  const classes = useStyles();
  const [patient , setPatient] = useState([]);

  useEffect(()=>{
       axios.get('http://localhost:8080/fhir/Patient')
       .then((data)=>{
         //console.log(data.data.entry);
         setPatient(data.data.entry);
   //      console.log(patient);
       })
       .catch(err=>{
         console.log(err);
       })
  },[])
  console.log(patient);
return(
    <div>
    <div style={{display:"flex"}}>
    <h2>All Pateints</h2>
    <div style={{marginLeft:'700px', marginTop:'20px'}}>
   <Link to='/register' style={{textDecorationLine:'none'}}>
    <Button variant="contained" color="primary">
    New Pateint +
  </Button>
  </Link>
  </div>
  </div>
  <div>
  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Patient Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">DOB&nbsp;(g)</TableCell>
            <TableCell align="right">Contact&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patient && patient.map((item) => (
                  
            <TableRow>
            <TableCell>{ item.resource.name && item.resource.name[0].given}{" "} 
            {item.resource.name && item.resource.name[1]=== undefined?" " 
            :item.resource.name && item.resource.name[1].family}</TableCell>
              <TableCell align="right">{item.resource.gender}</TableCell>
              <TableCell align="right">{item.resource.birthDate}</TableCell>
              <TableCell align="right">{item.resource.telecom && item.resource.telecom[0].value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
    </div>
)
}

export default Home;