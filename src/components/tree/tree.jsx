import { DomainPropTypes } from "@material-ui/pickers/constants/prop-types";
import React from "react";


const Tree = ({props , currentIteration = 0})=>{
    console.log(props.data , currentIteration);
    return(
        currentIteration = 5?null:(
        <div>
        <p>{props.data.name}</p>
        <Tree props={props} currentIteration = {++currentIteration} />
        </div>
        )
        
    )
}

export default Tree;