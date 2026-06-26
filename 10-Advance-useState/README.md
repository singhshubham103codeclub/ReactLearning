# React `useState` Examples

This project demonstrates how to use the **React `useState` Hook** with different types of state.

* Primitive values (Number)
* Objects
* Arrays
* Batch Updates (Functional Updates)

---

# Prerequisites

Before running this project, make sure you have:

* Node.js installed
* React installed
* npm or yarn

---

# Installation

```bash
npm install
npm run dev
```

---

# Topics Covered

## 1. Object State

```jsx
const [Num, setNum] = useState({
  user: "shubh",
  age: 21
});
```

### Why we use an object?

Sometimes multiple related values belong together.

Example:

```js
{
  user: "shubh",
  age: 21
}
```

Instead of creating two different states, we store them inside one object.

---

### ❌ Wrong Way

```jsx
Num.user = "Anurag";
setNum(Num);
```

React will not re-render because the object reference remains the same.

---

### ✅ Correct Way

```jsx
const newNum = {
  ...Num
};

newNum.user = "Anurag";
newNum.age = 22;

setNum(newNum);
```

The spread operator (`...`) creates a **new object**, so React detects the change and re-renders the component.

---

## 2. Array State

```jsx
const [Num, setNum] = useState([10,20,30,40]);
```

### Why copy the array?

Arrays are mutable.

Instead of changing the original array, create a new copy.

---

### Example

```jsx
const newNum = [...Num];

newNum.push(50);

setNum(newNum);
```

Output

```
10,20,30,40
```

↓

```
10,20,30,40,50
```

---

## 3. Batch Updates

```jsx
const [Num, setNum] = useState(10);
```

---

### Problem

```jsx
setNum(Num + 1);
setNum(Num + 1);
setNum(Num + 1);
```

Expected Output

```
13
```

Actual Output

```
11
```

### Why?

React batches state updates.

Each statement reads the same old value.

```
Num = 10

10 + 1
10 + 1
10 + 1
```

Only the last update is applied.

---

## Correct Solution

Use the previous state.

```jsx
setNum(prev => prev + 1);
setNum(prev => prev + 1);
setNum(prev => prev + 1);
```

### Execution

```
Initial = 10

prev = 10
↓

11

prev = 11
↓

12

prev = 12
↓

13
```

Final Output

```
13
```

---

# Functional Update

Whenever the next state depends on the previous state, always use:

```jsx
setNum(prev => prev + 1);
```

instead of

```jsx
setNum(Num + 1);
```

---

# React Re-render Rule

React re-renders when the state reference changes.

### Primitive

```jsx
setNum(20);
```

New value → Re-render

---

### Object

```jsx
setNum({...Num});
```

New object reference → Re-render

---

### Array

```jsx
setNum([...Num]);
```

New array reference → Re-render

---

# Spread Operator (`...`)

The spread operator creates a shallow copy.

### Object

```jsx
const newObj = {
  ...oldObj
};
```

### Array

```jsx
const newArr = [
  ...oldArr
];
```

This prevents direct mutation of state.

---

# Project Structure

```
src/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Key Takeaways

* Never mutate React state directly.
* Always create a new object or array before updating.
* Use the spread operator (`...`) for copying objects and arrays.
* React compares state references to decide whether to re-render.
* When updating state multiple times in one function, use the functional update syntax:

  ```jsx
  setState(prev => ...)
  ```
* Functional updates ensure every state change uses the latest value.

---

# Output

### Object Example

```
Before

User : shubh
Age  : 21

↓

After Click

User : Anurag
Age  : 22
```

---

### Array Example

```
Before

10 20 30 40

↓

After Click

10 20 30 40 50
```

---

### Batch Update Example

```
Initial

10

↓

Click

13
```

---

# Author

**Shubham Singh**

Learning React by understanding state management through practical examples.
