import React from "react";


const Tree = ({props , currentIteration = 0})=>{
    console.log(props && props.data, currentIteration);
    return(
        currentIteration == 5?null:(
        <div>
       {
           console.log(props.data + "2")
       }
        </div>
        )
    )
}

export default Tree;