class Task {
	static id = 0;

	constructor(priority) {
		this.id = "task_".concat(Task.id++);
		this.priority = priority;
		this.job = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					return Math.round(Math.random()) > 0 ? resolve() : reject();
				}, Math.ceil(Math.random() * 5) * 1000);
			});
		};
	}
}

module.exports = Task;
