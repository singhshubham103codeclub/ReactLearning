# React CSS Modules Demo

## 📌 Project Overview

This project demonstrates how to use **CSS Modules** in React to create reusable and scoped component styles.

The application contains:

* A **Header** component with navigation buttons.
* A reusable **Button** component.
* Styling using **CSS Modules** to avoid class name conflicts.

---

## 📂 Project Structure

```text
src/
│
├── App.jsx
│
└── component/
    └── Header/
        ├── header.jsx
        ├── headr.module.css
        ├── button.jsx
        └── button.module.css
```

---

## 🚀 Application Flow

### 1. App Component

`App.jsx` is the root component.

```jsx
<Header />
<Button />
```

It imports and renders:

* Header Component
* Button Component

---

### 2. Header Component

File:

```text
component/Header/header.jsx
```

Responsibilities:

* Displays website title.
* Displays a short description.
* Shows navigation buttons:

  * Home
  * About
  * Contact

Example:

```jsx
<header className={styles.header}>
```

The styles are imported from:

```jsx
import styles from './headr.module.css';
```

---

### 3. Button Component

File:

```text
component/Header/button.jsx
```

Responsibilities:

* Displays a centered "Get Started" button.
* Uses its own CSS Module for styling.

Example:

```jsx
<button className={styles.button}>
  Get Started
</button>
```

---

## 🎨 What is CSS Modules?

CSS Modules allow CSS classes to be scoped locally to a component.

Instead of using global CSS:

```css
.button {
  background: blue;
}
```

You import styles as an object:

```jsx
import styles from './button.module.css';
```

And use them like:

```jsx
<button className={styles.button}>
```

React automatically generates a unique class name such as:

```css
button_button__x7h2k
```

This prevents style conflicts between components.

---

## ✅ Benefits of CSS Modules

### 1. Scoped Styles

Styles only affect the component where they are imported.

```jsx
styles.button
```

won't interfere with another button component.

---

### 2. No Naming Conflicts

You can use the same class names in different files.

Example:

```css
button.module.css
header.module.css
```

Both can contain:

```css
.button {}
```

without causing conflicts.

---

### 3. Better Maintainability

Each component manages its own styles.

```text
Header
 ├─ header.jsx
 └─ headr.module.css

Button
 ├─ button.jsx
 └─ button.module.css
```

---

## 🔄 Code Execution Flow

```text
App.jsx
│
├── Header Component
│     ├── Import CSS Module
│     ├── Render Title
│     ├── Render Tagline
│     └── Render Navigation Buttons
│
└── Button Component
      ├── Import CSS Module
      └── Render Get Started Button
```

---

## 🛠 Technologies Used

* React
* JavaScript (ES6+)
* CSS Modules
* JSX

---

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📖 Key Learning

After completing this project, you will understand:

* React Functional Components
* Component Reusability
* CSS Modules
* Local Scoped Styling
* Importing CSS in React
* Basic React Project Structure

---

### Output

* Responsive Header Section
* Navigation Buttons
* Reusable Get Started Button
* Clean and Maintainable CSS using CSS Modules

```
```
