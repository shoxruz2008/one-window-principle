// classes
const TaskManager = require("./classes/TaskManager");

// helper functions
const { generateTasks, createRobots } = require("./helper");

const robots = createRobots(3);
const tasks = generateTasks(10);

const taskManager = new TaskManager(robots, tasks);
