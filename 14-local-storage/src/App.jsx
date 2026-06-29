import React from 'react'
const App =()=>{
  // save a simple string value in localStorage under the key "user"
  localStorage.setItem("user", "shubh")

  // read the string value from localStorage
  const savedUser = localStorage.getItem("user")
  console.log(savedUser)

  // remove only the "user" entry from localStorage
  localStorage.removeItem("user")

  // clear all localStorage entries (use with caution)
  localStorage.clear()

  // create a JavaScript object to store in localStorage
  const userObject={
    username:"shubh",
    age:20,
    city:"ayodhya"
  }

  // save the object as a JSON string in localStorage
  localStorage.setItem('user',JSON.stringify(userObject))

  // get the JSON string back from localStorage
  const savedUserJson = localStorage.getItem('user')

  // parse the JSON string to turn it back into an object
  const parsedUser = JSON.parse(savedUserJson)
  console.log(parsedUser)

  return(
    <div>
      App
    </div>
  )
}
export default App