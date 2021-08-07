import React from "react";

import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';

const Home = ()=>{
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
    </div>
)
}

export default Home;