import React from "react";
import axios from "axios";

import {Button , TextField } from "@material-ui/core";
import { RadioGroup , Radio } from "@material-ui/core";
import { FormControlLabel , FormControl , FormLabel } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Register = ()=>{
    const history = useHistory();
    const [FirstName , setFirstName] = useState('');
    const [LastName , setLastName] = useState('');
    const [Gender , setGender] = useState('');
    const [Dob , setDob] = useState('');
    const [ContactNumber , setContactNumber] = useState('');

    const Submit = ()=>{
    axios
    .post('http://localhost:8080/fhir/Patient', {
        resourceType : "Patient",
        name : [
            {
                given:FirstName
            },
            {
                family:LastName
            }
        ],
      gender:Gender,
      birthDate:Dob,
      telecom : [
        {
            value:ContactNumber
        },
    ]
    })
    .then((data) => {
      alert(
        "Patient Registered Successfully"
      );
      history.push('/');
      console.log(data);
    })
    .catch((err) => {
      alert(err);
    });
};
    return(
        <div style={{marginLeft:'20px'}}>
        <h2>Register a new Pateint</h2>
        <form className="form">
        <TextField className="input" label="FirstName" value={FirstName}
         onChange={(e) => setFirstName(e.target.value)} variant="outlined" />

        <br></br>

        <TextField className="input" label="LastName" value={LastName}
        onChange={(e) => setLastName(e.target.value)}  variant="outlined" />

        <br></br>

        <FormControl component="fieldset" onChange={(e) => setGender(e.target.value)}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
        <div>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          </div>
        </RadioGroup>
      </FormControl>

      <br></br>

      <TextField
      label="Date of Birth"
      type="date"
      value={Dob}
      onChange={(e) => setDob(e.target.value)}
      defaultValue="2021-08-06"
      className="date"
      InputLabelProps={{
        shrink: true,
      }}
    />

    <br></br>

    <TextField className="input" label="Contact Number" value={ContactNumber}
    onChange={(e) => setContactNumber(e.target.value)} variant="outlined" />
    <br></br>
        </form>

        <Button variant="contained" onClick={Submit} color="primary">
    Submit
  </Button>
        </div>
    )
}

export default Register;