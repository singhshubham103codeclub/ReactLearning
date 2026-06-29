# 💾 React Local Storage Demo

A simple React project demonstrating how to use the **Browser Local Storage API**. This project covers storing, retrieving, updating, removing, and clearing data from localStorage, including how to save JavaScript objects using `JSON.stringify()` and retrieve them using `JSON.parse()`.

---

# 📚 What You'll Learn

This project helps beginners understand:

* What Local Storage is
* How to save data
* How to retrieve data
* How to remove specific data
* How to clear all stored data
* How to store JavaScript objects
* Why `JSON.stringify()` and `JSON.parse()` are required

---

# 🚀 Technologies Used

* React
* JavaScript (ES6)
* Browser Local Storage API

---

# 📂 Project Structure

```text
src/
│── App.jsx
│── main.jsx
```

---

# 🔑 Local Storage Methods Used

## 1. Store a String

```javascript
localStorage.setItem("user", "shubh");
```

Stores a value in the browser using a key.

**Output**

```
Key: user
Value: shubh
```

---

## 2. Retrieve Stored Data

```javascript
const savedUser = localStorage.getItem("user");
console.log(savedUser);
```

Reads the value associated with the given key.

**Console Output**

```
shubh
```

---

## 3. Remove a Single Item

```javascript
localStorage.removeItem("user");
```

Deletes only the specified key from localStorage.

---

## 4. Clear All Data

```javascript
localStorage.clear();
```

Removes every item stored in localStorage.

> ⚠️ Use this carefully because it deletes all saved data for the current website.

---

## 5. Store a JavaScript Object

JavaScript objects cannot be stored directly.

Create an object:

```javascript
const userObject = {
  username: "shubh",
  age: 20,
  city: "Ayodhya"
};
```

Convert it into a JSON string:

```javascript
localStorage.setItem("user", JSON.stringify(userObject));
```

---

## 6. Read the Object

Retrieve the stored JSON string:

```javascript
const savedUserJson = localStorage.getItem("user");
```

Convert it back into a JavaScript object:

```javascript
const parsedUser = JSON.parse(savedUserJson);
console.log(parsedUser);
```

**Console Output**

```javascript
{
  username: "shubh",
  age: 20,
  city: "Ayodhya"
}
```

---

# 🔄 Flow of the Project

```text
Create Data
      │
      ▼
Store in Local Storage
      │
      ▼
Retrieve Data
      │
      ▼
Convert JSON to Object
      │
      ▼
Use the Data
```

---

# 📖 Important Concepts

## localStorage.setItem()

Stores data using a key-value pair.

```javascript
localStorage.setItem(key, value);
```

---

## localStorage.getItem()

Returns the stored value.

```javascript
localStorage.getItem(key);
```

---

## localStorage.removeItem()

Removes a specific key.

```javascript
localStorage.removeItem(key);
```

---

## localStorage.clear()

Deletes every key stored in localStorage.

```javascript
localStorage.clear();
```

---

## JSON.stringify()

Converts a JavaScript object into a JSON string so it can be stored.

```javascript
JSON.stringify(object);
```

---

## JSON.parse()

Converts the JSON string back into a JavaScript object.

```javascript
JSON.parse(jsonString);
```

---

# 💡 Why Use Local Storage?

Local Storage is useful for storing data that should remain available even after the browser is refreshed or reopened.

Common use cases include:

* User preferences
* Theme settings (Dark/Light Mode)
* Shopping cart data
* Login information (non-sensitive)
* Notes or To-Do applications
* Recently viewed items

---

# ⚠️ Limitations

* Stores only string values.
* Data is not encrypted.
* Do not store passwords or sensitive information.
* Storage limit is typically around **5–10 MB**, depending on the browser.

---

# 🎯 Learning Outcomes

After completing this project, you will understand:

* Browser Local Storage
* CRUD operations with localStorage
* Working with JSON data
* Object serialization and deserialization
* React and browser APIs
* Data persistence in web applications

---

# 👨‍💻 Author

**Shubham Singh**

This project was created to learn and demonstrate the basics of the Browser Local Storage API in React.
