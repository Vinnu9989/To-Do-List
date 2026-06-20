# To-Do List

A simple, responsive to-do list web app for adding, completing, and removing tasks.

## Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Clean, responsive UI

## Tech Stack

- HTML5
- CSS3
- JavaScript (DOM manipulation, event handling)

## Project Structure

```
index.html    # page markup and structure
style.css     # styling
script.js     # task logic — add, complete, delete, render
```

## How It Works

`script.js` manages an in-memory list of tasks. User actions (adding a task, clicking a checkbox, clicking delete) trigger event handlers that update the task list and re-render the DOM to reflect the current state.

## Setup & Run

This is a static front-end project with no build step.

1. Clone the repo:
   ```bash
   git clone https://github.com/Vinnu9989/To-Do-List.git
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Notes

Task data currently lives in memory and resets on page reload (no `localStorage` or backend persistence is used). This project focuses on core DOM manipulation and event-driven UI logic.
