import Card from "./components/card.jsx";

export default function App() {
  return (
    <div className="parent">
    <div className="card">
      <img src="https://images.unsplash.com/photo-1781016255496-1fd7ac364ea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D" alt="Random Image" />
      <h1>shubham singh</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
     <button>Click Me</button>
    </div>
      <Card user="shubham"age={18} img="https://images.unsplash.com/photo-1781016255496-1fd7ac364ea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D" alt="Random Image" /> 
       <Card user="Anurag"age={21} img ="https://images.unsplash.com/photo-1777971911576-de6d56a93681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"/> 
       <Card user="Anushka"age={20} img="https://images.unsplash.com/photo-1779406859387-5d6fd116b3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"/> 
    </div>
  );
}
