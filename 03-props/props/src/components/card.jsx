import React from "react";

//yaha par hmm component use without props  ke use kar rahe hai.
// const Card = () => {
//     //here we are creating a card component which will be used in the app.jsx file. we can use this component multiple times in the app.jsx file. we can also pass props to this component to make it more dynamic.
//   return (
//    <div className="card">
//       <img src="https://images.unsplash.com/photo-1781016255496-1fd7ac364ea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D" alt="Random Image" />
//       <h1>shubham singh</h1>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
//      <button>Click Me</button>
//     </div>
//   )
// }
// export default Card;


//yaha apr hmm props ka use kr rhe hai jisse hum apne component ko dynamic bana skte hai. props ek object hota hai jisme hum apne component ke liye data pass krte hai. is example me humne user aur age props pass kiye hai jisse hum apne card component me use kr skte hai.
// const Card = (props) => {
// console.log(props);
//     //here we are creating a card component which will be used in the app.jsx file. we can use this component multiple times in the app.jsx file. we can also pass props to this component to make it more dynamic.
//   return (
//    <div className="card">
//       <img src="https://images.unsplash.com/photo-1781016255496-1fd7ac364ea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D" alt="Random Image" />
//       <h1>{props.user}</h1>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
//      <button>Click Me</button>
//     </div>
//   )
// }
const Card = (props) => {
console.log(props);
    //here we are creating a card component which will be used in the app.jsx file. we can use this component multiple times in the app.jsx file. we can also pass props to this component to make it more dynamic.
  return (
   <div className="card">
      <img src={props.img} alt="Random Image" />
      <h1>{props.user}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
     <button>Click Me</button>
    </div>
  )
}
export default Card;