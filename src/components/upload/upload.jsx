import { TextField } from "@material-ui/core";
import React, {useState} from "react";



const Upload = ()=>{
// const [file , setFile] = useState('');
const [jsondata , setJsonData] = useState('');

 const handleFileChange = (files)=>{
    const file = files[0];
    console.log(file);
    const render = new FileReader();
    render.readAsBinaryString(file);
    render.onload = ()=>{
        setJsonData(render.result);
        console.log(jsondata);
    }     
    render.onerror = ()=>{
        console.log('file error' , render.error);
    }
}

console.log(jsondata);
    return(
        <div>
        <TextField type='file' className='file' onChange={(e)=>handleFileChange(e.target.files)}>
        </TextField>
        </div>
    )
}

export default Upload;