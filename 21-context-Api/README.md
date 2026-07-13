# React Context API Example

This project demonstrates how to use the **React Context API** to share data between components without passing props through every level (Prop Drilling).

---

# Project Structure

```
src/
│
├── App.jsx
│
├── context/
│   └── Themecontext.jsx
│
└── component/
    ├── navbar.jsx
    └── navbar2.jsx
```

---

# Components

## 1. App.jsx

This is the root component.

### Responsibilities

- Creates a `theme` state.
- Passes the theme to `Navbar` using props.
- Sends children inside the `Navbar` component.

```jsx
const [theme] = useState("light");

<Navbar theme={theme}>
    <h3>Hello</h3>
    <h3>Hi</h3>
</Navbar>
```

### Props Sent

```
theme = "light"
children =
    <h3>Hello</h3>
    <h3>Hi</h3>
```

---

## 2. Themecontext.jsx

Creates a Context and provides data to every component wrapped inside it.

### Create Context

```jsx
export const ThemeDataContext = createContext();
```

### Provider

```jsx
<ThemeDataContext.Provider value="shuhbh">
    {props.children}
</ThemeDataContext.Provider>
```

### Current Context Value

```
"shuhbh"
```

Every component inside this Provider can access this value using:

```jsx
useContext(ThemeDataContext)
```

---

## 3. Navbar.jsx

Receives props from App.

```jsx
const Navbar = (props) => {}
```

### Receives

```
props.theme
props.children
```

### Reads Context

```jsx
const data = useContext(ThemeDataContext);
```

`data` becomes

```
"shuhbh"
```

### Sends Theme to Nav2

```jsx
<Nav2 theme={props.theme} />
```

### Displays

```jsx
<h1>{data}</h1>
```

Output

```
shuhbh
```

---

## 4. Navbar2.jsx

Receives

```jsx
props.theme
```

Reads Context

```jsx
const data = useContext(ThemeDataContext);
```

Displays

```
Home
About
Contact
Services
light
shuhbh
```

---

# Data Flow

```
App
 │
 │ theme="light"
 ▼
Navbar
 │
 │ theme
 ▼
Nav2
```

Context Flow

```
Themecontext
        │
        ▼
ThemeDataContext.Provider
        │
        ▼
Navbar
        │
        ▼
Nav2
```

No props are required for Context data.

---

# Difference Between Props and Context

## Props

```
Parent
  │
  ▼
Child
  │
  ▼
GrandChild
```

Every component passes the value manually.

Example

```jsx
<App theme="light">
```

↓

```jsx
<Navbar theme={theme}>
```

↓

```jsx
<Nav2 theme={theme}>
```

---

## Context

```
Provider
   │
   ├────────────► Navbar
   │
   └────────────► Nav2
```

Both components directly access data.

```jsx
const data = useContext(ThemeDataContext);
```

No prop passing is needed.

---

# Current Output

```
Navbar

shuhbh

-------------------

Home
About
Contact
Services
light
shuhbh
```

---

# Important Note

For Context to work, your application **must** be wrapped with the Provider.

Example:

```jsx
import Themecontext from "./context/Themecontext";

<Themecontext>
    <App />
</Themecontext>
```

Usually this is done in `main.jsx`.

Example:

```jsx
import ReactDOM from "react-dom/client";
import App from "./App";
import Themecontext from "./context/Themecontext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Themecontext>
        <App />
    </Themecontext>
);
```

If you don't wrap the application with `Themecontext`, then

```jsx
useContext(ThemeDataContext)
```

will return

```
undefined
```

---

# Props vs Context Summary

| Props | Context |
|--------|---------|
| Pass data manually | Share data globally |
| Parent → Child | Provider → Any Component |
| Causes prop drilling | Avoids prop drilling |
| Good for local data | Good for shared/global data |
| Easy for small apps | Better for medium & large apps |

---

# Key React Concepts Used

- Functional Components
- JSX
- Props
- Children Props
- useState()
- createContext()
- Context Provider
- useContext()
- Component Composition

---

# Learning Outcome

After completing this project, you should understand:

- ✅ What is Context API
- ✅ Why Context API is needed
- ✅ What is Prop Drilling
- ✅ How to create a Context
- ✅ How to create a Provider
- ✅ How to consume Context using `useContext`
- ✅ Difference between Props and Context
- ✅ How Context makes data sharing easier in React