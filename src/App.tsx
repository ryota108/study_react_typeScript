import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let bool: boolean = true;
  let num: number = 0;
  let str: string = "";
  let arr1: Array<number> = [0];
  let arr2: number[] = [0];

  let tuple : [number,string] = [0,"A"]

  let any1:any = false;

  let funcA = ():void =>{
    console.log("ok")
  }

  let null1:null = null;

  let undefined1:undefined = undefined;

  let obj1 :{name:string} = {name:"ok"}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
