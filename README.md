# to-do-react-app

## Creator/Student

Tracy Meade

## Overview

This project is a basic demonstration of the React JavaScript Framework. It provides a simplistic "To-do" list functionality, with the ability to add to-do items, mark them as completed, and delete them. The application has a static navigation bar at the top with three different view selections:

- Todo list view
  - This view has a small form at the top that allows the user to add new items to the to-do list. It has an input text field and an 'Add' button. As new to-do items are created, they are added to the to-do list.
  - The center area is a list of to-do items. Each to-do item has a check-box that is used to mark the item as completed or not-completed, and a delete button with 'Trash' can item.
  - The bottom area is a three button panel that allows the user to choose what type of to-do items to display in the list:
    - All - Show all items, regardless of their status.
    - Active - Show only items that are active and have not been marked as completed using the item's check-box.
    - Completed - Show only items that have been marked as completed using the item's check-box.
- About
  - This view shows a page that has information regarding the application and its current version.
- Contact
  - Provides a contact form to submit a message to the application creator. When the submit button is clicked, the form data is submitted to a Formspree.io account. A simple modal dialog will display the result of the submission, success or failure, will be displayed.
  
## Implementation and Usage

This project is run as a back-end server using node.js and the React JavaScript framework. THe application was generated using the Vite build tool. The user interface components are implemented using React JSX.

The user interacts with the application using a standard web-browser. The server runs on port 5173 by default.

To build the project from the code repository:

- npm run build
  
To start and run the application:

- npm run dev

Acces the application by navigating to localhost:5173 in a web-browser.

The to-do list items and the view state are persisted in an array at the top level of the React App. If the page is refreshed the App will be reloaded, the array of to-do items will be reset to empty, and the view state will revert to "All". 

## Ideas for Future Enhancement and Improvement

- Allow the user to log-in and store the to-do list items to the server and retreive them on subsequent logins.
- Add the ability to set a required completion date for each to-do item, and visual indication when to-do items are overdue.
- Add a 'recycle' bin to allow for the restoration of deleted to-do items.
- Allow the user to make to-do items recurring at different time intervals such as daily, weekly, monthly, etc.
