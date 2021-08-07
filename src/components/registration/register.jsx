import React from "react";

import {Button , TextField } from "@material-ui/core";
import { RadioGroup , Radio } from "@material-ui/core";
import { FormControlLabel , FormControl , FormLabel } from "@material-ui/core";


const Register = ()=>{
    return(
        <div style={{marginLeft:'20px'}}>
        <h2>Register a new Pateint</h2>
        <form className="form">
        <TextField className="input" label="FirstName" variant="outlined" />
        <br></br>
        <TextField className="input" label="LastName" variant="outlined" />
        <br></br>
        <FormControl component="fieldset">
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
      defaultValue="2021-08-06"
      className="date"
      InputLabelProps={{
        shrink: true,
      }}
    />
    <br></br>
    <TextField className="input" label="Contact Number" variant="outlined" />
    <br></br>
        </form>
        <Button variant="contained" color="primary">
    Submit
  </Button>
        </div>
    )
}

export default Register;