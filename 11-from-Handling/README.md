# React Form Handling (`onSubmit` Event)

This project demonstrates how to handle **form submission** in React using the `onSubmit` event and prevent the page from reloading with `event.preventDefault()`.

---

# Learning Objectives

After completing this project, you will understand:

* How to create a form in React.
* How the `onSubmit` event works.
* What the `event` object (`e`) is.
* Why `event.preventDefault()` is important.
* How to call a custom function when a form is submitted.

---

# Project Structure

```text
src/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Code Overview

## Creating the Form

```jsx
<form onSubmit={(e) => formhandler(e)}>
```

The `onSubmit` event is triggered whenever the user submits the form by:

* Clicking the **Submit** button.
* Pressing the **Enter** key inside an input field.

---

## The Event Object (`e`)

```jsx
const formhandler = (e) => {
```

The parameter `e` is called the **Event Object**.

It contains information about the event that occurred, such as:

* Which element triggered the event.
* Form details.
* Input values.
* Methods to control the event.

---

## Prevent Default Behaviour

```jsx
e.preventDefault();
```

By default, when a form is submitted, the browser:

* Sends the form data.
* Reloads the page.

`preventDefault()` stops this default browser behavior.

### Without `preventDefault()`

```
Click Submit
        ↓
Form Submitted
        ↓
Browser Reloads
        ↓
React State Resets
```

### With `preventDefault()`

```
Click Submit
        ↓
Form Submitted
        ↓
No Page Reload
        ↓
React Continues Running
```

---

## Custom Submit Function

```jsx
const formhandler = (e) => {
    e.preventDefault();
    console.log("formsubmitted");
};
```

This function:

1. Receives the event object.
2. Stops the page from reloading.
3. Prints a message in the browser console.

Output:

```
formsubmitted
```

---

## Calling the Function

```jsx
<form onSubmit={(e) => {
    formhandler(e);
}}>
```

When the form is submitted:

```
User Clicks Submit
          ↓
onSubmit Event
          ↓
formhandler(e)
          ↓
preventDefault()
          ↓
Console Output
```

---

# JSX Structure

```jsx
<div className="app-shell">

    <div className="form-card">

        <h1>Join our community</h1>

        <p>Submit your name for a quick welcome message.</p>

        <form>

            <input />

            <button>Submit</button>

        </form>

    </div>

</div>
```

---

# Components Used

## Input Field

```jsx
<input
    type="text"
    placeholder="Name"
/>
```

Used to enter the user's name.

---

## Submit Button

```jsx
<button type="submit">
    Submit
</button>
```

`type="submit"` tells React to submit the form when the button is clicked.

---

# Flow of Execution

```
Application Starts
        ↓
User Types Name
        ↓
User Clicks Submit
        ↓
onSubmit Event Fires
        ↓
formhandler() Executes
        ↓
preventDefault()
        ↓
Console Prints
"formsubmitted"
```

---

# Why Use `onSubmit` Instead of `onClick`?

Using `onSubmit` is recommended because it works for:

* Clicking the Submit button.
* Pressing the Enter key.
* Better accessibility.
* Standard HTML form behavior.

---

# Best Practice

Instead of writing:

```jsx
<form onSubmit={(e) => {
    formhandler(e);
}}>
```

You can directly pass the function:

```jsx
<form onSubmit={formhandler}>
```

React automatically passes the event object (`e`) to the function.

This approach is cleaner and easier to read.

---

# Key Takeaways

* `onSubmit` handles form submission.
* React automatically provides the event object (`e`).
* `event.preventDefault()` prevents the browser from reloading the page.
* `type="submit"` triggers the form's `onSubmit` event.
* A custom handler function keeps the code clean and reusable.
* Prefer `onSubmit={formhandler}` over wrapping it in an arrow function when no extra logic is needed.

---

# Console Output

```
formsubmitted
```

Every time the form is submitted, this message appears in the browser console.

---

# Author

**Shubham Singh**

Learning React by building simple projects and understanding form handling step by step.

