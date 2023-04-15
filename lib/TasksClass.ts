// I _dont_ think the two route handlers are sharing the same instance of TasksClass
// so I'm i/o the state to a file
import fs from "fs";

type TasksType = string[];

class TasksClass {
  createTask = (task: string) => {
    const tasks = this.getTasks();
    const data = {
      tasks: [...tasks, task],
    };
    fs.writeFileSync("/tmp/tasks.json", JSON.stringify(data));
  };
  getTasks(): TasksType {
    if (!fs.existsSync("/tmp/tasks.json")) return [];
    const state = JSON.parse(fs.readFileSync("/tmp/tasks.json").toString());
    return Array.isArray(state.tasks) ? state.tasks : [];
  }
}

const Tasks = new TasksClass();

export { Tasks };
