import { useState } from 'react';
import { Header } from './Header';
import { NewTask } from './NewTask';
import { TaskList } from './TaskList';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function removeTaskItem(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(taskWithoutDeletedOne);
  }

  function toggleCompleteTaskItem(taskToToggle: Task) {
    const taskIndex = tasks.findIndex((task) => task.id === taskToToggle.id);
    const updateTasks = [...tasks];

    updateTasks[taskIndex].isCompleted = !taskToToggle.isCompleted;

    setTasks(updateTasks);
  }

  return (
    <>
      <Header />
      <NewTask onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        removeTaskItem={removeTaskItem}
        toggleCompleteTaskItem={toggleCompleteTaskItem}
      />
    </>
  );
}
