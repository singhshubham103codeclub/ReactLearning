# React Two-Way Binding

This project demonstrates **Two-Way Binding** in React using the `useState` Hook.

The application allows a user to:

* Type their name into an input field.
* Store the input value in React state.
* Display the latest value during form submission.
* Clear the input field after submitting the form.

The input field and React state always remain synchronized.

---

# Learning Objectives

After completing this project, you will understand:

* What Two-Way Binding is.
* How `useState` stores input values.
* How the `onChange` event updates the state.
* How the `value` attribute keeps the input synchronized with the state.
* Why controlled components are important in React.

---

# What is Two-Way Binding?

Two-Way Binding means **the input field and the React state always stay in sync.**

If the user changes the input, the state updates.

If the state changes, the input automatically updates.

```text
Input Field
      ⇅
 React State
```

Both can update each other.

---

# How Two-Way Binding Works

There are **two directions** of data flow.

## 1. Input → State

When the user types something:

```text
User Types
     ↓
onChange Event
     ↓
inputhandler()
     ↓
setTitle()
     ↓
React State Updates
```

Code:

```jsx
const inputhandler = (e) => {
    setTitle(e.target.value);
};
```

Here,

```jsx
e.target.value
```

contains the current value typed by the user.

`setTitle()` stores that value inside React state.

---

## 2. State → Input

The input field receives its value from React state.

```jsx
<input
    value={title}
    onChange={inputhandler}
/>
```

Whenever `title` changes,

React automatically updates the input field.

Flow:

```text
React State Changes
        ↓
Input Value Updates
```

---

# Why is `value={title}` Important?

Without:

```jsx
<input onChange={inputhandler} />
```

The browser controls the input.

React does not fully control it.

---

With:

```jsx
<input
    value={title}
    onChange={inputhandler}
/>
```

The input becomes a **Controlled Component**.

Now React controls the displayed value.

---

# Controlled Component

A controlled component is an input whose value is controlled by React state.

Example:

```jsx
const [title, setTitle] = useState("");

<input
    value={title}
    onChange={inputhandler}
/>
```

Here,

* `title` stores the current value.
* `setTitle()` updates the value.
* `value={title}` displays the latest value.

---

# Clearing the Input Field

After the form is submitted:

```jsx
setTitle("");
```

This changes the state to an empty string.

```text
title = ""
      ↓
React Re-renders
      ↓
Input becomes empty
```

This is another example of **State → UI** synchronization.

---

# Complete Flow

```text
Application Starts
        ↓
title = ""
        ↓
User Types "Shubham"
        ↓
onChange Fires
        ↓
inputhandler()
        ↓
setTitle("Shubham")
        ↓
State Updates
        ↓
Input Displays "Shubham"
        ↓
User Clicks Submit
        ↓
Form Submitted
        ↓
Console:
formsubmitted by Shubham
        ↓
setTitle("")
        ↓
State Becomes Empty
        ↓
Input Clears Automatically
```

---

# Why React Uses Two-Way Binding

It helps to:

* Keep the UI synchronized with the application state.
* Easily validate user input.
* Reset forms with a single state update.
* Make form data easier to manage.

---

# Key Parts of the Code

## Create State

```jsx
const [title, setTitle] = useState("");
```

Stores the input value.

---

## Update State

```jsx
const inputhandler = (e) => {
    setTitle(e.target.value);
};
```

Updates the state whenever the user types.

---

## Bind State to Input

```jsx
<input
    value={title}
    onChange={inputhandler}
/>
```

Connects the input field with React state.

---

## Reset State

```jsx
setTitle("");
```

Clears both the state and the input field.

---

# Data Flow Diagram

```text
             User Types
                  │
                  ▼
          onChange Event
                  │
                  ▼
         inputhandler()
                  │
                  ▼
       setTitle(e.target.value)
                  │
                  ▼
          React State Updates
                  │
                  ▼
        value={title}
                  │
                  ▼
      Input Field Updates
```

This continuous synchronization is called **Two-Way Binding**.

---

# Key Takeaways

* Two-Way Binding keeps the input field and React state synchronized.
* `useState` stores the current input value.
* `onChange` updates the state whenever the user types.
* `value` displays the latest state inside the input field.
* `setTitle("")` clears both the state and the input field.
* The combination of `value` and `onChange` creates a controlled component, which is React's approach to two-way binding.

---

# Author

**Shubham Singh**

Learning React by understanding controlled components and two-way binding through practical examples.
