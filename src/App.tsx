import React from 'react';
import logo from './logo.svg';
import './App.css';
export  function C1(){
  return(
    <>
    <h2>This is C1 component!!</h2>
    </>
  );
}
export function C2(){
  return(
    <h2>This is C2 component</h2>
  );
}
function App() {
  let a="Hello I am Harshitha!!"
  return (
    <>
    <h1>REACT STARTING</h1>
    <hr/>
    <h2>Code</h2>
    <p>Data:{a}</p>

    </>
  );
}

export default App;
