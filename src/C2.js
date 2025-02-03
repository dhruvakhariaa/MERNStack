import React,{useContext} from "react";
import {Fname, Lname} from "./PC";
function C2(){

    const fname = useContext(Fname)
    const lname = useContext(Lname)

    return(
        <div>
            <h1>Welcome {fname} {lname}</h1>
        </div>
    )
}

export default C2