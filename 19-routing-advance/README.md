# React Router Demo Project

A simple React application demonstrating the basic features of **React Router DOM**, including:

- Basic Routing
- Nested Routing
- Dynamic Routing
- 404 Page
- Shared Layout (Navbar & Footer)

---

# Project Structure

```
src/
│
├── component/
│   ├── Navbar.jsx
│   ├── Navbar2.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── home.jsx
│   ├── about.jsx
│   ├── contact.jsx
│   ├── product.jsx
│   ├── Mens.jsx
│   ├── womens.jsx
│   ├── courses.jsx
│   ├── coursedetail.jsx
│   └── notfound.jsx
│
├── App.jsx
└── main.jsx
```

---

# Technologies Used

- React
- React Router DOM
- Tailwind CSS

---

# Features

## 1. Shared Layout

`App.jsx` contains the common layout of the application.

It renders:

- Navbar
- Navbar2
- Routes
- Footer

Because Navbar and Footer are outside `<Routes>`, they appear on every page.

```jsx
<Navbar />
<Navbar2 />

<Routes>
   ...
</Routes>

<Footer />
```

---

## 2. Basic Routing

Different URLs render different pages.

Example:

| URL | Component |
|------|-----------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |

Example:

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
```

---

## 3. Dynamic Routing

The application uses URL parameters.

Route:

```jsx
<Route
    path="/course/:courseId"
    element={<Coursedetail />}
/>
```

Example URLs:

```
/course/react
/course/javascript
/course/nodejs
```

Inside the page:

```jsx
const params = useParams();
```

Output:

```
react COURSE DETAILS
```

---

## 4. Nested Routing

Product page contains child pages.

Parent Route

```jsx
<Route path="/product" element={<Product />}>
    <Route path="Mens" element={<Mens />} />
    <Route path="Women" element={<Women />} />
</Route>
```

Product component:

```jsx
<Link to="/product/Mens">Men</Link>
<Link to="/product/Women">Women</Link>

<Outlet />
```

`<Outlet />` renders the selected child component.

---

## 5. 404 Page

Unknown URLs display the Not Found page.

```jsx
<Route
    path="*"
    element={<Notfound />}
/>
```

Example:

```
/abc
/random
```

Output:

```
404 Page Notfound
```

---

# Components

## Navbar

Displays navigation links.

Current implementation uses:

```jsx
<a href="/">Home</a>
```

For React Router applications, it is recommended to use:

```jsx
<Link to="/">Home</Link>
```

This avoids full page reloads.

---

## Footer

Shared footer displayed at the bottom of every page.

Current component:

```jsx
const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}
```

---

## Home

Landing page of the application.

Output:

```
Home page
```

---

## About

Displays information about the application.

Example of programmatic navigation:

```jsx
const navigate = useNavigate();

navigate("/");
```

---

## Contact

Displays contact page.

---

## Course

Displays the list of courses.

---

## Course Detail

Uses:

```jsx
useParams()
```

to read the course ID from the URL.

---

## Product

Acts as a parent component.

Uses:

- Link
- Outlet

to render nested routes.

---

## Mens

Displays men's collection.

---

## Women

Displays women's collection.

---

## NotFound

Displayed when no route matches.

---

# Route Diagram

```
/

├── About
├── Contact
├── Course
│      └── /course/:courseId
│
└── Product
       ├── Mens
       └── Women
```

---

# React Router Hooks Used

## useParams()

Reads parameters from the URL.

Example:

```jsx
const params = useParams();
```

URL

```
/course/react
```

Output

```js
params.courseId
```

Result

```
react
```

---

## useNavigate()

Used for navigation with JavaScript.

Example

```jsx
const navigate = useNavigate();

navigate("/");
```

---

# React Router Components Used

## Routes

Container for all routes.

```jsx
<Routes>
```

---

## Route

Defines a page.

```jsx
<Route
    path="/about"
    element={<About />}
/>
```

---

## Link

Creates navigation without refreshing the page.

```jsx
<Link to="/about">
    About
</Link>
```

---

## Outlet

Displays nested child routes.

```jsx
<Outlet />
```

---

# How to Run

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open browser

```
http://localhost:5173
```

---

# Example URLs

Home

```
/
```

About

```
/about
```

Contact

```
/contact
```

Course

```
/course
```

Course Details

```
/course/react
```

Product

```
/product
```

Men Collection

```
/product/Mens
```

Women Collection

```
/product/Women
```

Unknown Route

```
/anything
```

---

# Improvements

Some improvements that can be made:

- Replace `<a>` tags with `<Link>`.
- Use consistent lowercase route names (e.g., `/product`, `/about`).
- Rename `women` component to `Women`.
- Rename `footer` component to `Footer`.
- Remove unused imports.
- Add active navigation using `NavLink`.
- Make the footer responsive.
- Add a default page inside the Product route.

---

# Learning Outcomes

After completing this project, you will understand:

- React Router setup
- Route configuration
- Nested Routes
- Dynamic Routes
- URL Parameters
- Outlet
- Link
- useNavigate()
- useParams()
- Shared Layout
- 404 Routing

This project is a good beginner example for learning the core concepts of **React Router DOM**.