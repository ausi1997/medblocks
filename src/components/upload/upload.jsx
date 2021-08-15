import { TextField } from "@material-ui/core";
import React, {useState} from "react";
import Tree from "../tree/tree";



const Upload = ()=>{
// const [file , setFile] = useState('');
const [jsondata , setJsonData] = useState('');

 const handleFileChange = (files)=>{
    const file = files[0];
  //  console.log(file);
    const render = new FileReader();
    render.readAsBinaryString(file);
    render.onload = ()=>{
        setJsonData(JSON.parse(render.result));
       // console.log(jsondata);
    }     
    render.onerror = ()=>{
        console.log('file error' , render.error);
    }
}

// console.log(jsondata);
    return(
        <div>
        <TextField type='file' className='file' onChange={(e)=>handleFileChange(e.target.files)}>
        </TextField>
        <div>
        <h3>{jsondata && jsondata.tree.name}</h3>
        <Tree data = {jsondata.tree} ></Tree>
        </div>
        </div>
    )
}

export default Upload;