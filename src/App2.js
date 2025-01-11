import logo from './logo.svg';
import './App.css';
import Ex1 from './Ex1'

function App2() { //Used to write all the code of JavaScript
  var n= "abc";
  var myStyle = {backgroundColor:'#FFB6C1', color:'white'};
  return ( //Used to write all the code of HTML
    <div className="App">
      <h1 style={{backgroundColor:'#FFB6C1', color:'white'}}>Hello World</h1>
      <h1 style={{backgroundColor:'#FFB6C1', color:'white'}}>Addition of 3 + 4 = {3+4}</h1>{/* This is inline css*/}

      <h1 style={myStyle}>My name is Dhruv </h1>{/*CSS is defined externally */}

      <Ex1/> {/*Imported File from external*/}
    </div>
  );
}

export default App2;