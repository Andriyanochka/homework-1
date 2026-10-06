# To-Do List Manager 

## Application purpose
This project is a console-based JavaScript application designed for managing a task list. Its primary purpose is to reinforce practical skills in working with arrays, objects, loops, functions, array methods, and JSON format.

## Implemented features
The application implements the following features (including bonus challenges):
1. **Add Task:** Adds a new task with an auto-generated unique ID. Includes support for task priority and due dates.
2. **Show Tasks:** Displays all tasks in a formatted list showing their completion status (`[x]` or `[ ]`).
3. **Complete Task:** Changes a task's status to completed based on its ID.
4. **Remove Task:** Deletes a task by its ID, with prior validation to check if the task exists.
5. **Search Task:** Finds and returns tasks matching a specific keyword using the `.filter()` method.
6. **Count Tasks / Completed Tasks:** Calculates and displays the total number of tasks and the number of completed tasks.
7. **JSON Export/Import:** Provides functionality to export the tasks array into a JSON string and import data back from it.
8. **Sorting:** Sorts tasks alphabetically by name and by priority level.
9. **Statistics:** Displays overall statistics, including total tasks, completed tasks, open tasks, and the completion rate percentage.
10. **Validation:** Prevents adding tasks with empty titles and handles errors when attempting to remove a non-existent ID.

## Challenges encountered
* The main challenge was correctly implementing the task removal feature (`removeTask`). Attempting to delete an element directly while iterating through the array caused issues with indexes and console log logic.
* There were also minor difficulties with handling function return values, such as passing the exported JSON string directly into the import function via a variable rather than calling an undefined parameter.

## Lessons learned
* I learned the importance of separating function calls from function declarations, and understood that code placed after a `return` statement inside a function will not execute.
* I gained practical experience in input validation to prevent the application from breaking due to incorrect user actions.
* I clearly understood the difference between returning a value from a function (`return`) and simply logging it to the console.