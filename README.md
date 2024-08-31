# CLI Task Tracker

# https://roadmap.sh/projects/task-tracker

## Overview

The **CLI Task Tracker** is a command-line interface application for managing tasks. This tool allows you to add, update, delete, and manage tasks directly from your terminal. Tasks are stored in a JSON file, making it easy to track what you need to do, what you are currently working on, and what you have completed.

## Features

- **Add New Tasks**: Quickly add tasks with a simple command.
- **Update Tasks**: Modify existing task descriptions.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Mark Tasks as In Progress**: Track tasks that are currently being worked on.
- **Mark Tasks as Done**: Easily mark tasks as completed.
- **List Tasks**: View all tasks, or filter by status (done, not done, in progress).

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cli-task-tracker.git
cd cli-task-tracker
```

### 2. Install Dependencies

Ensure you have Node.js installed (version 14 or higher). Then, install the required packages:

```bash
npm install
```

### 3. Make the Script Executable (Optional)

If you want to run the script directly without typing `node` every time:

```bash
chmod +x task-tracker.js
```

## Usage

You can run the task tracker with the following commands:

### Add a Task

```bash
node task-tracker.js add "Your task description"
```

### Update a Task

```bash
node task-tracker.js update <task_id> "Updated task description"
```

### Delete a Task

```bash
node task-tracker.js delete <task_id>
```

### Mark a Task as In Progress

```bash
node task-tracker.js inprogress <task_id>
```

### Mark a Task as Done

```bash
node task-tracker.js done <task_id>
```

### List All Tasks

```bash
node task-tracker.js list
```

### List All Done Tasks

```bash
node task-tracker.js list-done
```

### List All Not Done Tasks

```bash
node task-tracker.js list-not-done
```

### List All In Progress Tasks

```bash
node task-tracker.js list-inprogress
```

## Example

### Adding and Listing Tasks

```bash
node task-tracker.js add "Complete the project documentation"
node task-tracker.js list
```

Output:

```
1. [not done] Complete the project documentation (ID: 1)
```

### Marking a Task as In Progress

```bash
node task-tracker.js inprogress 1
```

Output:

```
Task with ID 1 marked as in progress.
```

### Marking a Task as Done

```bash
node task-tracker.js done 1
```

Output:

```
Task with ID 1 marked as done.
```

### Listing Tasks by Status

```bash
node task-tracker.js list-done
```

Output:

```
1. [done] Complete the project documentation (ID: 1)
```

## How It Works

- **Task Storage**: Tasks are stored in a `tasks.json` file in the root directory. This file is automatically created when you add your first task.
- **Commands**: The script uses the `commander` library to handle different commands (e.g., `add`, `delete`, `list`).
- **Task Statuses**: Tasks can have three statuses: `not done`, `in progress`, and `done`.

## Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request


## Contact

For any questions or feedback, please contact [twintailsofmobius@gmail.com].

