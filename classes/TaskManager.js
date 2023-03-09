class TaskManager {
	static id = 0;

	constructor(robots, tasks) {
		this.tasks = tasks;
		this.robots = robots;
	}
}

module.exports = TaskManager;
