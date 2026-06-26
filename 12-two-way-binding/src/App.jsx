import React, { useState } from "react";
const App = () => {
  const[title,setTittle]=useState('')// yaha par hamm useState ka use karake value set kar rahe hai
  const formhandler = (e) => {
    e.preventDefault(); // use to prevent reload page when submit form
    console.log("formsubmitted by",title);
    setTittle('')// here we are use two-way-binding to update the input value that was in initial-sate
  };
  const inputhandler=(e)=>{
    console.log('typing......')
    console.log(e.target.value)
    setTittle(e.target.value)// setTitle ke through value title mai set ho rahi hai
  }
  return (
    <div className="app-shell">
      <div className="form-card">
        <h1>Join our community</h1>
        <p>Submit your name for a quick welcome message.</p>
        <form onSubmit={(e)=>{
          formhandler(e)
        }} className="signup-form">
          <input onChange={inputhandler} value={title} type="text" placeholder="Name" className="text-input" />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;