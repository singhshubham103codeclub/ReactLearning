import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// const App = () => {
//   // useState creates a state variable and a function to update it.
//   // num starts at 0, and setNum is used to change its value.
//   const [num, setNum] = useState(0);

//   // useEffect runs after the component renders.
//   // The callback will run every time `num` changes.
//   // useEffect(() => {
//   //   console.log("useEffect called");
//   // }, [num]);

//   // If you want to run the effect only once when the component mounts, you can pass an empty dependency array.
//   useEffect(() => {
//     console.log("useEffect called");
//   }, []);


//   return (
//     <div>
//       {/* Display the current number state */}
//       <h1>{num}</h1>

//       {/* When the button is clicked, increment num by 1 */}
//       <button onClick={() => setNum(num + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  // useState creates a state variable and a function to update it.
  // num starts at 0, and setNum is used to change its value.
  const [num, setNum] = useState(0);
 const [num2, setNum2] = useState(10);
  useEffect(() => {
    console.log("useEffect called");
  }, [num2]);


  return (
    <div>
      {/* Display the current number state */}
      <h1>{num}</h1>
      <h1>{num2}</h1>

      {/* When the button is clicked, increment num by 1 */}
      <button onClick={() => setNum(num + 1)} onDoubleClick={() => setNum2(num2 + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;