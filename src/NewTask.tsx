import { PlusCircle as PlusCircleIcon } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 } from 'uuid';

import styles from './NewTask.module.css';

type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
};

type NewTaskProps = {
  onAddTask(task: Task): void;
};

export function NewTask({ onAddTask }: NewTaskProps) {
  const [newTaskName, setNewTaskName] = useState('');

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    if (!newTaskName) return;

    const newTask = {
      id: v4(),
      name: newTaskName,
      isCompleted: false,
    };

    onAddTask(newTask);
    setNewTaskName('');
  }

  function handleNewTaskNameChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskName(e.target.value);
  }

  return (
    <form
      onSubmit={handleCreateNewTask}
      className={styles['NewTask__container']}
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles['NewTask__Input']}
        onChange={handleNewTaskNameChange}
        value={newTaskName}
      />
      <button type="submit" className={styles['NewTask__Button']}>
        Criar
        <PlusCircleIcon className={styles['NewTask__Icon']} />
      </button>
    </form>
  );
}
