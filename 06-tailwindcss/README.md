# Tailwind CSS Setup with React + Vite

## 📖 Project Overview

This project demonstrates how to set up and use **Tailwind CSS v4** in a React + Vite application.

The application includes:

* React Components
* Tailwind CSS Utility Classes
* Responsive Card Layout
* Modern UI Design

---

# 🚀 Getting Started

## Step 1: Create a React + Vite Project

```bash
npm create vite@latest my-app
cd my-app
npm install
```

---

## Step 2: Install Tailwind CSS

Install Tailwind CSS and the Vite plugin.

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Step 3: Configure Vite

Open:

```text
vite.config.js
```

Import Tailwind plugin:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## Step 4: Import Tailwind CSS

Open your global CSS file:

```text
src/index.css
```

Add:

```css
@import "tailwindcss";
```

Example:

```css
@import "tailwindcss";

html,
body,
#root {
  height: 100%;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}
```

---

## Step 5: Start Development Server

Run:

```bash
npm run dev
```

Vite will start the development server.

Example:

```text
Local: http://localhost:5173/
```

---

# 📂 Project Structure

```text
src/
│
├── components/
│   └── TailwindDemo.jsx
│
├── App.jsx
├── index.css
│
└── main.jsx
```

---

# 🧠 Understanding the Code Flow

## App Component

File:

```text
src/App.jsx
```

Purpose:

* Root component of the application.
* Imports and renders TailwindDemo component.

```jsx
import TailwindDemo from './components/TailwindDemo'

export default function App() {
  return <TailwindDemo />
}
```

Flow:

```text
App.jsx
   │
   ▼
TailwindDemo.jsx
```

---

## TailwindDemo Component

File:

```text
src/components/TailwindDemo.jsx
```

This component:

* Displays page heading.
* Shows description text.
* Renders a list of cards using dummy data.
* Demonstrates Tailwind utility classes.

---

## Dummy Data

```jsx
const cards = [
  {
    id: 1,
    title: 'Design System',
    desc: 'Reusable components and tokens.'
  }
]
```

Each object represents one card.

---

## Rendering Cards

Cards are rendered using JavaScript's map() function.

```jsx
{
  cards.map(card => (
    <article key={card.id}>
      ...
    </article>
  ))
}
```

Flow:

```text
cards array
    │
    ▼
map()
    │
    ▼
Card UI Generated
```

---

# 🎨 What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework.

Instead of writing custom CSS:

```css
.button {
  background: blue;
  padding: 10px;
}
```

You directly use utility classes:

```html
<button class="bg-blue-600 px-4 py-2">
```

---

# 📚 Common Tailwind Classes Used

### Layout

```html
flex
grid
items-center
justify-between
```

---

### Spacing

```html
p-6
mt-8
gap-6
```

---

### Colors

```html
bg-white
bg-gray-50
text-gray-800
```

---

### Typography

```html
text-3xl
font-bold
font-extrabold
```

---

### Border Radius

```html
rounded
rounded-lg
rounded-md
```

---

### Shadows

```html
shadow
shadow-sm
shadow-md
```

---

### Hover Effects

```html
hover:bg-blue-700
hover:shadow-md
```

---

# 🔄 Application Flow Diagram

```text
User Opens App
      │
      ▼
App.jsx
      │
      ▼
TailwindDemo.jsx
      │
      ▼
Cards Data Loaded
      │
      ▼
map() Function
      │
      ▼
Cards Rendered
      │
      ▼
Styled Using Tailwind Classes
```

---

# 🛠 Technologies Used

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS v4

---

# ▶️ Available Commands

Install Dependencies:

```bash
npm install
```

Start Development Server:

```bash
npm run dev
```

Build Project:

```bash
npm run build
```

Preview Production Build:

```bash
npm run preview
```

---

# 🎯 Learning Outcomes

After completing this project, you will understand:

* React Component Structure
* Tailwind CSS Setup
* Utility-First Styling
* Responsive Grid Layouts
* Dynamic Rendering with map()
* React + Vite Development Workflow

---

## Final Output

✔ Responsive Layout

✔ Modern Card Design

✔ Tailwind Utility Classes

✔ React Component-Based Architecture

✔ Fast Development with Vite
