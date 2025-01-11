import './App.css';
import Ex1 from './Ex1'
import candy from "./candy.png"

function App1(){
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return(
        <div>
            <h1>Hello, Good Morning</h1>
            <h3>List of Fruits</h3>
                <ol type='A'>
                    <li>Kiwi</li>
                    <li>Litchi</li>
                    <li>Apple</li>
                </ol>
            <img src={candy} alt='Image' />
            <h5>Current date : {date}</h5>
            <h5>Current date : {time}</h5>
        </div>
    )
}

export default App1;