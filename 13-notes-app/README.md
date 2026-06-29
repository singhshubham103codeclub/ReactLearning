# 📝 React Notes App

A simple Notes Application built using **React** and **useState Hook**. Users can add notes with a title and description, view all notes, and delete any note.

---

## 🚀 Features

* ➕ Add a new note
* 📝 Enter a title and description
* 📋 Display all saved notes
* ❌ Delete any note
* 🎨 Responsive UI using Tailwind CSS
* ⚛️ Built with React Functional Components and Hooks

---

## 📂 Project Structure

```
src/
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite

---

## 📸 How It Works

### Step 1: Enter Note Details

Fill in:

* Note Title
* Note Description

Click the **Add Note** button.

---

### Step 2: Save Note

When the form is submitted:

* Default page refresh is prevented.
* A new note object is created.
* The note is added to the existing notes array.
* Input fields are cleared.

---

### Step 3: Display Notes

All notes are displayed below the form.

Each note shows:

* Note Number
* Title
* Description
* Delete Button

---

### Step 4: Delete Note

Click the **Delete** button to remove a note from the list.

---

## 🧠 React Concepts Used

### useState

Three state variables are used:

```javascript
const [title, setTitle] = useState("");
const [detailed, setDetailed] = useState("");
const [task, setTask] = useState([]);
```

* **title** → Stores note title
* **detailed** → Stores note description
* **task** → Stores all notes

---

### Event Handling

The project uses:

* `onChange`
* `onSubmit`
* `onClick`

to handle user interactions.

---

### Array Operations

#### Add Note

```javascript
const copytask = [...task];
copytask.push({ title, detailed });
setTask(copytask);
```

#### Delete Note

```javascript
copytask.splice(key, 1);
setTask(copytask);
```

---

## ▶️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 💡 Future Improvements

* Edit existing notes
* Search notes
* Local Storage support
* Dark/Light Theme
* Categories for notes
* Date & Time for each note
* Responsive animations

---

## ⚠️ Note

Currently, notes are stored only in React state. Refreshing the page will remove all notes. To persist data, Local Storage or a backend database can be added.

---

## 📚 Learning Outcomes

This project helps beginners understand:

* React Functional Components
* React Hooks (`useState`)
* Controlled Components
* Form Handling
* Event Handling
* Rendering Lists with `map()`
* State Management
* Updating Arrays in React
* Deleting Items from State
* Tailwind CSS Basics

---

## 👨‍💻 Author

**Shubham Singh**

Built as a beginner React project to practice state management, forms, and CRUD operations.
