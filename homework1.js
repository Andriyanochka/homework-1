//task 1
let tasks = [
     {
    id: 1,
    title: 'Learn Closures',
    completed: false,
    priority: 'high',
    dueDate: '2026-10-15'
  },
  {
    id: 2,
    title: 'Practice Loops',
    completed: true,
    priority: 'medium',
    dueDate: '2026-12-12'
  },
    {
        id: 3,
        title: 'Learn Arrays',
        completed: false,
        priority: 'low',
        dueDate: '2026-11-24'
    }
];

let nextId = 4;

function addTask(title) {
    if (!title || title.trim() === '') {
        console.log('Error: Task title cannot be empty.');
        return;
    }
    const newTask = {
        id: nextId++,
        title: title,
        completed: false,
        priority: 'medium',
        dueDate: '2026-10-15'
    };
    tasks.push(newTask);
}

addTask('Learn Objects', 'high', '2026-10-16');
addTask('Learn Functions', 'low', '2026-10-17');
addTask('Learn Loops', 'medium', '2026-10-18');

console.log(tasks);
//task 2
function showTasks() {
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let status = task.completed ? 'x' : ' ';
        console.log(`[${status}] ${task.id} - ${task.title}`);
    }
}

//task3
function markCompleted(id){
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            return tasks[i];
        }
    }
    console.log(`Error: Task with ID ${id} does not exist!`);
}
markCompleted(3);
markCompleted(999);
showTasks();
//task4
function removeTask(id) {
    let indexToRemove = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            indexToRemove = i;
            break;
        }
    }
    if (indexToRemove !== -1) {
        tasks.splice(indexToRemove, 1);
        console.log(`Task with id ${id} has been removed.`);
    } else {
        console.log(`Error: Task with ID ${id} does not exist!`);
    }
}
removeTask(4)
showTasks();
//task 5
function findTask(keyword) {
   let matchedTasks = []; 

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.toLowerCase().includes(keyword.toLowerCase())) {
            matchedTasks.push(tasks[i]);
    }

    return matchedTasks;
}
}
findTask('Learn');

//task 6
function countTasks() {
    return tasks.length;

}
console.log(`Total tasks: ${countTasks()}`);

//task 7
function countCompletedTasks() {
    let completedCount = 0;
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === true) {
            completedCount++;
        }
    }
    
    return completedCount;
   
}
console.log(`Completed tasks: ${ countCompletedTasks()}`);
 
//task 8
function exportTasks() {
    return JSON.stringify(tasks, null, 2);
}

function importTasks(jsonString){
    tasks = JSON.parse(jsonString);
}

console.log(exportTasks());
importTasks(exportTasks())

//Bonus Challenges

function sortByName(){
    return tasks.sort((a, b) => a.title.localeCompare(b.title));
}
sortByName();
console.log("Sorted by name:")
showTasks();

function sortByPriority(){
    const Priority = { high: 3, medium: 2, low: 1 };
    return tasks.sort((a, b) => Priority[b.priority] - Priority[a.priority]);

}
sortByPriority();
console.log("Sorted by priority:");
showTasks();

function showStatistics() {

    
    console.log(`Total tasks: ${countTasks()}`);
    console.log(`Completed tasks: ${countCompletedTasks()}`);
    console.log(`Open tasks: ${countTasks() - countCompletedTasks()}`);
    console.log(`Completion Rate: ${((countCompletedTasks() / countTasks()) * 100).toFixed(2)}%`);
}
showStatistics()