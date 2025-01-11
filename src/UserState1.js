import React,{useState} from 'react';

function UserState1() {

    const[count, setCount] = useState(0); 
    /* The 'count' is a variable we used
       The 'setCount' is a function that operates on the variable 'count'
       We have initialised the value of 'count' as zero with help of useState*/

       function handleCount(){
        setCount(count+1)
       }
    return(
        <div>
            <button onClick={handleCount}>Click Me</button>
            <p>You clicked {count} times</p>
        </div>
    )
}

export default UserState1