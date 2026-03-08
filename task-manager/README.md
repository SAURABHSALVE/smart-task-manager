# Smart Task Manager 🚀

A beautiful, responsive, and robust Task Management application built with **Angular**. This application helps users to elegantly track their daily goals and activities with advanced filtering, real-time updates, and local storage persistence.

## 🌟 Features

- **Create Tasks**: Quickly add tasks by typing and hitting enter or clicking the add button.
- **Mark Completion**: Cross off completed items with a satisfying custom-designed checkbox.
- **Filter Tasks**: Easily filter tasks by **All**, **Active**, and **Completed** statuses.
- **Delete Tasks**: Remove tasks you no longer need.
- **Data Persistence**: Uses the browser's Local Storage to ensure you never lose your tasks after a page refresh.
- **Modern UI/UX**: Designed with a clean, dark-themed, premium aesthetic including smooth CSS micro-animations, hover states, and responsive layout.

## 🛠️ Technology Stack

- **Framework**: Angular 18+ (Module-based architecture via `AppModule`)
- **Styling**: Pure CSS with Variables (`:root`) for easy theme management.
- **State Management**: RxJS (`BehaviorSubject` and `Observable`) for reactive data streams.
- **Storage**: Browser `localStorage` API.

## 📁 Architecture Overview

This project was carefully structured to ensure a clean separation of concerns:

```text
task-manager/src/app/
├── components/          # Contains all UI view components
│   ├── task-input/      # Handles user data entry and validation
│   ├── task-list/       # Subscribes to filtered tasks and renders them
│   ├── task-item/       # Represents a single task entity with its actions
│   └── task-filter/     # Dashboard controls for toggling view modes
│
├── services/            # Contains business logic
│   └── task.service.ts  # Singleton service managing state & local storage via RxJS
│
├── models/              # Interfaces and Types
│   └── task.model.ts    # Centralized TS types to ensure strict typing
│
├── app.component.ts     # The root scaffolding of the application
└── app.module.ts        # The centralized registry of the Angular application
```

## 🧠 How the State Works

The data flows through the application using **Reactive Programming (RxJS)**:
1. The **TaskService** acts as the single source of truth, storing private `BehaviorSubject`s for both the tasks array and the active filter.
2. The UI components subscribe to these as generic `Observable` streams.
3. Every time a user interacts with a component (e.g. completes a task), the component calls a method on the `TaskService`.
4. The service updates the private `BehaviorSubject`.
5. Every subscribed component automatically repaints with the latest data using the `| async` pipe in Angular templates.

## 🚀 Running the Project Locally

### Prerequisites
Make sure you have Node.js and Angular CLI installed.
- **Node.js**: v18 or later
- **Angular CLI**: Install globally via `npm install -g @angular/cli`

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SAURABHSALVE/smart-task-manager.git
   cd smart-task-manager/task-manager
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Serve the application:**
   ```bash
   npm start
   ```
   Or explicitly using the Angular CLI:
   ```bash
   ng serve --open
   ```

The application will automatically open in your default browser at `http://localhost:4200/`.

## 🎨 Theme Customization
If you wish to modify the color scheme, open `src/styles.css` and tweak the CSS variables found under `:root`:

```css
:root {
  --primary: #4F46E5;        /* Change the main theme color */
  --bg-color: #0F172A;       /* Change background color */
  /* ...other variables */
}
```

---
*Happy tasking!*
