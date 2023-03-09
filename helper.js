const Task = require("./classes/Task");
const Robot = require("./classes/Robot");

function generateTasks(amount) {
	const tasks = [];

	for (let i = 0; i < amount; i++) {
		const randomPriority = Math.ceil(Math.random() * 5);
		const task = new Task(randomPriority);

		tasks.push(task);
	}

	return tasks;
}

function createRobots(amount) {
	const robots = [];

	for (let i = 0; i < amount; i++) {
		const robot = new Robot();

		robots.push(robot);
	}

	return robots;
}

module.exports = {
	generateTasks,
	createRobots,
};
