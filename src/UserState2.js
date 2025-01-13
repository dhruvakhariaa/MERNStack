import React, {useState} from 'react'

function UserState2(){
    const[num, setNum] = useState(0);

    function increment(){
        if(num < 10){
            setNum(num+1)
        }
    }
    function decrement(){
        if(num > 0){
            setNum(num-1)
        }
    }

    return(
        <div>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
            <p>You click the button {num} times</p>
        </div>
    )
}

export default UserState2;