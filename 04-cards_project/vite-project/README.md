# Job Cards UI - React Project

## 📖 Project Overview

This project is a simple Job Listing UI built using React.

The application:

* Stores job data inside a separate file.
* Uses the `map()` method to display multiple job cards.
* Passes data from parent component to child component using props.
* Displays company information, skills, salary, and location.

---

# 📂 Project Structure

```text
src/
│
├── components/
│   ├── Card.jsx
│   └── User.jsx
│
├── data/
│   └── cardsData.js
│
├── App.jsx
│
└── index.css
```

---

# 🚀 How the Application Works

The application follows this flow:

```text
cardsData.js
      │
      ▼
    App.jsx
      │
      ▼
  jobs.map()
      │
      ▼
   Card.jsx
      │
      ▼
 Job Card UI
```

---

# 1️⃣ Job Data File

File:

```text
src/data/cardsData.js
```

This file contains all job information.

Example:

```javascript
{
  id: 1,
  company: "Google",
  title: "Senior Frontend Engineer",
  salary: "$140/hr"
}
```

The data is stored inside an array called `jobs`.

```javascript
export const jobs = [...]
```

This allows other files to use the data.

---

# 2️⃣ Importing Data into App Component

File:

```text
src/App.jsx
```

Import the jobs array:

```javascript
import { jobs } from './data/cardsData.js'
```

Now App component has access to all job data.

---

# 3️⃣ Rendering Multiple Cards

Inside App component:

```jsx
{
  jobs.map(job => (
    <Card key={job.id} {...job} />
  ))
}
```

### What is map()?

`map()` loops through every item in an array.

Example:

```javascript
const numbers = [1, 2, 3]

numbers.map(num => {
  console.log(num)
})
```

Output:

```text
1
2
3
```

In our project:

```javascript
jobs.map()
```

loops through every job object.

---

# 4️⃣ Passing Data Using Props

This line:

```jsx
<Card key={job.id} {...job} />
```

passes all job properties to Card component.

Example:

```javascript
{
  company: "Google",
  title: "Frontend Engineer"
}
```

becomes:

```jsx
<Card
  company="Google"
  title="Frontend Engineer"
/>
```

This is called the **Spread Operator**.

```jsx
{...job}
```

It automatically passes all properties.

---

# 5️⃣ Receiving Props in Card Component

File:

```text
src/components/Card.jsx
```

Current code:

```javascript
const Card = (job) => {
```

Here `job` contains all props.

Example:

```javascript
job.company
job.title
job.salary
```

---

# 6️⃣ Displaying Dynamic Data

Example:

```jsx
<h3>{job.company}</h3>
```

Output:

```text
Google
```

Example:

```jsx
<h2>{job.title}</h2>
```

Output:

```text
Senior Frontend Engineer
```

React automatically inserts values inside JSX using:

```jsx
{}
```

---

# 7️⃣ Displaying Skills

Current code:

```jsx
<span>{job.skills[0]}</span>
<span>{job.skills[1]}</span>
<span>{job.skills[2]}</span>
```

Example output:

```text
React
TypeScript
CSS
```

The values come from:

```javascript
skills: ["React", "TypeScript", "CSS"]
```

---

# 8️⃣ Displaying Job Type and Level

```jsx
<h4>{job.jobType}</h4>
<h4>{job.level}</h4>
```

Output:

```text
Full Time
Senior
```

---

# 9️⃣ Displaying Salary and Location

```jsx
<h3>{job.salary}</h3>
<p>{job.location}</p>
```

Output:

```text
$140/hr
Bengaluru, India
```

---

# 🎨 CSS Flow

File:

```text
src/index.css
```

This file controls styling for:

* Page layout
* Card design
* Buttons
* Skills tags
* Job information

---

## Parent Container

```css
.parent {
  display: flex;
  flex-wrap: wrap;
}
```

Purpose:

* Shows multiple cards.
* Moves cards to next row when needed.

---

## Card Styling

```css
.card {
  width: 300px;
  height: 400px;
}
```

Purpose:

* Creates job card layout.

---

## Hover Effects

```css
button:hover {
  transform: scale(1.05);
}
```

Purpose:

* Adds smooth animation when user hovers.

---

# 🔑 Important React Concepts Used

## Components

```jsx
<App />
<Card />
```

Components help split UI into reusable parts.

---

## Props

```jsx
<Card {...job} />
```

Props pass data from parent to child.

---

## map()

```jsx
jobs.map()
```

Used to render multiple cards dynamically.

---

## JSX

```jsx
<h2>{job.title}</h2>
```

Allows JavaScript inside HTML-like syntax.

---

## Keys

```jsx
key={job.id}
```

React uses keys to identify unique elements.

---

# 📊 Example Flow

Step 1:

```javascript
jobs = [
  {
    company: "Google"
  }
]
```

↓

Step 2:

```jsx
jobs.map()
```

↓

Step 3:

```jsx
<Card company="Google" />
```

↓

Step 4:

```jsx
<h3>{job.company}</h3>
```

↓

Step 5:

```text
Google
```

Displayed on screen.

---

# 🛠 Technologies Used

* React
* JavaScript (ES6)
* JSX
* CSS
* Lucide React Icons

---

# 📦 Install Dependencies

```bash
npm install
```

Install Lucide React:

```bash
npm install lucide-react
```

---

# ▶️ Run Project

Start development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

---

# 🎯 What You Learn From This Project

After completing this project, you will understand:

✅ React Components

✅ Props

✅ map() Function

✅ Dynamic Rendering

✅ JSX

✅ CSS Styling

✅ Reusable UI Components

✅ Project Structure

This project is a great beginner example of how React renders data dynamically from an array and displays it through reusable components.
