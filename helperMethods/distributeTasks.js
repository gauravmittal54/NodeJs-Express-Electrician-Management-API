function distributeTasks(totalTasks, totalWorkers) {
    const tasksPerWorker = Math.floor(totalTasks / totalWorkers);
    const remainingTasks = totalTasks % totalWorkers;
  
    const assignments = {};
  
    for (let i = 1; i <= totalWorkers; i++) {
      assignments[`worker${i}`] = tasksPerWorker + (i <= remainingTasks ? 1 : 0);
    }
  
    return assignments;
  }
  