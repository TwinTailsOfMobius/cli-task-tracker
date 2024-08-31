#!/usr/bin/env node

console.log("Node.js path:", process.execPath);

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();
const tasksFilePath = path.join(__dirname, 'tasks.json');

// Load tasks from JSON file or create the file if it doesn't exist
function loadTasks() {
    return fs.existsSync(tasksFilePath)
        ? fs.readJsonSync(tasksFilePath)
        : [];
}

// Save tasks to JSON file
function saveTasks(tasks) {
    fs.writeJsonSync(tasksFilePath, tasks, { spaces: 2 });
}

// List all tasks
function listTasks(filter = null) {
    const tasks = loadTasks();
    let filteredTasks = tasks;

    if (filter) {
        filteredTasks = tasks.filter(filter);
    }

    if (filteredTasks.length === 0) {
        console.log('No tasks found.');
    } else {
        filteredTasks.forEach((task, index) => {
            console.log(
                `${index + 1}. [${task.status}] ${task.description} (ID: ${task.id})`
            );
        });
    }
}

// Add a new task
program
    .command('add <description>')
    .description('Add a new task')
    .action((description) => {
        const tasks = loadTasks();
        const newTask = {
            id: tasks.length + 1,
            description,
            status: 'not done',
        };
        tasks.push(newTask);
        saveTasks(tasks);
        console.log(`Task added: ${description}`);
    });

// Update an existing task
program
    .command('update <id> <description>')
    .description('Update an existing task')
    .action((id, description) => {
        const tasks = loadTasks();
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
        if (taskIndex > -1) {
            tasks[taskIndex].description = description;
            saveTasks(tasks);
            console.log(`Task updated: ${description}`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    });

// Delete a task
program
    .command('delete <id>')
    .description('Delete a task')
    .action((id) => {
        let tasks = loadTasks();
        tasks = tasks.filter((task) => task.id !== parseInt(id));
        saveTasks(tasks);
        console.log(`Task with ID ${id} deleted.`);
    });

// Mark a task as in progress
program
    .command('inprogress <id>')
    .description('Mark a task as in progress')
    .action((id) => {
        const tasks = loadTasks();
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
        if (taskIndex > -1) {
            tasks[taskIndex].status = 'in progress';
            saveTasks(tasks);
            console.log(`Task with ID ${id} marked as in progress.`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    });

// Mark a task as done
program
    .command('done <id>')
    .description('Mark a task as done')
    .action((id) => {
        const tasks = loadTasks();
        const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
        if (taskIndex > -1) {
            tasks[taskIndex].status = 'done';
            saveTasks(tasks);
            console.log(`Task with ID ${id} marked as done.`);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    });

// List all tasks
program
    .command('list')
    .description('List all tasks')
    .action(() => {
        listTasks();
    });

// List all done tasks
program
    .command('list-done')
    .description('List all done tasks')
    .action(() => {
        listTasks((task) => task.status === 'done');
    });

// List all not done tasks
program
    .command('list-not-done')
    .description('List all not done tasks')
    .action(() => {
        listTasks((task) => task.status === 'not done');
    });

// List all tasks in progress
program
    .command('list-inprogress')
    .description('List all tasks in progress')
    .action(() => {
        listTasks((task) => task.status === 'in progress');
    });

program.parse(process.argv);
