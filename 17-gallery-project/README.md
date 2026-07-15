# React + Axios Image Gallery Example

## Overview

This project demonstrates how to:

- Fetch data from an API using **Axios**
- Use **React Hooks** (`useState` and `useEffect`)
- Store API data in state
- Display images and author names
- Refresh data using a button

---

# Technologies Used

- React
- Axios
- Tailwind CSS

---

# Imports

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
```

### Explanation

- `React` → Used to create components.
- `useState` → Stores data that changes.
- `useEffect` → Runs code after the component renders.
- `axios` → Makes HTTP requests to APIs.

---

# State

```jsx
const [userdata, setUserData] = useState([]);
```

### Explanation

- `userdata` stores the API response.
- Initial value is an empty array (`[]`).
- `setUserData()` updates the state.

Example:

Initially

```js
userdata = [];
```

After API call

```js
userdata = [
  {
    id: "1",
    author: "John",
    download_url: "image-url"
  }
];
```

---

# useEffect

```jsx
useEffect(() => {
    getData();
}, []);
```

### Explanation

`useEffect` runs after the component loads.

Because the dependency array is empty (`[]`), it runs **only once**.

Flow:

```
Component Loads
        ↓
useEffect Runs
        ↓
getData() Called
        ↓
API Request
        ↓
State Updated
        ↓
UI Re-renders
```

---

# API Function

```jsx
const getData = async () => {
    const response = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=10"
    );

    setUserData(response.data);

    console.log(userdata);
};
```

## Step-by-step

### Step 1

```jsx
const response = await axios.get(url);
```

Sends a GET request.

---

### Step 2

API returns

```js
response.data
```

Example:

```js
[
  {
    id: "0",
    author: "Alejandro Escamilla",
    download_url: "https://..."
  }
]
```

---

### Step 3

```jsx
setUserData(response.data);
```

Stores the API data inside state.

---

### Important

```jsx
console.log(userdata);
```

This may print the **old value** because React state updates are asynchronous.

To see updated state:

```jsx
useEffect(() => {
    console.log(userdata);
}, [userdata]);
```

---

# Conditional Rendering

```jsx
let printuserData = "no user found";
```

Initially

```
No user found
```

If data exists

```jsx
if (userdata.length > 0) {
    ...
}
```

Then the images are displayed.

---

# Mapping Data

```jsx
userdata.map(function (obj, index) {
    return (
        <div>
            ...
        </div>
    );
});
```

### What is map()?

`map()` loops through every object in an array and returns JSX.

Example

Array

```js
[
    { author: "John" },
    { author: "Alex" }
]
```

Output

```jsx
<h2>John</h2>
<h2>Alex</h2>
```

---

# Display Image

```jsx
<img
    src={obj.download_url}
    alt={obj.author}
/>
```

`src`

Image URL from API.

`alt`

Alternative text for accessibility.

---

# Display Author

```jsx
<h2>{obj.author}</h2>
```

Shows the author's name.

---

# Button

```jsx
<button onClick={getData}>
    get-data
</button>
```

When clicked

```
Button Click
      ↓
getData()
      ↓
API Request
      ↓
State Updated
      ↓
UI Updated
```

---

# JSX Returned

```jsx
return (
    <div>
        <button>get-data</button>

        <div>
            {printuserData}
        </div>
    </div>
);
```

This renders

- Button
- Images
- Author Names

---

# API Used

```
https://picsum.photos/v2/list?page=2&limit=10
```

Returns

```json
[
  {
    "id": "10",
    "author": "Paul Jarvis",
    "download_url": "https://..."
  }
]
```

---

# Complete Flow

```
Component Loads
        │
        ▼
useEffect Executes
        │
        ▼
getData()
        │
        ▼
Axios GET Request
        │
        ▼
API Returns Data
        │
        ▼
setUserData()
        │
        ▼
State Updates
        │
        ▼
Component Re-renders
        │
        ▼
Images + Authors Displayed
```

---

# Important React Concepts Learned

## useState

Stores changing data.

```jsx
const [state, setState] = useState(initialValue);
```

---

## useEffect

Runs side effects.

```jsx
useEffect(() => {

}, []);
```

---

## Axios

Makes API requests.

```jsx
axios.get(url);
```

---

## map()

Loops through arrays.

```jsx
array.map(item => ...)
```

---

## Conditional Rendering

```jsx
if (condition) {
    ...
}
```

or

```jsx
condition ? A : B
```

---

## JSX

Allows writing HTML inside JavaScript.

Example

```jsx
<h1>Hello React</h1>
```

---

# Improvements (Best Practices)

1. Add a `key` prop while using `map()`.

```jsx
userdata.map((obj) => (
    <div key={obj.id}>
        ...
    </div>
))
```

2. Handle API errors.

```jsx
try {
    const response = await axios.get(url);
    setUserData(response.data);
} catch (error) {
    console.error(error);
}
```

3. Show a loading state while fetching data.

4. Move the API URL to a constant for better maintainability.

---

# Summary

This project demonstrates:

- React Functional Components
- useState
- useEffect
- Axios GET Requests
- Async/Await
- Conditional Rendering
- Array map()
- Displaying API Data
- Tailwind CSS Styling

It is a great beginner project for learning how React interacts with external APIs.