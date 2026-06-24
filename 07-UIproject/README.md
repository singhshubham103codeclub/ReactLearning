# 07-UIproject

This project is a simple React UI page that shows a landing section for a customer segmentation design.

## What this project does

- Renders a section with a top navigation bar.
- Shows a left side with headline text and an arrow icon.
- Shows a right side with a horizontal list of card items.
- Each card displays an image, a number, a short description, and buttons.

## Why this code is useful

This project is useful for learning how to:
- organize a page with multiple components,
- pass data from a parent component to children using props,
- render a list of items dynamically with `.map()`,
- build a layout that combines text, buttons, and image cards.

## Main files and flow

2. `src/App.jsx`
   - The root component.
   - Creates a `user` array with image URLs and tags.
   - Passes the `user` array as a prop to `Section1`.

3. `src/component/sectoin1/sectoin1.jsx`
   - Receives the `users` prop from `App`.
   - Renders the main section with `Navbar` and `Page1Content`.

4. `src/component/sectoin1/Navbar.jsx`
   - Shows the top area with a title and a button.

5. `src/component/sectoin1/page1contwnt.jsx`
   - Splits the page into left and right parts.
   - Renders `Leftcontent` and `Rightcontent`.

6. `src/component/sectoin1/Leftcontent.jsx`
   - Displays the hero text and arrow graphic.
   - Uses `HeroText` and `Arrow` components.

7. `src/component/sectoin1/Rightcontent.jsx`
   - Receives `users` from `Page1Content`.
   - Loops over the array and creates one `RightCard` per user.

8. `src/component/sectoin1/Rightcard.jsx`
   - Renders each image card.
   - Passes the card index and tag to `RightCardContent`.

9. `src/component/sectoin1/rightcardcontent.jsx`
   - Shows the card overlay with number, description, and buttons.

## Data flow

- `App` defines the data and sends it down as a prop called `users`.
- `Section1` forwards `users` to `Page1Content`.
- `Page1Content` sends the same `users` list to `Rightcontent`.
- `Rightcontent` uses `users.map()` to render a card for each item.
- Each card receives its own image, tag text, and index.

## How to understand the code

- The project is built from small components.
- `App` is the parent, and components under `component/sectoin1` are children.
- Props are the way the parent component shares data with children.
- The right side demonstrates how to render repeating UI from an array.

## Notes

- The project uses plain React components.
- Styling is done with utility classes in the component markup and the project CSS.
- This is a good example of component structure and simple props-based UI.
