Live Demo - https://todo-app-react-createdby-kanak-9jgyafxtf-kanak-baris-projects.vercel.app/
# Task Master - Advanced To-Do List Application

A modern, feature-rich To-Do List application built with React.js featuring a beautiful UI and robust functionality.

## 🚀 Features

- ✅ **Add Tasks** - Create new tasks with a clean input interface
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- ✓ **Mark Complete** - Check off completed tasks with custom checkboxes
- ✏️ **Edit Tasks** - Modify existing tasks inline
- 💾 **LocalStorage Persistence** - All tasks are saved automatically and persist after browser refresh
- 🔍 **Filter System** - View All, Completed, or Pending tasks
- 📊 **Statistics Dashboard** - Real-time overview of your task counts
- 🎨 **Modern UI Design** - Beautiful gradient background with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Technical Stack

- **React 18** - Latest React version with functional components
- **React Hooks** - useState and useEffect for state management
- **CSS3** - Modern styling with CSS variables and animations
- **LocalStorage API** - Client-side data persistence

## 📦 Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd todo-app-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

## 🏗️ Project Structure

```
todo-app-react/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js       # App header component
│   │   ├── Header.css
│   │   ├── TaskInput.js    # Task input form
│   │   ├── TaskInput.css
│   │   ├── FilterButtons.js # Filter controls
│   │   ├── FilterButtons.css
│   │   ├── Statistics.js   # Stats dashboard
│   │   ├── Statistics.css
│   │   ├── TaskList.js     # Task list container
│   │   ├── TaskList.css
│   │   ├── TaskItem.js     # Individual task item
│   │   └── TaskItem.css
│   ├── App.js              # Main app component
│   ├── App.css
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## 💡 Component Architecture

### App.js (Main Component)
- Manages global state (tasks, filter)
- Handles localStorage operations
- Provides task management functions to child components

### Header
- Displays app title and tagline
- Pure presentational component

### TaskInput
- Input field for new tasks
- Add button with keyboard support (Enter key)
- Controlled component with local state

### FilterButtons
- Three filter options: All, Pending, Completed
- Active state styling
- Updates parent component's filter state

### Statistics
- Displays task counts (Total, Pending, Done)
- Real-time updates based on task data

### TaskList
- Renders list of filtered tasks
- Shows empty state messages
- Maps through tasks array

### TaskItem
- Individual task component
- Edit mode with inline input
- Checkbox for completion toggle
- Edit and delete action buttons
- Keyboard shortcuts (Enter to save, Escape to cancel)

## 🎨 Design Features

- **Custom Typography**: Playfair Display for headings, Work Sans for body text
- **Color Scheme**: Purple gradient background with accent colors
- **Animations**: Fade-in, slide-in, and scale effects
- **Smooth Transitions**: All interactive elements have hover states
- **Visual Feedback**: Different states for completed, editing, and normal tasks
- **Box Shadows**: Layered shadows for depth
- **Border Radius**: Rounded corners throughout
- **Responsive Grid**: Adapts to different screen sizes

## 🔑 Key Features Explained

### LocalStorage Persistence
```javascript
// Save to localStorage
useEffect(() => {
  localStorage.setItem('todoTasks', JSON.stringify(tasks));
}, [tasks]);

// Load from localStorage
useEffect(() => {
  const savedTasks = localStorage.getItem('todoTasks');
  if (savedTasks) setTasks(JSON.parse(savedTasks));
}, []);
```

### Filter System
- **All**: Shows all tasks
- **Pending**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

### Task Management
- Each task has a unique ID (timestamp-based)
- Tasks store text, completion status, and creation timestamp
- Map function efficiently renders task list

## 🎯 Usage

1. **Add a Task**: Type in the input field and press Enter or click "Add Task"
2. **Complete a Task**: Click the checkbox next to the task
3. **Edit a Task**: Click the edit (pencil) icon, modify text, then save or cancel
4. **Delete a Task**: Click the delete (trash) icon
5. **Filter Tasks**: Use the All/Pending/Completed buttons to filter your view
6. **View Statistics**: Check the stats cards to see your task overview

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 Future Enhancements

- Task priorities (high, medium, low)
- Due dates and reminders
- Task categories/tags
- Drag and drop reordering
- Dark/light theme toggle
- Export tasks to CSV/JSON
- Search functionality
- Bulk operations

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Built with ❤️ using React.js**
