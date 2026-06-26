import React from "react";
const App = () => {
  const formhandler = (e) => {
    e.preventDefault(); // use to prevent reload page when submit form
    console.log("formsubmitted");
  };

  return (
    <div className="app-shell">
      <div className="form-card">
        <h1>Join our community</h1>
        <p>Submit your name for a quick welcome message.</p>
        <form onSubmit={(e)=>{
          formhandler(e)
        }} className="signup-form">
          <input type="text" placeholder="Name" className="text-input" />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;