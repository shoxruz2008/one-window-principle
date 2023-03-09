class Robot {
	static id = 0;

	constructor() {
		this.id = id++;
		this.successCount = 0;
		this.failureCount = 0;
		this.timeSpent = 0;
		this.tasks = [];
	}

	async takeTask(task) {
		const startTime = new Date.now();

		await task.job().then(
			() => null,
			() => null
		);

		const endTime = new Date.now();
	}
}
