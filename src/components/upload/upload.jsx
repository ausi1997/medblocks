import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";



const Upload = ()=>{
const [file , setFile] = useState('');
const [jsondata , setJsonData] = useState('');

useEffect(()=>{
    const data = new FormData();
    data.append("file" , file);
    setJsonData(data);
},[]);
console.log(jsondata);
    return(
        <div>
        <TextField type='file' className='file' onChange={(e)=>setFile(e.target.files[0])}>
        </TextField>
        </div>
    )
}

export default Upload;