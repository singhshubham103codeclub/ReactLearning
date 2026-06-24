useEffect is a React Hook used to perform side effects in a component.

A side effect means any work that happens outside of rendering UI, such as:

Fetching data from an API
Setting a timer (setTimeout, setInterval)
Adding event listeners
Updating the document title
Accessing local storage
Why do we use useEffect?

React components render the UI. If you want something to happen after the component renders, you use useEffect.

Simple Explanation

Think of it like:

"After React displays the component on the screen, run this code."

When does useEffect run?
After the first render (component loads)
When specified data/state changes
When the component is removed (cleanup)
Syntax
useEffect(() => {
  // code to run after render
}, []);
Interview Definition

useEffect is a React Hook that allows us to perform side effects in functional components after rendering. It is commonly used for API calls, timers, event listeners, and other operations that interact with the outside world.

Real-Life Example

Imagine opening a website:

UI appears on the screen.
Then data is fetched from a server.

The data fetching part is a side effect, so we use useEffect.

Key Point

useEffect = "Run some code after rendering the component."